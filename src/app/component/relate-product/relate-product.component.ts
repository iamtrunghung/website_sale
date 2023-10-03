import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-relate-product',
  templateUrl: './relate-product.component.html',
  styleUrls: ['./relate-product.component.scss']
})
export class RelateProductComponent implements OnInit {
  productsRelate: any = [];
  @Input() product: any;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getProductsRelate();
  }
  getProductsRelate(){
    this.productsRelate = this.productService.getProducts().filter((item: any)=>item.category === this.product.category && item.id !== this.product.id);
  }
  viewDetailProduct(product: any){
    this.router.navigate(['/product-detail'],{state: {
      data: JSON.stringify(product)}
  });
  }
  
}
