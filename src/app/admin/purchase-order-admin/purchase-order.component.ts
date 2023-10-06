import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {
  invoiceList: any = [];
  keySearch: string = '';
  isOpenDetail: boolean = false;
  detailInvoice: any;
  orderStatus: any = [
    'Pending','Processing','Confirmed','Out for Delivery','Delivered'
  ]
  constructor() { }

  ngOnInit(): void {
    this.getInvoiceList();
  }
  getInvoiceList(){
    this.invoiceList = JSON.parse(localStorage.getItem('order') || '[]');
  }
  viewDetail(idBill: any){
    this.detailInvoice = this.invoiceList.filter((item: any)=> item.id_bill === idBill)
    this.isOpenDetail = true;
  }
  onChange(event:Event, data: any){
    const storageData = JSON.parse(localStorage.getItem('order') || '[]');
    const index = storageData.findIndex((item: any) => item.id_bill === data.id_bill);
    if (index !== -1) {
      // Update the field (replace 'fieldName' with the actual field you want to update)
      storageData[index] = data;
  
      // Save the updated array back to localStorage
      localStorage.setItem('order', JSON.stringify(storageData));
    }
  }
  printBill(){
    window.print();
  }
  handleOk(): void {
    this.isOpenDetail = false;
  }

  handleCancel(): void {
    this.isOpenDetail = false;
  }
}
