import { NgModule } from '@angular/core';
import { AuthGuard } from './auth/auth.guard';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './pages/customer-register/customer-register.component';
import { SellerRegisterComponent } from './pages/seller-register/seller-register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SellerLoginComponent } from './pages/seller-login/seller-login.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component:  CustomerLoginComponent},
  { path: 'register', component: CustomerRegisterComponent },
  { path: 'products/:search/:searchId', component:  ProductListComponent},
  { path: 'product/:productId', component:  ProductDetailsComponent},
  { path: 'dashboard',canActivate:[AuthGuard], component:  DashboardComponent},
  { path: 'seller/dashboard',canActivate:[AuthGuard], component:  SellerDashboardComponent},

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
