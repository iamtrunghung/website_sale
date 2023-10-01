import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpenMenu: boolean = false;
  isShowCart: boolean = false;
  products: any = [];;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cart: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.cart.loadCart()
  }
  handleOpenMenuHambuger(){
    this.isOpenMenu = !this.isOpenMenu;
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
  showCart(){
    this.isShowCart = true;
  }
  closeCart(){
    this.isShowCart = false;
  }
}
