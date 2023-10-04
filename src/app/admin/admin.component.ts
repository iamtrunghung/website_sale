import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isShowProductList: boolean = false;
  isShowProductFeature: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  goToProductList(){
    this.isShowProductList = true;
    this.isShowProductFeature = false;
  }
  goToProductFeature(){
    this.isShowProductFeature = true;
    this.isShowProductList = false;
  }
}
