import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { product, products } from '../data-type';
import { Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  item$!: Observable<product[]>;
  firestore: Firestore = inject(Firestore);
  constructor(
    private HttpClient: HttpClient,
    private message: NzMessageService
  ) { }
  getProduct(id: number){
    return this.HttpClient.get<product>(`https://651e46bf44a3a8aa4767f460.mockapi.io/api/v1/products/${id}`);
  }
  getProducts() {
    return this.HttpClient.get<product>('https://651e46bf44a3a8aa4767f460.mockapi.io/api/v1/products');
  }
  addnewProduct(product: any) {
    fetch('https://651e46bf44a3a8aa4767f460.mockapi.io/api/v1/products', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      // Send your data in the request body as JSON
      body: JSON.stringify(product)
    }).then((res: any) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      // do something with the new task
    }).catch(error => {
      console.log('error', error);
      // handle error
    })
  }
  updateProduct(value: any) {
    fetch(`https://651e46bf44a3a8aa4767f460.mockapi.io/api/v1/products/${value.id}`, {
      method: 'PUT', // or PATCH
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(value)
    }).then((res: any) => {
      if (res.ok) {
        this.message.success('Update Success !!!');
        return res.json();
      }
      // handle error
    }).then(task => {
      console.log('task',task);
      // Do something with updated task
    }).catch(error => {
      console.log('error', error);
      // handle error
    })
  }
  deleteProduct(id: number) {
    fetch(`https://651e46bf44a3a8aa4767f460.mockapi.io/api/v1/products/${id}`, {
      method: 'DELETE',
    }).then((res: any) => {
      if (res.ok) {
        this.message.success('Delete Success !!!');
        return res.json();
      }
      // handle error
    }).then(task => {
      // Do something with deleted task
    }).catch(error => {
      console.log('error', error);
      // handle error
    })
  }
}
