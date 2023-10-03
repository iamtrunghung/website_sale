import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { product, products } from '../data-type';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  item$!: Observable<product[]>;
  firestore: Firestore = inject(Firestore);
  constructor(
    private HttpClient: HttpClient
  ) { }
  getProducts(){
    return products;
  }
}
