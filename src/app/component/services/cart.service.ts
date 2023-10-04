import { Injectable } from '@angular/core';
import { Product } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any= [];
  constructor(
  ) { }
  addToCart(product: Product) {
    this.items.push(product);
    this.saveCart();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem("cart_items");
    return this.items;
  }
  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem("cart_items") || '[]');
    return this.items;
  }
  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items)); 
  }
}
