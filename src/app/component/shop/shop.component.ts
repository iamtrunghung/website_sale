import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: any = []
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private product: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.product.getProducts().subscribe((res)=>{
      this.products = res;
    })
  }
  viewDetailProduct(idProduct: any){
    this.router.navigate([`/chi-tiet-san-pham/${idProduct}`])
  }
}
