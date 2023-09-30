import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: any = [];
  searchProducts: any = [];
  keySearch: string = '';
  valueRangePrice: any = [0,1000];
  optionSelected: string = '';
  sortProducts: any = [
    {name: 'low to high'},
    {name: 'high to low'}
  ]
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private product: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  formatterDollar = (value: number): string => `$ ${value}`;
  parserDollar = (value: string): string => value.replace('$ ', '');
  getProducts() {
    this.product.getProducts().subscribe((res)=>{
      this.products = this.searchProducts = res;
    })
  }
  handleSearchProduct(key: any){
    if(key === ''){
      this.products = this.searchProducts;
    }else{
      this.products = this.products.filter((product: any) =>product.title.toLowerCase().includes(key.toLowerCase()));
    }
  }
  handleSearchPrice(price: any){
    this.products = this.products.filter((product: any) => product.price > price[0] && product.price <= price[1]);
  }
  handleSortProduct(optionSelected: any){
    switch (optionSelected) {
      case 'low to high':
        this.products = this.products.sort((a: any,b: any)=> a.price - b.price);
        break;
      case 'high to low':
        this.products = this.products.sort((a: any,b: any)=> b.price - a.price);
        break;
    }
  }
  viewDetailProduct(idProduct: any){
    this.router.navigate([`/chi-tiet-san-pham/${idProduct}`])
  }
}
