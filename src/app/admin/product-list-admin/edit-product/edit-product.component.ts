import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ProductsService } from 'src/app/component/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  data: any = ``;
  formEditProduct!: FormGroup;
  fileToUpload: any = '';
  editor: any = ClassicEditor;
  productList: any = [];
  @Input() idProduct: number = 0
  @Output() isCloseModal = new EventEmitter<boolean>();
  @Output() isCallAgain = new EventEmitter<boolean>();
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService
  ) {
    this.initFormAdd(fb,Object.keys({}))
  }

  ngOnInit(): void {
    this.getDataEdit();
  }
  getProducts(){
    this.productService.getProducts().subscribe((result: any)=>{
      this.productList = result;
    })
  }
  getDataEdit(){
    this.productService.getProduct(Number(this.idProduct)).subscribe((result: any)=>{
      this.initFormAdd(this.fb,result);
    })
  }
  initFormAdd(fb: any, result: any) {
    this.formEditProduct = fb.group({
      name: new FormControl(result.name, Validators.required),
      price: new FormControl(result.price, Validators.required),
      unit: new FormControl(result.unit, Validators.required),
      category: new FormControl(result.category, Validators.required),
      id: new FormControl(result.id)
    })
    this.fileToUpload = result.image;
    this.data = result.description;
  }
  get formAdd() { return this.formEditProduct.controls };
  handleFileInput(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.fileToUpload = reader.result;

      reader.readAsDataURL(file);
    }
  }
  handleOk(): void {
    this.productService.updateProduct(this.formEditProduct.value);
    this.isCloseModal.emit(false);
    this.isCallAgain.emit(true);
  }
  handleCancel(){
    this.isCloseModal.emit(false);
  }
}
