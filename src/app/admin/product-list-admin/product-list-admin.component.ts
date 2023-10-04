import { Component, OnInit } from '@angular/core';
import { products } from '../../component/data-type';
@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.scss']
})
export class ProductListAdminComponent implements OnInit {
  productList: any = [];
  isOpenForm: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){
    this.productList = products;
  }
  openFormAdd(){
    this.isOpenForm = true;
  }
  handleOk(): void {
    this.isOpenForm = false;
  }

  handleCancel(): void {
    this.isOpenForm = false;
  }
}
