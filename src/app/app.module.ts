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
import { provideAuth, getAuth } from '@angular/fire/auth'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { AdminComponent } from './admin/admin.component';
import { ProductListAdminComponent } from './admin/product-list-admin/product-list-admin.component';
import { ProductFeatureAdminComponent } from './admin/product-feature-admin/product-feature-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { CKEditorModule } from 'ckeditor4-angular';
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
    CheckoutComponent,
    AdminComponent,
    ProductListAdminComponent,
    ProductFeatureAdminComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzAntdModule,
    ReactiveFormsModule,
    CKEditorModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
