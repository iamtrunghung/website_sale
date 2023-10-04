import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpenMenu: boolean = false;
  isShowCart: boolean = false;
  products: any = [];
  user: any = {}
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cart: CartService,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.products = this.cart.loadCart();
    this.getProfile();
  }
  handleOpenMenuHambuger(){
    this.isOpenMenu = !this.isOpenMenu;
  }
  getProfile(){
    this.userService.getProfile()?.subscribe((result: any)=>{
      if(result){
        this.user = result;
      }
    })
  }
  logout(){
    this.userService.logout();
    location.reload();
  }
  calculateTotal(){
    return this.products.reduce((initValue: any, currentValue: any)=>{
      return initValue + (currentValue.price * currentValue.quantity);
    },0)
  }
  removeItem(idProduct: any){
    this.products = this.products.filter((prd: any)=> prd.id !== idProduct);
    localStorage.setItem("cart_items", JSON.stringify(this.products));
  }
  goToCart(){
    this.router.navigate(['/cart']);
  }
  goToCheckOut(){
    this.router.navigate(['/checkout']);
  }
  showCart(){
    this.isShowCart = true;
  }
  closeCart(){
    this.isShowCart = false;
  }
}
