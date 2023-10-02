import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzAntdModule } from './nz-antd/nz-antd.module';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { IntroduceComponent } from './component/introduce/introduce.component';
import { ProductFeatureComponent } from './component/product-feature/product-feature.component';
import { ShopComponent } from './component/shop/shop.component';
import { DetailProductComponent } from './component/detail-product/detail-product.component';
import { RelateProductComponent } from './component/relate-product/relate-product.component';
import { CartComponent } from './component/cart/cart.component';
import { RegisterComponent } from './component/header/register/register.component';
import { LoginComponent } from './component/header/login/login.component';
import { UserComponent } from './component/header/user/user.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    IntroduceComponent,
    ProductFeatureComponent,
    ShopComponent,
    DetailProductComponent,
    RelateProductComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzAntdModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
