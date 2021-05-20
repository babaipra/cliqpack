import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './pages/customer-register/customer-register.component';
import { SellerRegisterComponent } from './pages/seller-register/seller-register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SellerLoginComponent } from './pages/seller-login/seller-login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerLoginComponent,
    CustomerRegisterComponent,
    SellerRegisterComponent,
    DashboardComponent,
    SellerLoginComponent,
    ProductListComponent,
    ProductDetailsComponent,
    SellerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  BrowserAnimationsModule,ReactiveFormsModule,
    ToastrModule.forRoot(),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
