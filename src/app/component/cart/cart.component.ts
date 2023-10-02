import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any = [];
  user: any;
  constructor(
    private cart: CartService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getCartItem();
    this.getProfile();
  }
  getCartItem() {
    this.items = this.cart.loadCart();
  }
  getProfile(){
    this.userService.getProfile()?.subscribe((result: any)=>{
      if(result){
        this.user = result;
      }
    })
  }
  increase(item: any) {
    item.quantity += 1;
    localStorage.setItem("cart_items", JSON.stringify(this.items))
  }
  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
    localStorage.setItem("cart_items", JSON.stringify(this.items))
  }
  calculateTotal(){
    return this.items.reduce((value: any,currentValue: any)=>{
      return value + (currentValue.price * currentValue.quantity);
    },0)
  }
  removeItem(idProduct: any){
    this.items = this.items.filter((prd: any)=> prd.id !== idProduct);
    localStorage.setItem("cart_items", JSON.stringify(this.items));
  }
}
