import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  product: any = [];
  valueQuantity: number = 1;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private message: NzMessageService,
    private cart: CartService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('idProduct'));
     this.productService.getProducts().subscribe((result: any)=>{
      this.product = result.find((product: any) => Number(product.id) === productIdFromRoute)
    })
  }
  increase() {
    this.valueQuantity += 1;
  }
  decrease() {
    if (this.valueQuantity > 1) {
      this.valueQuantity -= 1;
    }
  }
  addToCart(product: any){
    product['quantity'] = this.valueQuantity;
    this.cart.addToCart(product);
    this.message.create('success', `${product.name} has been added your cart`);
  }
  zoomImage(event: any) {
    let zoomer = event.currentTarget;
    let offsetX = 0;
    let offsetY = 0;
    event.offsetX ? offsetX = event.offsetX : offsetX = event.touches[0].pageX
    event.offsetY ? offsetY = event.offsetY : offsetX = event.touches[0].pageX
    let x = offsetX / zoomer.offsetWidth * 100
    let y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }
}
