import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ShopComponent } from './component/shop/shop.component';
import { ContactComponent } from './component/contact/contact.component';
import { DetailProductComponent } from './component/detail-product/detail-product.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gioi-thieu',
    component: AboutComponent
  },
  {
    path: 'cua-hang',
    component: ShopComponent
  },
  {
    path: `chi-tiet-san-pham/:productId`,
    component: DetailProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'lien-he',
    component: ContactComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
