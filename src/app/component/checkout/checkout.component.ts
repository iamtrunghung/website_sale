import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items: any = [];
  constructor(
    private cart: CartService,
  ) { }

  ngOnInit(): void {
    this.getCartItem();
  }
  getCartItem() {
    this.items = this.cart.loadCart();
  }
  calculateTotal(){
    return this.items.reduce((value: any,currentValue: any)=>{
      return value + (currentValue.price * currentValue.quantity);
    },0)
  }
}
