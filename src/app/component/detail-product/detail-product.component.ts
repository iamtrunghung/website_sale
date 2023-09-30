import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

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
  ) { }

  ngOnInit(): void {
    const product = Number(this.route.snapshot.paramMap.get('productId'));
    if (product) {
      this.productService.getProduct(product).subscribe((product)=>{
        this.product = product;
        console.log('product',this.product);
      })
    }
  }
  increase() {
    this.valueQuantity += 1;
  }
  decrease() {
    if (this.valueQuantity > 1) {
      this.valueQuantity -= 1;
    }
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
