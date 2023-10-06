import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items: any = [];
  listOrder:any = []
  formOrder!: FormGroup;
  constructor(
    private cart: CartService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router
  ) {
    this.initFormOrder(fb);
  }

  ngOnInit(): void {
    this.getCartItem();
    this.getOrder();
  }
  initFormOrder(fb: any) {
    this.formOrder = fb.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      orders: new FormControl('')
    })
  }
  getCartItem() {
    this.items = this.cart.loadCart();
  }
  getOrder(){
    this.listOrder = JSON.parse(localStorage.getItem('order') || '[]');
  }
  calculateTotal() {
    return this.items.reduce((value: any, currentValue: any) => {
      return value + (currentValue.price * currentValue.quantity);
    }, 0)
  }
  get form() { return this.formOrder.controls }
  order() {
    const valueUser = this.formOrder.value;
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();
    const order_detail = this.items;
    const total_detail = this.items.reduce((acc: any,curr: any)=>{
      return acc + (curr.price * curr.quantity);
    },0)
    let data_order = {
      id_bill: uniqid,
      user: valueUser,
      order: order_detail,
      total_bill: total_detail,
      status: 'Pending',
      create_at: new Date()
    }
    this.listOrder.push(data_order)
    localStorage.setItem('order', JSON.stringify(this.listOrder));
    this.message.success('Order Success !!!');
    this.formOrder.reset();
    setTimeout(() => {
      this.cart.clearCart();
      this.router.navigate(['/']);
    }, 1000);
  }
}
