import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ProductsService } from 'src/app/component/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  data: any = ``;
  formAddProduct!: FormGroup;
  fileToUpload: any = '';
  editor: any = ClassicEditor;
  productList: any = [];
  @Output() isCloseModal = new EventEmitter<boolean>();
  @Output() isCallAgain = new EventEmitter<boolean>();
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService
  ) {
    this.initFormAdd(fb);
   }

  ngOnInit(): void {
  }
  getProducts(){
    this.productService.getProducts().subscribe((result: any)=>{
      this.productList = result;
    })
  }
  initFormAdd(fb: any) {
    this.formAddProduct = fb.group({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      unit: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    })
  }
  get formAdd() { return this.formAddProduct.controls };
  handleFileInput(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.fileToUpload = reader.result;

      reader.readAsDataURL(file);
    }
  }
  handleOk(): void {
    let data_add = {
      name: this.formAddProduct.value.name,
      price: this.formAddProduct.value.price,
      description: this.data,
      category: this.formAddProduct.value.category,
      unit: this.formAddProduct.value.unit,
      image: this.fileToUpload,
      id: String(this.productList.length)
    }
    this.productService.addnewProduct(data_add);
    this.isCloseModal.emit(false);
    this.isCallAgain.emit(true);
  }
  handleCancel(){
    this.isCloseModal.emit(false);
  }
}
