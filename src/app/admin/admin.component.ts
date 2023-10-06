import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isShowProductList: boolean = false;
  isShowInvoice: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  goToProductList(){
    this.isShowProductList = true;
    this.isShowInvoice = false;
  }
  goToInvoice(){
    this.isShowInvoice = true;
    this.isShowProductList = false;
  }
}
