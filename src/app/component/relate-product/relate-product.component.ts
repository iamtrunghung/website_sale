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
    this.productService.getProducts().subscribe((products: any)=>{
      this.productsRelate = products.filter((item: any)=>item.category.id === this.product.category.id && item.id !== this.product.id);
    })
  }
  viewDetailProduct(idProduct: any){
    this.router.navigate(['/chi-tiet-san-pham',idProduct],{relativeTo: this.route});
  }
  
}
