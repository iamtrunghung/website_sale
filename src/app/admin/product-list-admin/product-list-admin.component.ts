import { Component, OnInit} from '@angular/core';
import { ProductsService } from 'src/app/component/services/products.service';
@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.scss']
})
export class ProductListAdminComponent implements OnInit {
  productList: any = [];
  listProductFiltered: any = [];
  isOpenForm: boolean = false;
  isFormAdd: boolean = false;
  isFormEdit: boolean = false;
  callAgain: boolean = false;
  idProductToEdit: number = 0;
  keySearch: string = '';
  constructor(
    private productService: ProductsService
  ) {
  }
  ngOnInit(): void {
    this.getProducts();
  }
  ngAfterViewChecked(){
    if(this.callAgain){
      setTimeout(() => {
        this.getProducts();
        this.callAgain = false;
      }, 200);
    }
  }
  getProducts() {
    this.productService.getProducts().subscribe((result: any)=>{
      this.productList = this.listProductFiltered = result;
    });
  }
  handleSearch(key: any){
    if(key == ''){
      this.productList = this.listProductFiltered;
    }else{
      this.productList = this.listProductFiltered.filter((item: any)=> item.name.toLowerCase().includes(key.toLowerCase()));
    }
  }
  openFormAdd() {
    this.isOpenForm = true;
    this.isFormAdd = true;
  }
  editProduct(id: number){
    this.isOpenForm = true;
    this.isFormEdit = true;
    this.idProductToEdit = Number(id);
  }
  deleteProduct(event: Event,id: number){
    event.stopPropagation();
    this.productService.deleteProduct(id);
    this.getProducts();
  }
  closeModalAdd(event: any): void {
    this.isOpenForm = event;
    this.isFormAdd = event;
  }
  isCallAgainData(event: any){
    this.callAgain = event;
  }
}
