import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private HttpClient: HttpClient
  ) { }
  getProduct(id: number){
    return this.HttpClient.get<product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
  getProducts(){
    return this.HttpClient.get<product>(`https://api.escuelajs.co/api/v1/products?offset=2&limit=10`)
  }
  getProductByCategory(id: number){
    return this.HttpClient.get<product>(`https://api.escuelajs.co/api/v1/categories/${id}/products?offset=0&limit=10`)
  }
}
