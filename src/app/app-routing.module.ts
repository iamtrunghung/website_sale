import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ShopComponent } from './component/shop/shop.component';
import { ContactComponent } from './component/contact/contact.component';
import { DetailProductComponent } from './component/detail-product/detail-product.component';
import { CartComponent } from './component/cart/cart.component';
import { RegisterComponent } from './component/header/register/register.component';
import { LoginComponent } from './component/header/login/login.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { ProductListAdminComponent } from './admin/product-list-admin/product-list-admin.component';
import { ProductFeatureAdminComponent } from './admin/product-feature-admin/product-feature-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'admin', redirectTo: '/admin', pathMatch: 'full'},
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gioi-thieu',
    component: AboutComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'product-detail/:idProduct',
    component: DetailProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'lien-he',
    component: ContactComponent
  },
  {
    path: 'sign-in',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: RegisterComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/home',
    component: HomeAdminComponent
  },
  {
    path: 'product-list',
    component: ProductListAdminComponent
  },
  {
    path: 'product-feature',
    component: ProductFeatureAdminComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
