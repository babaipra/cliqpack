(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_customer_login_customer_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/customer-login/customer-login.component */ "./src/app/pages/customer-login/customer-login.component.ts");
/* harmony import */ var _pages_customer_register_customer_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/customer-register/customer-register.component */ "./src/app/pages/customer-register/customer-register.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/product-list/product-list.component */ "./src/app/pages/product-list/product-list.component.ts");
/* harmony import */ var _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");
/* harmony import */ var _pages_seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/seller-dashboard/seller-dashboard.component */ "./src/app/pages/seller-dashboard/seller-dashboard.component.ts");













const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _pages_customer_login_customer_login_component__WEBPACK_IMPORTED_MODULE_5__["CustomerLoginComponent"] },
    { path: 'register', component: _pages_customer_register_customer_register_component__WEBPACK_IMPORTED_MODULE_6__["CustomerRegisterComponent"] },
    { path: 'products/:search/:searchId', component: _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"] },
    { path: 'product/:productId', component: _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"] },
    { path: 'dashboard', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
    { path: 'seller/dashboard', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], component: _pages_seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["SellerDashboardComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'cliqpack';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_customer_login_customer_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/customer-login/customer-login.component */ "./src/app/pages/customer-login/customer-login.component.ts");
/* harmony import */ var _pages_customer_register_customer_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/customer-register/customer-register.component */ "./src/app/pages/customer-register/customer-register.component.ts");
/* harmony import */ var _pages_seller_register_seller_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/seller-register/seller-register.component */ "./src/app/pages/seller-register/seller-register.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_seller_login_seller_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/seller-login/seller-login.component */ "./src/app/pages/seller-login/seller-login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/product-list/product-list.component */ "./src/app/pages/product-list/product-list.component.ts");
/* harmony import */ var _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");
/* harmony import */ var _pages_seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/seller-dashboard/seller-dashboard.component */ "./src/app/pages/seller-dashboard/seller-dashboard.component.ts");















// import { HttpClientModule, HttpClient } from '@angular/common/http';






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _pages_customer_login_customer_login_component__WEBPACK_IMPORTED_MODULE_6__["CustomerLoginComponent"],
        _pages_customer_register_customer_register_component__WEBPACK_IMPORTED_MODULE_7__["CustomerRegisterComponent"],
        _pages_seller_register_seller_register_component__WEBPACK_IMPORTED_MODULE_8__["SellerRegisterComponent"],
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _pages_seller_login_seller_login_component__WEBPACK_IMPORTED_MODULE_10__["SellerLoginComponent"],
        _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_16__["ProductListComponent"],
        _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__["ProductDetailsComponent"],
        _pages_seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["SellerDashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _pages_customer_login_customer_login_component__WEBPACK_IMPORTED_MODULE_6__["CustomerLoginComponent"],
                    _pages_customer_register_customer_register_component__WEBPACK_IMPORTED_MODULE_7__["CustomerRegisterComponent"],
                    _pages_seller_register_seller_register_component__WEBPACK_IMPORTED_MODULE_8__["SellerRegisterComponent"],
                    _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                    _pages_seller_login_seller_login_component__WEBPACK_IMPORTED_MODULE_10__["SellerLoginComponent"],
                    _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_16__["ProductListComponent"],
                    _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__["ProductDetailsComponent"],
                    _pages_seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["SellerDashboardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthService {
    constructor() { }
    logout() {
        window.localStorage.setItem('isLoggedIn', 'false');
        window.localStorage.removeItem('email');
        window.localStorage.removeItem('name');
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('role');
        window.localStorage.removeItem('authtoken');
        // http://dev1.ivantechnology.in/cliqpack/api/v1/auth/logout 
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthGuard {
    canActivate(next, state) {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            return true;
        }
        else {
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 190, vars: 0, consts: [[1, "mt-auto", "payment-list"], [1, "container"], [1, "row", "no-gutters"], [1, "col-lg-3", "col-md-6", "bg-white"], ["href", " terms", 1, "text-reset", "text-center", "px-4", "py-4", "d-block", "h-100"], ["src", "assets/cliqpack/index_files/footer-1.png", "alt", ""], ["href", " returnpolicy", 1, "text-reset", "border-left", "text-center", "px-4", "py-4", "d-block", "h-100"], ["src", "assets/cliqpack/index_files/footer-2.png", "alt", ""], ["href", " supportpolicy", 1, "text-reset", "border-left", "text-center", "px-4", "py-4", "d-block", "h-100"], ["src", "assets/cliqpack/index_files/footer-3.png", "alt", ""], ["href", " privacypolicy", 1, "text-reset", "border-left", "text-center", "px-4", "py-4", "d-block", "h-100"], ["src", "assets/cliqpack/index_files/footer-4.png", "alt", ""], [1, "footer-cont-top", "pb-0"], [1, "row"], [1, "col-md-12", "col-sm-12", "col-lg-12"], [1, "footer-dt"], [1, "section", "footer-sec"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-12"], [1, "ftr-link"], [1, "footer-sub-head"], ["href", " category/men", "aria-current", "page"], ["href", " category/books-nc5i6", "aria-current", "page"], ["href", " category/women", "aria-current", "page"], ["href", " category/beauty", "aria-current", "page"], ["href", " category/Home--Kitchen-zRbKq", "aria-current", "page"], ["href", " category/test-ovSgR", "aria-current", "page"], ["href", "#", "aria-current", "page"], ["href", " search", "aria-current", "page"], ["href", " latest-product", "aria-current", "page"], ["href", " featured-product", "aria-current", "page"], ["href", "javascript:void(0);", "aria-current", "page"], ["href", " shops/create", "aria-current", "page"], ["href", " terms", "aria-current", "page"], ["href", " privacypolicy", "aria-current", "page"], [1, "col-lg-3", "col-md-3", "col-sm-4", "col-12"], [1, "footer-cont"], ["href", "mailto:admin@letslearntelugu.com"], ["href", "tel:1234567890"], [1, "footer-bt"], [1, "row", "justify-content-between"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-12"], [1, "social"], ["href", "https://www.facebook.com/5", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "sk_facebook"], [1, "fa", "fa-facebook"], ["href", "https://twitter.com/", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "sk_twitter"], [1, "fa", "fa-twitter"], ["href", "https://accounts.google.com/login", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "sk_googleplus"], ["aria-hidden", "true", 1, "fa", "fa-google-plus"], ["href", "https://in.pinterest.com/login/", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "sk_pinterest"], ["aria-hidden", "true", 1, "fa", "fa-pinterest"], ["href", "https://www.youtube.com/", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "sk_youtube"], ["aria-hidden", "true", 1, "fa", "fa-youtube"], ["href", "https://www.skype.com/en/", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "sk_skype"], ["aria-hidden", "true", 1, "fa", "fa-skype"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-12", "text-center"], [1, "payment-method"], ["src", "assets/cliqpack/index_files/payment.png", "alt", ""], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-12", "text-center"], [1, "copyright-text"], ["href", "javascript:void(0);"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "100% Secure Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Moving your card details to a much more secured place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Trustpay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "100% payment Protection. Easy Return Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Got aquestion? Look no further. Browse our FAQS or submit your query here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Shop On The Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Download the app and get exciting app only offers at your fingertips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "CliqPack - Final Destination of Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "CliqPack Trusted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Beauty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Corona/Flue Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Home & Kitchen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Collectables & fine Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Mob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Useful Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "All Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Latest Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Become a Seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Useful Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Terms & Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "CLIQPACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bangladesh, 560103, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "support@cliqpack.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Phone : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "1234567891");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Registered Office Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "cliqpack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Buildings Alyssa, Begonia &");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Clove Embassy Tech Village, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Outer Ring Road, Devarabeesanahalli Village,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Bangladesh, 560103,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Join us on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Payment Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "2021 \u00A9 All rights reserved @");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " CliqPack ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notification.service */ "./src/app/notification.service.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services.service */ "./src/app/services.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

// import { Router } from '@angular/router';









const _c0 = function () { return ["/login"]; };
function HeaderComponent_a_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function HeaderComponent_a_118_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_118_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(route, notifyService, http, api, auth) {
        this.route = route;
        this.notifyService = notifyService;
        this.http = http;
        this.api = api;
        this.auth = auth;
    }
    ngOnInit() {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            this.log_val = true;
        }
        else {
            this.log_val = false;
            // this.route.navigate(['/']);
        }
    }
    logOut() {
        const auth_token = window.localStorage.getItem('authtoken');
        const api_url = this.api.api_url;
        const url = api_url + 'auth/web/logout';
        // console.log(auth_token);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': auth_token
        });
        // headers.append('content-type', 'application/json')
        // headers.append('Access-Control-Allow-Origin', '*')
        // headers.append('Authorization', auth_token)
        // let options = { headers: headers };
        // const options :any={
        //   'content-type': 'application/json',
        //   'Authorization':auth_token
        // };
        // console.log(options);
        const formData = '';
        this.http.post(url, formData, { headers: headers }).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.auth.logout();
                location.reload();
            }
            else {
                this.notifyService.showWarning("Somthing went wrong !!!!", "");
            }
        }, (err) => {
            // this.notifyService.showWarning("Somthing went wrong !!!!", "")
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 150, vars: 2, consts: [[1, "top-navbar", "bg-white", "border-soft-secondary", "z-1035"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-md-7", "col-sm-12", "col-12"], [1, "list-inline", "d-flex", "justify-content-between", "justify-content-lg-start", "mb-0"], ["id", "lang-change", 1, "list-inline-item", "dropdown", "mr-3"], ["href", "javascript:void(0)", "data-toggle", "dropdown", "data-display", "static", 1, "dropdown-togglepy-2"], ["src", "assets/cliqpack/index_files/en.png", "alt", "English", "height", "11", 1, "mr-2", "ls-is-cached", "lazyloaded"], [1, "dropdown-menu", "dropdown-menu-left"], ["href", "javascript:void(0)", "data-flag", "en", 1, "dropdown-item"], ["src", "assets/cliqpack/index_files/en.png", "alt", "English", "height", "11", 1, "mr-1", "lazyload"], [1, "language"], ["href", "javascript:void(0)", "data-flag", "bd", 1, "dropdown-item"], ["src", "assets/cliqpack/index_files/bd.png", "alt", "Bangla", "height", "11", 1, "mr-1", "lazyload"], ["href", "javascript:void(0)", "data-flag", "sa", 1, "dropdown-item"], ["src", "assets/cliqpack/index_files/sa.png", "alt", "Arabic", "height", "11", 1, "mr-1", "lazyload"], ["id", "", 1, "list-inline-item", "mr-3"], ["href", "javascript:void(0)", "data-toggle", "dropdown", "data-display", "static", 1, "py-2"], ["src", "assets/cliqpack/index_files/gift-card.png", "alt", ""], ["href", "#", "data-toggle", "dropdown", "data-display", "static", 1, "py-2"], ["src", "assets/cliqpack/index_files/seller.png", "alt", ""], [1, "col-5", "col-lg-5", "col-md-5", "col-sm-12", "col-12", "text-right", "d-none", "d-lg-block"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "mr-3"], ["href", "#", 1, "py-2", "d-inline-block", "btn", "cupon-code"], ["href", "#", 1, "py-2", "d-inline-block"], [1, "list-inline-item", "mr-3", "ml-3"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], [1, "sticky-top", "z-1020", "shadow-sm"], [1, "position-relative", "logo-bar-area"], [1, "d-flex", "align-items-center"], [1, "col-auto", "col-xl-3", "pl-0", "pr-3", "d-flex", "align-items-center"], ["href", "#", 1, "d-block", "mr-3", "ml-0"], ["src", "assets/cliqpack/index_files/header-logo.png", "alt", "", "height", "40", 1, "mw-100", "h-30px", "h-md-40px"], [1, "d-lg-none", "ml-auto", "mr-0"], ["href", "javascript:void(0);", "data-toggle", "class-toggle", "data-target", ".front-header-search", 1, "p-2", "d-block", "text-reset"], [1, "las", "la-search", "la-flip-horizontal", "la-2x"], [1, "flex-grow-1", "front-header-search", "d-flex", "align-items-center", "search-top"], [1, "position-relative", "flex-grow-1"], ["action", "#", "method", "GET", 1, "stop-propagation"], [1, "d-flex", "position-relative", "align-items-center"], ["data-toggle", "class-toggle", "data-target", ".front-header-search", 1, "d-lg-none"], ["type", "button", 1, "btn", "px-2"], [1, "la", "la-2x", "la-long-arrow-left"], [1, "input-group"], ["type", "text", "id", "search", "name", "q", "placeholder", "What Are You Looking For.....", "autocomplete", "off", 1, "border-0", "border-lg", "form-control"], [1, "input-group-append", "d-none", "d-lg-block"], ["type", "submit", 1, "btn", "btn-search"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "typed-search-box", "stop-propagation", "document-click-d-none", "d-none", "bg-white", "rounded", "shadow-lg", "position-absolute", "left-0", "top-100", "w-100", 2, "min-height", "200px"], [1, "search-preloader", "absolute-top-center"], [1, "dot-loader"], [1, "search-nothing", "d-none", "p-3", "text-center", "fs-16"], ["id", "search-content", 1, "text-left"], [1, "d-none", "d-lg-none", "ml-3", "mr-0"], [1, "nav-search-box"], ["href", "#", 1, "nav-box-link"], [1, "la", "la-search", "la-flip-horizontal", "d-inline-block", "nav-box-icon"], [1, "d-none", "d-lg-block", "ml-3", "mr-0"], ["id", "wishlist", 1, ""], ["href", "#", 1, "d-flex", "align-items-center", "text-reset"], [1, "la", "la-heart-o", "la-2x", "opacity-80"], [1, "flex-grow-1", "ml-1"], [1, "badge", "badge-primary", "badge-inline", "badge-pill"], [1, "nav-box-text", "d-none", "d-xl-block", "opacity-70"], ["data-hover", "dropdown", 1, "d-none", "d-lg-block", "align-self-stretch", "ml-3", "mr-0"], ["id", "cart_items", 1, "nav-cart-box", "dropdown", "h-100"], ["href", "javascript:void(0)", "data-toggle", "dropdown", "data-display", "static", 1, "d-flex", "align-items-center", "h-100", "cart-sec"], [1, "la", "la-shopping-cart", "la-2x"], [1, "badge", "badge-primary", "badge-inline", "badge-pill", "cart-no"], [1, "nav-box-text", "d-none", "d-xl-block", "cart-text"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-lg", "p-0", "stop-propagation"], [1, "text-center", "p-3"], [1, "las", "la-frown", "la-3x", "opacity-60", "mb-3"], [1, "h6", "fw-700"], [1, "d-none", "d-lg-block", "ml-3", "mr-0", "user-login"], ["id", "user_login", 1, ""], [3, "routerLink", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "list-inline", "d-flex", "justify-content-end", "mb-0", "home-menu", "align-items-center"], ["id", "home", 1, "list-inline-item"], ["href", "#", 1, "py-3"], ["href", "javascript:void(0)", 1, "py-3"], ["href", "javascript:void(0)", "data-toggle", "dropdown", "data-display", "static", 1, "py-3"], ["type", "button", 1, "btn", "btn-one"], ["type", "button", 1, "btn", "btn-second"], ["src", "assets/cliqpack/index_files/bttn3.png"], [3, "routerLink"], [1, "la", "la-user", "la-2x"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Bangla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Arabic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "CliqPack Trusted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Gift Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Became a seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cupon Codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Delivery To:10007");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "header", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "form", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " \u00A0Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Your Cart is empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, HeaderComponent_a_117_Template, 3, 2, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, HeaderComponent_a_118_Template, 3, 0, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "ul", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Featured Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Todays Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Combo offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "All Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Offer Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "cMall Sellers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Trusted Sellers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.log_val);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.log_val);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/notification.service.ts":
/*!*****************************************!*\
  !*** ./src/app/notification.service.ts ***!
  \*****************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");



class NotificationService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(message, title) {
        this.toastr.success(message, title);
    }
    showError(message, title) {
        this.toastr.error(message, title);
    }
    showInfo(message, title) {
        this.toastr.info(message, title);
    }
    showWarning(message, title) {
        this.toastr.warning(message, title);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/customer-login/customer-login.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/customer-login/customer-login.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomerLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerLoginComponent", function() { return CustomerLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notification.service */ "./src/app/notification.service.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services.service */ "./src/app/services.service.ts");


// import { Router } from '@angular/router';







const _c0 = function () { return ["/register"]; };
class CustomerLoginComponent {
    constructor(route, notifyService, http, api) {
        this.route = route;
        this.notifyService = notifyService;
        this.http = http;
        this.api = api;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.loginuser = window.localStorage.getItem('isLoggedIn');
    }
    ngOnInit() {
        if (this.loginuser === null) {
            this.route.navigate(['/login']);
        }
        else {
            if (this.loginuser === 'true') {
                this.route.navigate(['/']);
            }
            else {
                this.route.navigate(['/login']);
            }
        }
    }
    onClick() {
        this.route.navigate(['/']);
    }
    onSubmit() {
        if (this.loginForm.value.email != '' && this.loginForm.value.password != '') {
            const api_url = this.api.api_url;
            // 
            const url = api_url + 'auth/web_login';
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers.set('content-type', 'application/json');
            headers.set('Access-Control-Allow-Origin', '*');
            let options = { headers: headers };
            // let data= {
            //   email:this.loginForm.value.email,
            //   password:this.loginForm.value.password
            //  };
            // console.log(data);
            // console.log(options);
            // +this.loginForm.value.email+'&password='+this.loginForm.value.password;
            const formData = new FormData();
            formData.append('email', this.loginForm.value.email);
            formData.append('password', this.loginForm.value.password);
            this.http.post(url, formData, options).subscribe((res) => {
                console.log(res.data);
                if (res.status == true) {
                    // window.sessionStorage.setItem('token','aaaa');
                    // window.localStorage.setItem('token','aaaa');
                    //  window.sessionStorage.getItem('token');
                    //  window.sessionStorage.clear();
                    this.notifyService.showSuccess(res.message, "");
                    window.localStorage.setItem('email', res.data.user.email);
                    window.localStorage.setItem('name', res.data.user.name);
                    // window.localStorage.setItem('user', res.data.user);
                    window.localStorage.setItem('role', res.data.user.user_type);
                    window.localStorage.setItem('authtoken', res.data.token);
                    window.localStorage.setItem('isLoggedIn', 'true');
                    if (res.data.user.user_type == 'customer') {
                        this.route.navigate(['/dashboard']);
                    }
                    else if (res.data.user.user_type == 'seller') {
                        this.route.navigate(['/seller/dashboard']);
                    }
                    else {
                        this.notifyService.showWarning('Not access this page', "");
                    }
                    // this.route.navigate(['/index']);
                }
                else {
                    this.notifyService.showWarning(res.message, "");
                }
            }, (err) => {
                // this.notifyService.showWarning("Somthing went wrong !!!!", "")
            });
        }
        else {
            this.notifyService.showWarning("Username Or Password Not Blank", "CliqPack");
        }
    }
}
CustomerLoginComponent.ɵfac = function CustomerLoginComponent_Factory(t) { return new (t || CustomerLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"])); };
CustomerLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerLoginComponent, selectors: [["app-customer-login"]], decls: 34, vars: 3, consts: [[1, "gry-bg", "py-5"], [1, "profile"], [1, "container"], ["cla", "", "ss", "row"], [1, "col-xxl-4", "col-xl-5", "col-lg-6", "col-md-8", "mx-auto"], [1, "card"], [1, "text-center", "pt-4"], [1, "h4", "fw-600"], [1, "px-4", "py-3", "py-lg-4"], [1, ""], [1, "form-default", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "value", "", "placeholder", "Email", "name", "email", "formControlName", "email", 1, "form-control"], ["type", "password", "placeholder", "password", "name", "password", "formControlName", "password", 1, "form-control"], [1, "row", "mb-2"], [1, "col-6"], [1, "aiz-checkbox"], ["type", "checkbox", "name", "remember"], [1, "opacity-60"], [1, "aiz-square-check"], [1, "col-6", "text-right"], ["href", "", 1, "text-reset", "opacity-60", "fs-14"], [1, "mb-5"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "fw-600"], [1, "text-center"], [1, "text-muted", "mb-0"], [3, "routerLink"]], template: function CustomerLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Login to your account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomerLoginComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Dont have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Register Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyLWxvZ2luL2N1c3RvbWVyLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-login',
                templateUrl: './customer-login.component.html',
                styleUrls: ['./customer-login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/customer-register/customer-register.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/customer-register/customer-register.component.ts ***!
  \************************************************************************/
/*! exports provided: CustomerRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRegisterComponent", function() { return CustomerRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notification.service */ "./src/app/notification.service.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services.service */ "./src/app/services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


// import { Router } from '@angular/router';








function CustomerRegisterComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.name.errors.required);
} }
function CustomerRegisterComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Phone is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.phone.errors.required);
} }
function CustomerRegisterComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Invalid email id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r2.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r2.email.errors.email);
} }
function CustomerRegisterComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r3.password.errors.required);
} }
function CustomerRegisterComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Confirmation Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r4.password_confirmation.errors.required);
} }
function CustomerRegisterComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Please check the terms and conditions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r5.checkbox_example_1.errors.required);
} }
const _c0 = function () { return ["/login"]; };
class CustomerRegisterComponent {
    constructor(route, notifyService, http, api, formBuilder) {
        this.route = route;
        this.notifyService = notifyService;
        this.http = http;
        this.api = api;
        this.formBuilder = formBuilder;
        // regForm = new FormGroup({
        //   name: new FormControl(''),
        //   dob: new FormControl(''),
        //   email: new FormControl(''),
        //   password: new FormControl(''),
        //   password_confirmation: new FormControl(''),
        // });
        // regForm:any;
        this.regForm = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"];
        this.regForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            checkbox_example_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    get name() {
        return this.regForm.get('name');
        return false;
    }
    get email() {
        return this.regForm.get('email');
    }
    get phone() {
        return this.regForm.get('phone');
    }
    get password() {
        return this.regForm.get('password');
    }
    get password_confirmation() {
        return this.regForm.get('password_confirmation');
    }
    get checkbox_example_1() {
        return this.regForm.get('checkbox_example_1');
    }
    onSubmit() {
        console.log(this.regForm.value);
        if (this.regForm.value.password == this.regForm.value.password_confirmation) {
            const api_url = this.api.api_url;
            // 
            const url = api_url + 'auth/web/signup';
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers.set('content-type', 'application/json');
            headers.set('Access-Control-Allow-Origin', '*');
            let options = { headers: headers };
            const formData = new FormData();
            formData.append('name', this.regForm.value.name);
            formData.append('password', this.regForm.value.password);
            formData.append('email', this.regForm.value.email);
            formData.append('phone', this.regForm.value.phone);
            formData.append('password_confirmation', this.regForm.value.password_confirmation);
            // email:rahul34564@gmail.com
            // password:123456789
            // password_confirmation:123456789
            // phone:9932899411
            this.http.post(url, formData, options).subscribe((res) => {
                console.log(res);
                if (res.status == true) {
                    this.notifyService.showSuccess(res.message, "");
                    location.reload();
                }
                else {
                    console.log(res.errors);
                    var results = res.errors;
                    for (var result in results) {
                        this.notifyService.showError(results[result], "");
                    }
                }
            }, (err) => {
                // this.notifyService.showWarning("Somthing went wrong !!!!", "")
            });
        }
        else {
            this.notifyService.showWarning("Password and confirm password not matched !!!!", "");
        }
    }
}
CustomerRegisterComponent.ɵfac = function CustomerRegisterComponent_Factory(t) { return new (t || CustomerRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CustomerRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerRegisterComponent, selectors: [["app-customer-register"]], decls: 42, vars: 10, consts: [[1, "gry-bg", "py-4"], [1, "profile"], [1, "container"], [1, "row"], [1, "col-xxl-4", "col-xl-5", "col-lg-6", "col-md-8", "mx-auto"], [1, "card"], [1, "text-center", "pt-4"], [1, "h4", "fw-600"], [1, "px-4", "py-3", "py-lg-4"], [1, ""], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "value", "", "placeholder", "Full Name", "formControlName", "name", 1, "form-control"], [4, "ngIf"], ["type", "number", "formControlName", "phone", "value", "", "placeholder", "Phone ", "name", "phone", "min", "11", 1, "form-control"], ["type", "email", "value", "", "placeholder", "Email", "formControlName", "email", 1, "form-control"], ["type", "password", "placeholder", "password", "formControlName", "password", 1, "form-control"], ["type", "password", "placeholder", "Confirm Password", "formControlName", "password_confirmation", 1, "form-control"], [1, "mb-3"], [1, "aiz-checkbox"], ["type", "checkbox", "name", "checkbox_example_1", "required", "", "formControlName", "checkbox_example_1"], [1, "opacity-60"], [1, "aiz-square-check"], [1, "mb-5"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "fw-600", 3, "disabled"], [1, "text-center"], [1, "text-muted", "mb-0"], [3, "routerLink"], [1, "form_validation_error", 3, "hidden"]], template: function CustomerRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Create an account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomerRegisterComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CustomerRegisterComponent_div_14_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CustomerRegisterComponent_div_17_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CustomerRegisterComponent_div_20_Template, 5, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CustomerRegisterComponent_div_23_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CustomerRegisterComponent_div_26_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "By signing up you agree to our terms and conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CustomerRegisterComponent_div_33_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Already have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.regForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.name.valid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.phone.valid && (ctx.phone.dirty || ctx.phone.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.email.valid && (ctx.email.dirty || ctx.email.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.password.valid && (ctx.password.dirty || ctx.password.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.password_confirmation.valid && (ctx.password_confirmation.dirty || ctx.password_confirmation.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.checkbox_example_1.valid && (ctx.checkbox_example_1.dirty || ctx.checkbox_example_1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.regForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".form_validation_error[_ngcontent-%COMP%]{\r\n    color:red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tZXItcmVnaXN0ZXIvY3VzdG9tZXItcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyLXJlZ2lzdGVyL2N1c3RvbWVyLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybV92YWxpZGF0aW9uX2Vycm9ye1xyXG4gICAgY29sb3I6cmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-register',
                templateUrl: './customer-register.component.html',
                styleUrls: ['./customer-register.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 303, vars: 0, consts: [[1, "py-5"], [1, "container"], [1, "d-flex", "align-items-start"], [1, "aiz-user-sidenav-wrap", "pt-4", "position-relative", "z-1", "shadow-sm"], [1, "absolute-top-right", "d-xl-none"], ["data-toggle", "class-toggle", "data-target", ".aiz-mobile-side-nav", "data-same", ".mobile-side-nav-thumb", 1, "btn", "btn-sm", "p-2"], [1, "las", "la-times", "la-2x"], [1, "absolute-top-left", "d-xl-none"], ["href", "#", 1, "btn", "btn-sm", "p-2"], [1, "las", "la-sign-out-alt", "la-2x"], [1, "aiz-user-sidenav", "rounded", "overflow-hidden", "c-scrollbar-light"], [1, "px-4", "text-center", "mb-4"], [1, "avatar", "avatar-md", "mb-3"], ["src", "https://dev1.ivantechnology.in/cliqpack/public/uploads/all/Lq41GU3h0PDAg8W2gYo81LhBS83ofja04tNq614K.jpg"], [1, "h5", "fw-600"], [1, "ml-2"], [1, "las", "la-check-circle", 2, "color", "green"], [1, "sidemnenu", "mb-3"], ["data-toggle", "aiz-side-menu", 1, "aiz-side-nav-list", "metismenu"], [1, "aiz-side-nav-item", "mm-active"], ["href", "#", "aria-expanded", "true", 1, "aiz-side-nav-link", "active"], [1, "las", "la-home", "aiz-side-nav-icon"], [1, "aiz-side-nav-text"], [1, "aiz-side-nav-item"], ["href", "#", 1, "aiz-side-nav-link"], [1, "las", "la-file-alt", "aiz-side-nav-icon"], [1, "la", "la-heart-o", "aiz-side-nav-icon"], [1, "las", "la-money-bill", "aiz-side-nav-icon"], [1, "badge", "badge-inline", "badge-success"], [1, "las", "la-star-of-david", "aiz-side-nav-icon"], [1, "las", "la-cog", "aiz-side-nav-icon"], [1, "las", "la-history", "aiz-side-nav-icon"], [1, "las", "la-money-bill-wave-alt", "aiz-side-nav-icon"], [1, "las", "la-atom", "aiz-side-nav-icon"], [1, "las", "la-user", "aiz-side-nav-icon"], [1, "h5", "fw-600", "text-center"], [1, "widget-balance", "pb-3", "pt-1"], [1, "text-center"], [1, "heading-4", "strong-700", "mb-4"], [1, "d-block", "fs-12", "mb-2"], [1, "btn", "btn-primary", "fw-600", "fs-18"], [1, "table", "table-borderless"], ["width", "60%", 1, "p-1"], ["width", "40%", 1, "p-1", "fw-600"], [1, "aiz-user-panel"], [1, "aiz-titlebar", "mt-2", "mb-4"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "h3"], ["action", "#", "method", "POST", "enctype", "multipart/form-data"], ["type", "hidden", "name", "_token", "value", "VSIghvqGcy9pMup1Tow9iif3pmvkvRSBSyusvJTQ"], [1, "card"], [1, "card-header"], [1, "mb-0", "h6"], [1, "card-body"], [1, "form-group", "row"], [1, "col-md-2", "col-form-label"], [1, "col-md-10"], ["type", "text", "placeholder", "Your name", "name", "name", "value", "Mr. Seller", 1, "form-control"], ["type", "text", "placeholder", "Your Phone", "name", "phone", "value", "01738457162", 1, "form-control"], ["data-toggle", "aizuploader", "data-type", "image", 1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text", "bg-soft-secondary", "font-weight-medium"], [1, "form-control", "file-amount"], ["type", "hidden", "name", "photo", "value", "173", 1, "selected-files"], [1, "file-preview", "box", "sm"], ["data-id", "173", "title", "420801-2553909.jpg", 1, "d-flex", "justify-content-between", "align-items-center", "mt-2", "file-preview-item"], [1, "align-items-center", "align-self-stretch", "d-flex", "justify-content-center", "thumb"], ["src", "https://dev1.ivantechnology.in/cliqpack/public/uploads/all/Lq41GU3h0PDAg8W2gYo81LhBS83ofja04tNq614K.jpg", 1, "img-fit"], [1, "col", "body"], [1, "d-flex"], [1, "text-truncate", "title"], [1, "ext"], [1, "remove"], ["type", "button", 1, "btn", "btn-sm", "btn-link", "remove-attachment"], [1, "la", "la-close"], ["type", "password", "placeholder", "New Password", "name", "new_password", 1, "form-control"], ["type", "password", "placeholder", "Confirm Password", "name", "confirm_password", 1, "form-control"], [1, "row", "gutters-10"], [1, "col-lg-6"], [1, "border", "p-3", "pr-5", "rounded", "mb-3", "position-relative"], [1, "w-50", "fw-600"], [1, "dropdown", "position-absolute", "right-0", "top-0"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "bg-gray", "px-2"], [1, "la", "la-ellipsis-v"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "https://dev1.ivantechnology.in/cliqpack/addresses/set_default/47", 1, "dropdown-item"], ["href", "https://dev1.ivantechnology.in/cliqpack/addresses/destroy/47", 1, "dropdown-item"], ["href", "https://dev1.ivantechnology.in/cliqpack/addresses/set_default/48", 1, "dropdown-item"], ["href", "https://dev1.ivantechnology.in/cliqpack/addresses/destroy/48", 1, "dropdown-item"], ["onclick", "add_new_address()", 1, "col-lg-6", "mx-auto"], [1, "border", "p-3", "rounded", "mb-3", "c-pointer", "text-center", "bg-light"], [1, "la", "la-plus", "la-2x"], [1, "alpha-7"], [1, "row"], [1, "col-md-3", "col-form-label"], [1, "col-md-9"], [1, "aiz-switch", "aiz-switch-success", "mb-3"], ["value", "1", "name", "cash_on_delivery_status", "type", "checkbox", "checked", ""], [1, "slider", "round"], ["value", "1", "name", "bank_payment_status", "type", "checkbox", "checked", ""], ["type", "text", "placeholder", "Bank Name", "value", "State bank of india", "name", "bank_name", 1, "form-control", "mb-3"], ["type", "text", "placeholder", "Bank Account Name", "value", "Anirban Paul", "name", "bank_acc_name", 1, "form-control", "mb-3"], ["type", "text", "placeholder", "Bank Account Number", "value", "123456789876543", "name", "bank_acc_no", 1, "form-control", "mb-3"], ["type", "number", "placeholder", "Bank Routing Number", "value", "2147483647", "name", "bank_routing_no", 1, "form-control", "mb-3"], [1, "form-group", "mb-0", "text-right"], ["type", "submit", 1, "btn", "btn-primary"], ["action", "#", "method", "POST"], [1, "col-md-2"], [1, "input-group", "mb-3"], ["type", "email", "placeholder", "Your Email", "name", "email", "value", "seller@example.com", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "new-email-verification"], [1, "d-none", "loading"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "default"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mr. Seller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Purchase History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "47");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Product Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Shop Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Payment History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Money Withdraw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Support Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Manage Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sold Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "small", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Your sold amount (current month)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u09F33,960.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Total Sold: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " \u09F33,960.000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Last Month Sold: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \u09F30.000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Manage Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "form", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h5", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Basic Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Your Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Browse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "1 File selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h6", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "420801-2553909");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, ".jpg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "35 KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h5", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "kolkata new garia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Postal Code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "700084");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "City:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Garia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Country:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "900328957");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Make This Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "sdsd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Postal Code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "700028");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "City:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "dum dum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Country:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "9932899411");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Make This Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Add New Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h5", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Payment Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Cash Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "label", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Bank Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "label", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "input", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Bank Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Bank Account Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Bank Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "input", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Bank Routing Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "input", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Update Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "form", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "h5", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Change your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Your Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "input", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Sending Email... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Update Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../notification.service */ "./src/app/notification.service.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services.service */ "./src/app/services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = function (a1) { return ["/products/category", a1]; };
function HomeComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", cat_item_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, cat_item_r2.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_item_r2.name);
} }
const _c1 = function (a1) { return ["/product", a1]; };
function HomeComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "del", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("slick-index", item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, item_r3.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, item_r3.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u09F3", item_r3.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u09F3", item_r3.home_discount_price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", item_r3.availableqty, ")");
} }
class HomeComponent {
    constructor(route, notifyService, http, api) {
        this.route = route;
        this.notifyService = notifyService;
        this.http = http;
        this.api = api;
    }
    ngOnInit() {
        const api_url = this.api.api_url;
        const home_category = api_url + 'home-categoris';
        const daily_product = api_url + 'products/todays-deal';
        const page_no = 1;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.set('content-type', 'application/json');
        headers.set('Access-Control-Allow-Origin', '*');
        let options = { headers: headers };
        this.http.get(home_category).subscribe((res) => {
            // console.log(res);
            if (res.status == 200) {
                this.product_category = res.data;
            }
            else {
                this.notifyService.showWarning("Somthing went wrong !!!!", "");
            }
        }, (error) => {
            // this.notifyService.showWarning("Somthing went wrong !!!!", "")
        });
        const formData = new FormData();
        formData.append('page_no', page_no);
        this.http.post(daily_product, formData, options).subscribe((res) => {
            // console.log(res.data.products);
            if (res.status == true) {
                this.product_daily = res.data.products;
            }
            else {
                this.notifyService.showWarning("Somthing went wrong !!!!", "");
            }
        }, (error) => {
            // this.notifyService.showWarning("Somthing went wrong !!!!", "")
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1458, vars: 2, consts: [[1, "home-banner-area", "mb-4", "pt-5"], [1, "container"], [1, "row", "position-relative"], [1, "col-lg-3", "position-static", "d-none", "d-lg-block"], [1, "aiz-category-menu", "bg-white", "rounded", "cat-menu", "h-100", "shadow-sm"], ["class", "list-unstyled categories no-scrollbar mb-0 text-left", 4, "ngFor", "ngForOf"], [1, "col-lg-7"], [1, "home-slider"], [1, "owl-carousel", "owl-theme", "owl-loaded"], [1, "owl-stage-outer"], [1, "owl-stage", 2, "transform", "translate3d(-1573px, 0px, 0px)", "transition", "all 0s ease 0s", "width", "5507px"], [1, "owl-item", "cloned", 2, "width", "786.656px"], [1, "item"], ["alt", "1000+ Great Banner Background Photos \u00B7 Pexels \u00B7 Free Stock Photos", "src", "assets/cliqpack/index_files/t6sJqxHLCH2skWWJ7W0rHLmd0dKRkMSaWSn2EWDI.jpg", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], ["alt", "1000+ Great Banner Background Photos \u00B7 Pexels \u00B7 Free Stock Photos", "src", "assets/cliqpack/index_files/1xK7q7i77WU7UQPr3Y4BrbsL4Syv5PIVYXKbrMQm.jpg", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], [1, "owl-item", "active", 2, "width", "786.656px"], ["alt", "1000+ Great Banner Background Photos \u00B7 Pexels \u00B7 Free Stock Photos", "src", "assets/cliqpack/index_files/p8Om2UZU8cOer3Xn6TSBcTc7JtoaNFt1T3rmR9Ng.jpg", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], [1, "owl-item", 2, "width", "786.656px"], [1, "owl-nav"], [1, "owl-prev"], [1, "fa", "fa-angle-left"], [1, "owl-next"], [1, "fa", "fa-angle-right"], [1, "owl-dots"], ["role", "button", 1, "owl-dot", "active"], ["role", "button", 1, "owl-dot"], [1, "col-md-2", "col-lg-2", "col-sm-12", "col-12"], [1, "bg-white", "shadow-lg", "mb-3", "rounded", "p-2", "slide-left-sec"], ["alt", "Is Los Angeles a Horizontal City? | KCET", "src", "assets/cliqpack/index_files/DGQ6ZMJs4ljC2iAFOA3m3bHytMu8wzeVhfhSFD5r.png", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb", "w-100"], ["alt", "Is Los Angeles a Horizontal City? | KCET", "src", "assets/cliqpack/index_files/TkDys21EqRHNmgI6TAVDd5S6uM6In0qfAb9jxjKx.png", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb", "w-100"], [1, "cart-img", "mt-4"], [1, "row"], [1, "col-md-3"], ["src", "assets/cliqpack/index_files/DGQ6ZMJs4ljC2iAFOA3m3bHytMu8wzeVhfhSFD5r.png", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], ["src", "assets/cliqpack/index_files/wx4BZ1EqpYokp57LlIrPqlyJBqfZpdmrHUN0f1VU.png", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], ["src", "assets/cliqpack/index_files/V5iVG5iV6Q02UDj8pPfowjzUaPiIu0twBkqggHpJ.jpg", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], ["src", "assets/cliqpack/index_files/M04KXyAHj2Q9oK2JBeUMH46ElW6ICg0DPHKn7AU0.jpg", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], [1, "mb-4"], [1, "row", "gutters-10"], ["id", "todays_deal"], [1, "col-md-12", "col-lg-12"], [1, "bg-white", "shadow-sm", "rounded"], [1, "d-flex", "mb-1", "align-items-baseline", "border-bottom", "px-4", "py-3", "px-md-4", "py-md-3"], [1, "h5", "fw-700", "mb-0"], [1, "d-inline-block", "home-heading"], ["data-items", "6", "data-xl-items", "6", "data-lg-items", "6", "data-md-items", "3", "data-sm-items", "2", "data-xs-items", "2", "data-arrows", "true", "data-infinite", "true", 1, "aiz-carousel", "px-3", "half-outside-arrow", "slick-initialized", "slick-slider"], ["type", "button", "aria-disabled", "true", 1, "slick-prev", "slick-arrow", "slick-disabled", 2, "display", "inline-block"], [1, "las", "la-angle-left"], [1, "slick-list", "draggable"], [1, "slick-track", 2, "opacity", "1", "width", "1526px", "transform", "translate3d(0px, 0px, 0px)"], [4, "ngFor", "ngForOf"], ["type", "button", "aria-disabled", "false", 1, "slick-next", "slick-arrow"], [1, "las", "la-angle-right"], ["id", "latest_featured_products"], [1, "slick-track", 2, "opacity", "1", "width", "872px", "transform", "translate3d(0px, 0px, 0px)"], ["data-slick-index", "0", "aria-hidden", "false", 1, "slick-slide", "slick-current", "slick-active", 2, "width", "210px"], [1, "carousel-box", 2, "width", "100%", "display", "inline-block"], [1, "aiz-card-box", "border", "border-light", "rounded", "hov-shadow-md", "my-2", "has-transition"], [1, "position-relative"], ["href", "#", "tabindex", "0", 1, "d-block"], ["src", "assets/cliqpack/index_files/oAZDXK6R84sK2qNJtV87aK4uwEX8tFo4ln6z3rRn.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], [1, "absolute-top-right", "aiz-p-hov-icon"], [1, "p-2", "text-left", "cart-sec-box"], [1, "fs-15"], ["href", "#", "tabindex", "0", 1, "d-block", "text-reset"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "price-amount"], [1, "d-price"], [1, "rating-box"], [1, "rating", "rating-sm", "mt-1"], [1, "la", "la-star"], [1, "d-flex", "align-items-center", "justify-content-between", "view-box"], ["href", "javascript:void(0)", "onclick", "getproduct_details(48)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], [1, "las", "la-eye"], ["href", "javascript:void(0)", "onclick", "addToWishList(48)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], [1, "la", "la-heart-o"], [1, "text-center", "w-100"], ["type", "button", "onclick", "showAddToCartModal(48)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "1", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "210px"], ["src", "assets/cliqpack/index_files/Xdxvmqh6DCiZIJu58JKYyxYy152W5cxfsQMDO1Dw.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "getproduct_details(51)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["href", "javascript:void(0)", "onclick", "addToWishList(51)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(51)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "2", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "210px"], ["src", "assets/cliqpack/index_files/aOittfhwNXiy05dxcgxA5lkkd1uUn0Uy1twICHNM.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "getproduct_details(50)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["href", "javascript:void(0)", "onclick", "addToWishList(50)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(50)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "3", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "210px"], ["src", "assets/cliqpack/index_files/u9xHYLvp7Jc8jUuS1rFrEPsDZ0i1okHenjoBl2Bp.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "getproduct_details(49)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["href", "javascript:void(0)", "onclick", "addToWishList(49)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(49)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], [1, "big-image"], [1, "col-md-6"], [1, "bg-white", "shadow-sm", "rounded", "p-2"], ["alt", "31 Must-Read Books for Aspiring CEOs and Entrepreneurs", "src", "assets/cliqpack/index_files/lQFNEBiY8JKPR5o7arZilYA5WIbMcQlQC4cbQrwR.png", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb", "w-100"], ["alt", "31 Must-Read Books for Aspiring CEOs and Entrepreneurs", "src", "assets/cliqpack/index_files/E6B1P9PTvTzvWjXzat5GnE4qONJbFgIHUX0UILRd.jpg", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb", "w-100"], ["id", "section_home_categories"], ["id", "section_best_sellers"], [1, "home-banner-area", "mb-4", "pt-3"], [1, "row", "gutters-10", "position-relative"], ["data-arrows", "true", "data-dots", "true", "data-autoplay", "true", "data-infinite", "true", 1, "aiz-carousel", "dots-inside-bottom", "mobile-img-auto-height", "slick-initialized", "slick-slider"], [1, "slick-track", 2, "opacity", "1", "width", "0px", "transform", "translate3d(0px, 0px, 0px)"], ["id", "category"], [1, "shadow-sm", "rounded"], [1, "d-flex", "mb-1", "align-items-baseline", "py-3"], [1, "d-inline-block", "cat-heading"], [1, "tab-part"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["data-toggle", "tab", "href", "#nav-home-4", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom", "active"], ["data-toggle", "tab", "href", "#nav-home-5", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom"], ["data-toggle", "tab", "href", "#nav-home-24", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom"], ["id", "nav-tabContent", 1, "tab-content", "bg-white"], ["id", "nav-home-4", "role", "tabpanel", "aria-labelledby", "nav-home-tab-0", 1, "tab-pane", "fade", "show", "active"], ["data-items", "6", "data-xl-items", "6", "data-lg-items", "6", "data-md-items", "3", "data-sm-items", "2", "data-xs-items", "2", "data-arrows", "true", "data-infinite", "true", 1, "aiz-carousel", "px-3", "py-3", "half-outside-arrow", "slick-initialized", "slick-slider"], [1, "carousel-box", "your-class", 2, "width", "100%", "display", "inline-block"], ["src", "assets/cliqpack/index_files/anArIQq4zLBufHlUnZoBWb9rtWjzBz2IWmPVQPOC.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(60)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(60)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(60)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["src", "assets/cliqpack/index_files/FTSHkP3ycTZZSuvjHn5hpetUelqh9oxN9NoU9Vyq.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(59)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(59)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(59)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["src", "assets/cliqpack/index_files/JywQiNGyrTUPZMbfF1JYin0DLsbha76d4Htz9nXZ.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(58)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(58)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(58)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["href", "#", "onclick", "getproduct_details(48)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["id", "nav-home-5", "role", "tabpanel", "aria-labelledby", "nav-home-tab-1", 1, "tab-pane", "fade"], ["data-slick-index", "0", "aria-hidden", "false", 1, "slick-slide", "slick-current", "slick-active", 2, "width", "0px"], ["src", "assets/cliqpack/index_files/placeholder.jpg", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "javascript:void(0)", "onclick", "addToWishList(63)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(63)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(63)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "1", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "0px"], ["href", "javascript:void(0)", "onclick", "addToWishList(62)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(62)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(62)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "2", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "0px"], ["href", "javascript:void(0)", "onclick", "addToWishList(61)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(61)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(61)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["id", "nav-home-24", "role", "tabpanel", "aria-labelledby", "nav-home-tab-2", 1, "tab-pane", "fade"], ["src", "assets/cliqpack/index_files/placeholder.jpg", "data-src", " public/uploads/all/O0jtGkjg4Z15ZUQIZFGulKBkEHj7BUHV66tcFgb6.jpg", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "javascript:void(0)", "onclick", "addToWishList(67)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(67)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(67)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["src", "assets/cliqpack/index_files/placeholder.jpg", "data-src", " public/uploads/all/GdFG0Q6X2PAP5o0emikgBTTDi7d74nbrP4ta8JnB.jpg", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "javascript:void(0)", "onclick", "addToWishList(66)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(66)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(66)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["src", "assets/cliqpack/index_files/placeholder.jpg", "data-src", " public/uploads/all/jYplK998LCxXwI3FLX3eV93Q7mm3f4jTU2QmEX7M.jpg", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "javascript:void(0)", "onclick", "addToWishList(65)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(65)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(65)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "3", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "0px"], ["src", "assets/cliqpack/index_files/placeholder.jpg", "data-src", " public/uploads/all/SBjh3Ben4FDeayUgImIY9QG4T9JSSguNrS3iRh0k.jpg", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "javascript:void(0)", "onclick", "addToWishList(64)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(64)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(64)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-toggle", "tab", "href", "#nav-home-13", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom", "active"], ["data-toggle", "tab", "href", "#nav-home-14", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom"], ["id", "nav-home-13", "role", "tabpanel", "aria-labelledby", "nav-home-tab-0", 1, "tab-pane", "fade", "show", "active"], [1, "slick-track", 2, "opacity", "1", "width", "218px", "transform", "translate3d(0px, 0px, 0px)"], ["src", "assets/cliqpack/index_files/nAffBKQmipuWsKXB3IzOqgqoVBJrYIc2iTh0vmIS.png", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(68)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(68)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(68)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["id", "nav-home-14", "role", "tabpanel", "aria-labelledby", "nav-home-tab-1", 1, "tab-pane", "fade"], ["href", "javascript:void(0)", "onclick", "addToWishList(70)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(70)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(70)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-toggle", "tab", "href", "#nav-home-6", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom", "active"], ["data-toggle", "tab", "href", "#nav-home-15", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom"], ["id", "nav-home-6", "role", "tabpanel", "aria-labelledby", "nav-home-tab-0", 1, "tab-pane", "fade", "show", "active"], [1, "slick-track", 2, "opacity", "1", "width", "436px", "transform", "translate3d(0px, 0px, 0px)"], ["src", "assets/cliqpack/index_files/jlDA4xpL7VHXXm1C9gtW0Uj446HEIpaCIzyZy1K9.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(57)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(57)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(57)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["src", "assets/cliqpack/index_files/zWf5j0LtUF1sYmcxl2TXbjdrs20cKhhgkutKz1D8.bin", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(56)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(56)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(56)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["id", "nav-home-15", "role", "tabpanel", "aria-labelledby", "nav-home-tab-1", 1, "tab-pane", "fade"], ["href", "javascript:void(0)", "onclick", "addToWishList(55)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(55)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(55)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["id", "mens"], ["id", "womens"], ["id", "beauty"], ["id", "highestsellings"], ["href", "#", "onclick", "getproduct_details(51)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(50)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(49)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["id", "recentview"], ["id", "latest"], ["id", "mostrecent"], ["id", "letest_products"], [1, "slick-track", 2, "opacity", "1", "width", "2676px", "transform", "translate3d(0px, 0px, 0px)"], ["data-slick-index", "0", "aria-hidden", "false", 1, "slick-slide", "slick-current", "slick-active", 2, "width", "215px"], [1, "las", "la-star"], ["data-slick-index", "1", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "215px"], ["src", "assets/cliqpack/index_files/iza9UxfLdu8bADdzmYKcS2fdG15QNgoO3Qj44ZYt.bin", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(41)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(41)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(41)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "2", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "215px"], ["href", "", "tabindex", "0", 1, "d-block"], ["src", "assets/cliqpack/index_files/G7RKPJ8LIV5flpwcQLEdITb4evnecxf0qb6Acq0q.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(52)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(52)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(52)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "3", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "215px"], ["src", "assets/cliqpack/index_files/uhruKNA0DEMTPgq0JgNXrRXrW4ZNP2YUJERwKmYY.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(53)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(53)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(53)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "4", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "215px"], ["data-slick-index", "5", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "215px"], ["data-slick-index", "6", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "215px"], ["href", " product/my-mobile-2-6X1RD", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/va3HyDs8doYawj2fTOJvST9GNaIZYKfKDUqpJtfR.jpg", "data-src", " public/uploads/all/va3HyDs8doYawj2fTOJvST9GNaIZYKfKDUqpJtfR.jpg", "alt", "my mobile 2", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", " product/my-mobile-2-6X1RD", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(69)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", " #", "onclick", "getproduct_details(69)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(69)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "7", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "215px"], ["href", " product/my-mobile-DCrXx", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/nAffBKQmipuWsKXB3IzOqgqoVBJrYIc2iTh0vmIS.png", "data-src", " public/uploads/all/nAffBKQmipuWsKXB3IzOqgqoVBJrYIc2iTh0vmIS.png", "alt", "my mobile", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", " product/my-mobile-DCrXx", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(68)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", " #", "onclick", "getproduct_details(68)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(68)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "8", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "215px"], ["href", " product/my-casual-3-jfpCA", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/O0jtGkjg4Z15ZUQIZFGulKBkEHj7BUHV66tcFgb6.jpg", "data-src", " public/uploads/all/O0jtGkjg4Z15ZUQIZFGulKBkEHj7BUHV66tcFgb6.jpg", "alt", "my casual 3", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["href", " product/my-casual-3-jfpCA", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(67)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", " #", "onclick", "getproduct_details(67)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(67)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "9", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "215px"], ["href", " product/my-casual-3-Mxv6G", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/GdFG0Q6X2PAP5o0emikgBTTDi7d74nbrP4ta8JnB.jpg", "data-src", " public/uploads/all/GdFG0Q6X2PAP5o0emikgBTTDi7d74nbrP4ta8JnB.jpg", "alt", "my casual 3", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", " product/my-casual-3-Mxv6G", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(66)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", " #", "onclick", "getproduct_details(66)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(66)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "10", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "215px"], ["href", " product/my-casual-shurt-2-1nk4m", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/placeholder.jpg", "data-src", " public/uploads/all/jYplK998LCxXwI3FLX3eV93Q7mm3f4jTU2QmEX7M.jpg", "alt", "my casual shurt 2", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", " product/my-casual-shurt-2-1nk4m", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(65)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", " #", "onclick", "getproduct_details(65)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(65)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "11", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "215px"], ["href", " product/my-casual-shurt-LvMAz", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/placeholder.jpg", "data-src", " public/uploads/all/SBjh3Ben4FDeayUgImIY9QG4T9JSSguNrS3iRh0k.jpg", "alt", "my casual shurt", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", " product/my-casual-shurt-LvMAz", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(64)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", " #", "onclick", "getproduct_details(64)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(64)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["id", "our_brands"], [1, "rounded"], [1, "d-flex", "mb-1", "align-items-baseline", "py-3", "text-center", "justify-content-center"], ["data-items", "10", "data-xl-items", "10", "data-lg-items", "10", "data-md-items", "3", "data-sm-items", "2", "data-xs-items", "2", "data-arrows", "true", "data-infinite", "true", 1, "aiz-carousel", "half-outside-arrow", "brands-a", "slick-initialized", "slick-slider"], [1, "slick-track", 2, "opacity", "1", "width", "1370px", "transform", "translate3d(0px, 0px, 0px)"], ["data-slick-index", "0", "aria-hidden", "false", 1, "slick-slide", "slick-current", "slick-active", 2, "width", "129px"], ["href", " #", "tabindex", "0", 1, "d-block"], ["src", "assets/cliqpack/index_files/oDxkMwGJMjTfGEsEf0cmoFPsAgPuydOKvVskdf5k.png", "data-src", " public/uploads/all/oDxkMwGJMjTfGEsEf0cmoFPsAgPuydOKvVskdf5k.png", "alt", "Levis", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "1", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/LcIPZIMkyLMUtR2NnUauUWxF7ac0wq8pw7CisymQ.jpg", "data-src", " public/uploads/all/LcIPZIMkyLMUtR2NnUauUWxF7ac0wq8pw7CisymQ.jpg", "alt", "MI", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "2", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/ccKxeE9gbDkLjZhYWwaMmLnCfyIWLwEUV0vvOVbF.png", "data-src", " public/uploads/all/ccKxeE9gbDkLjZhYWwaMmLnCfyIWLwEUV0vvOVbF.png", "alt", "Raymond", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "3", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/dimETt52OdtTGlQJLsKgJfiFbZBLsNHiybAxm1vw.png", "data-src", " public/uploads/all/dimETt52OdtTGlQJLsKgJfiFbZBLsNHiybAxm1vw.png", "alt", "Readme", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "4", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/5whFOipVHkXle4BfUIGk2SjQL6bdDbjZGt2qa2g7.jpg", "data-src", " public/uploads/all/5whFOipVHkXle4BfUIGk2SjQL6bdDbjZGt2qa2g7.jpg", "alt", "Samsung", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "5", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/yoOuSfIRZ3Li4pOTXGTJzKybpr8z4mzCW70wNb45.png", "data-src", " public/uploads/all/yoOuSfIRZ3Li4pOTXGTJzKybpr8z4mzCW70wNb45.png", "alt", "Bharatsthali", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "6", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/ReP2MlegtJ2lMj1bLb6RABHnb3fY1r5srH8o2cfp.jpg", "data-src", " public/uploads/all/ReP2MlegtJ2lMj1bLb6RABHnb3fY1r5srH8o2cfp.jpg", "alt", "Saree creations", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "7", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/CY1fWPpNznUOhcrJtR7tNZxn7ae5kbVBvWSE924m.gif", "data-src", " public/uploads/all/CY1fWPpNznUOhcrJtR7tNZxn7ae5kbVBvWSE924m.gif", "alt", "Calvin Klein", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "8", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/QUliT6otu4GwP0ViIDX12nstHORWi8vjQaPpbpAr.png", "data-src", " public/uploads/all/QUliT6otu4GwP0ViIDX12nstHORWi8vjQaPpbpAr.png", "alt", "Brindal", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "9", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/L1nJk3H6BCss6bte5UM0yOj07ZFd2OHaNE9ep8YL.png", "data-src", " public/uploads/all/L1nJk3H6BCss6bte5UM0yOj07ZFd2OHaNE9ep8YL.png", "alt", "Rupkatha", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], [1, "list-unstyled", "categories", "no-scrollbar", "mb-0", "text-left"], [1, "category-nav-element", 3, "id"], [1, "text-truncate", "d-block", 3, "routerLink"], [1, "cat-name"], ["aria-hidden", "false", 1, "slick-slide", "slick-current", "slick-active", 2, "width", "210px", 3, "slick-index"], ["tabindex", "0", 1, "d-block", 3, "routerLink"], [1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded", 3, "src"], ["tabindex", "0", 1, "d-block", "text-reset", 3, "routerLink"], ["href", "javascript:void(0)", "onclick", "getproduct_details(53)", "data-toggle", "modal", "data-title", "View", "data-placement", "left", "tabindex", "0"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_ul_5_Template, 5, 5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Todays Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, HomeComponent_div_78_Template, 34, 13, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Latest Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "My T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u09F3111.100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u09F3109.989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " 3.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "(1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "my tshurt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u09F32,502.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u09F32,497.495");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "my Galexy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\u09F315,015.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\u09F315,014.800");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "My Samsung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "\u09F35,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "nav", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Formal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Winder cloths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "my formal 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "\u09F3601.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "\u09F3600.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "my formal 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "\u09F3909.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "\u09F3899.910");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "button", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "my formal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "\u09F3404.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "\u09F3399.960");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "a", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "button", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "My T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "\u09F3111.100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "\u09F3109.989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, " 3.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "(1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "a", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "sweeter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "\u09F33,001.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "\u09F33,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "a", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](429, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](431, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "button", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "my jacket 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "\u09F34,040.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "\u09F33,999.600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](458, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](462, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "a", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](464, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "button", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](474, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "my jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "\u09F3457.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "\u09F3456.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "a", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "a", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "button", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](511, "img", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](512, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, "my casual 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "\u09F32,323.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "\u09F32,299.770");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](528, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "a", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](532, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](534, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "button", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](544, "img", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](545, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "my casual 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "\u09F3303.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "\u09F3299.970");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](558, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](561, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "a", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](565, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "a", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](567, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "button", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](577, "img", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](578, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "my casual shurt 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "\u09F3303.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "\u09F3299.970");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](591, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](594, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "a", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](598, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "a", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](600, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](610, "img", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](611, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "my casual shurt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, "\u09F3312.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, "\u09F3311.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](624, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](627, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "a", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](631, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "a", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](633, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "button", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "span", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "nav", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "a", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, "MI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "a", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, "Gionee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "div", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "div", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](661, "img", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](662, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](666, "my mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, "\u09F32,501.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](671, "\u09F32,500.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](674, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](675, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](678, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "a", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](682, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "a", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](684, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "button", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "div", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](698, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](699, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, "my mobile 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, "\u09F312,120.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "\u09F311,877.600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](712, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](714, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](715, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "a", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](719, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "a", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](721, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "button", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "span", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "nav", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "a", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "Kurti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "a", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](737, "Saree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "div", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](749, "img", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](750, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "my kurti 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, "\u09F3260.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, "\u09F3250.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](763, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](766, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "a", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](770, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "a", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](772, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "button", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](782, "img", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](783, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, "my kurti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, "\u09F3280.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, "\u09F3246.400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](796, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](799, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "a", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](803, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "a", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](805, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "button", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "div", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](819, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](820, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, "my Saree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](827, "\u09F3505.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "\u09F3479.750");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](832, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](833, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](836, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "a", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](840, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "a", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](842, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "button", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](845, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](846, "div", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](847, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](848, "div", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "div", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, "Highest Selling Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](868, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](869, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](873, "my tshurt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](876, "\u09F32,502.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](878, "\u09F32,497.495");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](882, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](884, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](885, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](889, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](891, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](894, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](901, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](902, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](904, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](906, "my Galexy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](908, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](909, "\u09F315,015.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](911, "\u09F315,014.800");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](914, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](915, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](917, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](918, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](920, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](922, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "a", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](924, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](925, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](927, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](928, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](931, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](933, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](934, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](935, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](936, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](937, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](939, "My Samsung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](941, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](942, "\u09F35,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](945, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](946, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](948, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](949, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](952, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](953, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](954, "a", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](955, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](956, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](957, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](958, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](959, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](960, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](962, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](964, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](965, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](966, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](968, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](970, "My T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](972, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](973, "\u09F3111.100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](974, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](975, "\u09F3109.989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](976, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](978, " 3.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](979, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](980, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](981, "(1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](982, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](983, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](985, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](986, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](987, "a", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](988, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](989, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](992, "div", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](994, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](995, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](996, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](997, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](998, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](999, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1000, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1001, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1003, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1004, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1005, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1006, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1008, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1009, "div", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1010, "div", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1011, "div", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1012, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1013, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1014, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1015, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1016, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1017, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1018, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1019, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1020, "Latest Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1021, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1022, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1023, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1025, "div", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1026, "div", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1028, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1029, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1030, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1032, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1033, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1034, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1036, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1037, "My T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1038, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1039, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1040, "\u09F3111.100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1041, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1042, "\u09F3109.989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1043, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1044, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1045, " 3.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1046, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1047, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1048, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1049, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1050, "a", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1051, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1052, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1053, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1054, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1055, "div", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1056, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1057, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1058, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1059, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1060, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1061, "img", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1062, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1063, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1064, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1065, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1066, "Samsung M30 galaxy 6gb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1068, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1069, "\u09F310,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1071, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1072, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1073, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1074, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1075, "a", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1076, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1077, "a", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1078, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1079, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1080, "button", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1081, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1082, "div", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1083, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1084, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1085, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1086, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1087, "a", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1088, "img", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1089, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1090, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1091, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1092, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1093, "my Shervani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1094, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1095, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1096, "\u09F35,500.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1097, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1098, "\u09F34,950.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1099, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1100, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1101, " 4.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1102, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1103, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1104, "a", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1105, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1106, "a", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1107, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1108, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1109, "button", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1110, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1111, "div", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1114, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1116, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1117, "img", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1118, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1120, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1121, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1122, "my Towel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1123, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1124, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1125, "\u09F3250.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1126, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1127, "\u09F3249.999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1128, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1129, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1130, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1131, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1132, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1133, "a", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1134, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1135, "a", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1136, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1137, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1138, "button", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1139, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1140, "div", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1141, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1142, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1143, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1144, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1145, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1146, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1147, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1148, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1149, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1150, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1151, "my tshurt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1152, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1153, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1154, "\u09F32,502.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1155, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1156, "\u09F32,497.495");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1158, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1159, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1160, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1161, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1162, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1163, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1164, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1165, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1167, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1168, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1169, "div", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1170, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1171, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1172, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1173, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1174, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1175, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1176, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1177, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1178, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1179, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1180, "my mobile 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1181, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1182, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1183, "\u09F312,120.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1184, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1185, "\u09F311,877.600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1186, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1188, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1189, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1190, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1191, "a", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1192, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1193, "a", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1194, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1195, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1196, "button", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1197, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1198, "div", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1199, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1200, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1201, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1202, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1203, "a", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1204, "img", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1205, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1207, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1208, "a", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1209, "my mobile 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1210, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1211, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1212, "\u09F312,001.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1213, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1214, "\u09F312,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1215, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1216, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1217, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1218, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1219, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1220, "a", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1221, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1222, "a", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1223, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1224, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1225, "button", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1226, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1227, "div", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1228, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1229, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1230, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1231, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1232, "a", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1233, "img", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1234, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1235, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1236, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1237, "a", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1238, "my mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1240, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1241, "\u09F32,501.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1242, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1243, "\u09F32,500.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1244, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1245, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1246, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1247, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1248, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1249, "a", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1250, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1251, "a", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1252, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1253, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1254, "button", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1255, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1256, "div", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1257, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1258, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1259, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1260, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1261, "a", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1262, "img", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1263, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1264, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1265, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1266, "a", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1267, "my casual 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1268, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1269, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1270, "\u09F32,323.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1271, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1272, "\u09F32,299.770");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1273, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1274, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1275, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1276, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1277, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1278, "a", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1279, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1280, "a", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1281, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1282, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1283, "button", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1284, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1285, "div", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1286, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1287, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1288, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1289, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1290, "a", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1291, "img", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1292, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1293, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1294, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1295, "a", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1296, "my casual 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1297, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1298, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1299, "\u09F3303.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1300, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1301, "\u09F3299.970");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1302, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1303, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1304, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1305, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1306, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1307, "a", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1308, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1309, "a", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1310, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1311, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1312, "button", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1313, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1314, "div", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1315, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1316, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1317, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1318, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1319, "a", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1320, "img", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1321, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1322, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1323, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1324, "a", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1325, "my casual shurt 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1326, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1327, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1328, "\u09F3303.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1329, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1330, "\u09F3299.970");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1331, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1332, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1333, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1334, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1335, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1336, "a", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1337, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1338, "a", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1339, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1340, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1341, "button", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1342, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1343, "div", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1344, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1345, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1347, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1348, "a", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1349, "img", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1350, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1351, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1352, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1353, "a", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1354, "my casual shurt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1355, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1356, "del", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1357, "\u09F3312.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1358, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1359, "\u09F3311.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1360, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1361, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1362, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1363, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1364, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1365, "a", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1366, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1367, "a", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1368, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1369, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1370, "button", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1371, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1372, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1373, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1374, "div", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1375, "div", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1376, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1377, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1378, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1379, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1380, "div", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1381, "div", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1382, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1383, "span", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1384, "Our Available Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1385, "div", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1386, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1387, "div", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1388, "div", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1389, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1390, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1391, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1392, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1393, "a", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1394, "img", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1395, "div", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1396, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1397, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1398, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1399, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1400, "a", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1401, "img", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1402, "div", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1403, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1404, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1405, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1406, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1407, "a", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1408, "img", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1409, "div", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1410, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1411, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1412, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1413, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1414, "a", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1415, "img", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1416, "div", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1417, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1418, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1419, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1420, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1421, "a", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1422, "img", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1423, "div", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1424, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1425, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1426, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1427, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1428, "a", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1429, "img", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1430, "div", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1431, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1432, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1433, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1434, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1435, "a", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1436, "img", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1437, "div", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1438, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1439, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1440, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1441, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1442, "a", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1443, "img", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1444, "div", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1445, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1446, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1447, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1448, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1449, "a", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1450, "img", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1451, "div", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1452, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1453, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1454, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1455, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1456, "a", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1457, "img", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product_daily);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */", ".slick-slider[_ngcontent-%COMP%] {\n                    max-height: 418px;\n                }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/product-details/product-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../notification.service */ "./src/app/notification.service.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services.service */ "./src/app/services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function ProductDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pro_image_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pro_image_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductDetailsComponent_img_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 146);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.sellerinfo.profileimage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProductDetailsComponent {
    constructor(route, acroute, notifyService, http, api) {
        this.route = route;
        this.acroute = acroute;
        this.notifyService = notifyService;
        this.http = http;
        this.api = api;
        this.href = "";
        this.strAsArray = [];
    }
    ngOnInit() {
        this.href = this.route.url;
        this.strAsArray = this.href.split("/");
        if (this.strAsArray[1] == 'product') {
            const api_url = this.api.api_url;
            this.page_no = 1;
            const url = api_url + 'web/products/details';
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers.set('content-type', 'application/json');
            headers.set('Access-Control-Allow-Origin', '*');
            let options = { headers: headers };
            const formData = new FormData();
            formData.append('product_id', this.strAsArray[2]);
            this.http.post(url, formData, options).subscribe((res) => {
                console.log(res);
                this.product = res.data.products;
                this.productImage = res.data.products.productImage;
                this.ratings = res.data.ratings;
                this.related = res.data.related;
                this.sellerinfo = res.data.sellerinfo;
                this.verients = res.data.verients;
                console.log(this.product);
            }, (err) => {
                this.notifyService.showWarning("Somthing went wrong !!!!", "");
            });
        }
        else {
        }
        // console.log();
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 304, vars: 6, consts: [[1, "aiz-main-wrapper", "d-flex", "flex-column"], [1, "mb-4", "pt-3"], [1, "container"], [1, "bg-white", "shadow-sm", "rounded", "p-3"], [1, "row"], [1, "col-xl-5", "col-lg-6"], ["class", "sticky-top z-3 row gutters-10 flex-row-reverse", 4, "ngFor", "ngForOf"], [1, "col-xl-7", "col-lg-6"], [1, "text-left"], [1, "mb-2", "fs-20", "fw-600"], [1, "row", "align-items-center"], [1, "col-6"], [1, "col-6", "text-right"], [1, "badge", "badge-md", "badge-inline", "badge-pill", "badge-success"], [1, "col-auto"], [1, "mr-2", "opacity-50"], [1, "btn", "btn-sm", "btn-soft-primary"], ["alt", "Raymond", "height", "30", 3, "src", 4, "ngIf"], [1, "row", "no-gutters", "mt-3"], [1, "col-sm-2"], [1, "opacity-50", "my-2"], [1, "col-sm-10"], [1, ""], [1, "h2", "fw-600", "text-primary"], [1, "opacity-70"], [1, "rating"], [1, "las", "la-star"], [1, "la", "la-star"], [1, "row", "no-gutters", "mt-4"], ["type", "text", "placeholder", "Delivery to"], ["id", "option-choice-form"], ["type", "hidden", "name", "_token", "value", "zugOCHknZufr93Gw3LDd44qtUKFIol38BPHG7yNb"], ["type", "hidden", "name", "id", "value", "71"], [1, "row", "no-gutters"], [1, "aiz-radio-inline"], [1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "attribute_id_1", "value", "silk1", "checked", ""], [1, "aiz-megabox-elem", "rounded", "d-flex", "align-items-center", "justify-content-center", "py-2", "px-3", "mb-2"], ["type", "radio", "name", "attribute_id_1", "value", "silk2"], ["type", "radio", "name", "attribute_id_2", "value", "fabric1", "checked", ""], ["type", "radio", "name", "attribute_id_2", "value", "fabric2"], ["type", "radio", "name", "attribute_id_6", "value", "material1", "checked", ""], ["type", "radio", "name", "attribute_id_6", "value", "material2"], ["type", "radio", "name", "attribute_id_7", "value", "size1", "checked", ""], ["type", "radio", "name", "attribute_id_7", "value", "size2"], ["data-toggle", "tooltip", "data-title", "Black", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#000000", "checked", ""], [1, "aiz-megabox-elem", "rounded", "d-flex", "align-items-center", "justify-content-center", "p-1", "mb-2"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#000000"], ["data-toggle", "tooltip", "data-title", "Blue", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#0000FF"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#0000FF"], [1, "product-quantity", "d-flex", "align-items-center"], [1, "row", "no-gutters", "align-items-center", "aiz-plus-minus", "mr-3", 2, "width", "130px"], ["type", "button", "data-type", "minus", "data-field", "quantity", "disabled", "", 1, "btn", "col-auto", "btn-icon", "btn-sm", "btn-circle", "btn-light"], [1, "las", "la-minus"], ["type", "text", "name", "quantity", "placeholder", "1", "value", "10", "min", "10", "max", "10", "readonly", "", 1, "col", "border-0", "text-center", "flex-grow-1", "fs-16", "input-number"], ["type", "button", "data-type", "plus", "data-field", "quantity", 1, "btn", "col-auto", "btn-icon", "btn-sm", "btn-circle", "btn-light"], [1, "las", "la-plus"], [1, "avialable-amount", "opacity-60"], ["id", "available-quantity"], ["id", "chosen_price_div", 1, "row", "no-gutters", "pb-3", "d-none"], [1, "product-price"], ["id", "chosen_price", 1, "h4", "fw-600", "text-primary"], [1, "mt-3"], ["type", "button", "onclick", "addToCart()", 1, "btn", "btn-soft-primary", "mr-2", "add-to-cart", "fw-600"], [1, "las", "la-shopping-bag"], [1, "d-none", "d-md-inline-block"], ["type", "button", "onclick", "buyNow()", 1, "btn", "btn-primary", "buy-now", "fw-600"], [1, "la", "la-shopping-cart"], [1, "aiz-share"], [1, "mb-4"], [1, "row", "gutters-10"], [1, "col-xl-3", "order-1", "order-xl-0"], [1, "bg-white", "shadow-sm", "mb-3"], [1, "position-relative", "p-3", "text-left"], [1, "opacity-50", "fs-12", "border-bottom"], [1, "fw-600"], [1, "text-center", "border", "rounded", "p-2", "mt-3"], [1, "las", "la-star", "active"], [1, "las", "la-star", "half"], [1, "opacity-60", "fs-12"], [1, "bg-white", "rounded", "shadow-sm", "mb-3"], [1, "p-3", "border-bottom", "fs-16", "fw-600"], [1, "p-3"], [1, "list-group", "list-group-flush"], [1, "py-3", "px-0", "list-group-item", "border-light"], [1, "row", "gutters-10", "align-items-center"], [1, "col-5"], ["href", "#", 1, "d-block", "text-reset"], ["src", "https://via.placeholder.com/150", 1, "img-fit", "lazyload", "h-xxl-110px", "h-xl-80px", "h-120px"], [1, "col-7", "text-left"], [1, "fs-13", "text-truncate-2"], ["href", "https://dev1.ivantechnology.in/cliqpack/product/my-t-shirt-cb9ka", 1, "d-block", "text-reset"], [1, "rating", "rating-sm", "mt-1"], [1, "mt-2"], [1, "fs-17", "fw-600", "text-primary"], [1, "col-xl-9", "order-0", "order-xl-1"], [1, "bg-white", "mb-3", "shadow-sm", "rounded"], [1, "nav", "border-bottom", "aiz-nav-tabs"], ["href", "#tab_default_1", "data-toggle", "tab", 1, "p-3", "fs-16", "fw-600", "text-reset", "active", "show"], ["href", "#tab_default_2", "data-toggle", "tab", 1, "p-3", "fs-16", "fw-600", "text-reset"], ["href", "#tab_default_4", "data-toggle", "tab", 1, "p-3", "fs-16", "fw-600", "text-reset"], [1, "tab-content", "pt-0"], ["id", "tab_default_1", 1, "tab-pane", "fade", "active", "show"], [1, "p-4"], [1, "mw-100", "overflow-hidden", "text-left"], [1, "_2418kt"], [1, "_21Ahn-"], ["id", "tab_default_2", 1, "tab-pane", "fade"], [1, "embed-responsive", "embed-responsive-16by9"], ["src", "https://www.youtube.com/embed/5qap5aO4i9A", 1, "embed-responsive-item"], ["id", "tab_default_3", 1, "tab-pane", "fade"], [1, "p-4", "text-center"], ["href", "", 1, "btn", "btn-primary"], ["id", "tab_default_4", 1, "tab-pane", "fade"], [1, "text-center", "fs-18", "opacity-70"], [1, "bg-white", "rounded", "shadow-sm"], [1, "border-bottom", "p-3"], [1, "fs-16", "fw-600", "mb-0"], [1, "mr-4"], ["data-items", "5", "data-xl-items", "3", "data-lg-items", "4", "data-md-items", "3", "data-sm-items", "2", "data-xs-items", "2", "data-arrows", "true", "data-infinite", "true", 1, "aiz-carousel", "gutters-5", "half-outside-arrow"], [1, "carousel-box"], [1, "aiz-card-box", "border", "border-light", "rounded", "hov-shadow-md", "my-2", "has-transition"], ["href", "#", 1, "d-block"], ["src", "https://via.placeholder.com/150", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], [1, "p-md-3", "p-2", "text-left"], [1, "fs-15"], [1, "fw-600", "opacity-50", "mr-1"], [1, "fw-700", "text-primary"], [1, "fw-600", "fs-13", "text-truncate-2", "lh-1-4", "mb-0", "h-35px"], ["href", "https://dev1.ivantechnology.in/cliqpack/product/my-shervani-zqfar", 1, "d-block"], ["src", "https://via.placeholder.com/150", "data-src", "https://dev1.ivantechnology.in/cliqpack/public/uploads/all/G7RKPJ8LIV5flpwcQLEdITb4evnecxf0qb6Acq0q.jpg", "alt", "my Shervani", "onerror", "this.onerror=null;this.src='https://dev1.ivantechnology.in/cliqpack/public/assets/img/placeholder.jpg';", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "https://dev1.ivantechnology.in/cliqpack/product/my-shervani-zqfar", 1, "d-block", "text-reset"], ["href", "https://dev1.ivantechnology.in/cliqpack/product/my-tshurt-vio84", 1, "d-block"], ["src", "https://via.placeholder.com/150", "data-src", "https://dev1.ivantechnology.in/cliqpack/public/uploads/all/Xdxvmqh6DCiZIJu58JKYyxYy152W5cxfsQMDO1Dw.jpg", "alt", "my tshurt", "onerror", "this.onerror=null;this.src='https://dev1.ivantechnology.in/cliqpack/public/assets/img/placeholder.jpg';", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "https://dev1.ivantechnology.in/cliqpack/product/my-tshurt-vio84", 1, "d-block", "text-reset"], [1, "sticky-top", "z-3", "row", "gutters-10", "flex-row-reverse"], [1, "col"], ["data-nav-for", ".product-gallery-thumb", "data-fade", "true", 1, "aiz-carousel", "product-gallery"], [1, "carousel-box", "img-zoom", "rounded"], [1, "img-fluid", "lazyload", 3, "src"], [1, "col-auto", "w-80px"], ["data-items", "5", "data-nav-for", ".product-gallery", "data-vertical", "true", "data-focus-select", "true", "data-arrows", "true", 1, "aiz-carousel", "carousel-thumb", "product-gallery-thumb"], [1, "carousel-box", "c-pointer", "border", "p-1", "rounded"], [1, "lazyload", "mw-100", "size-50px", "mx-auto", 3, "src"], ["alt", "Raymond", "height", "30", 3, "src"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductDetailsComponent_div_6_Template, 9, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "In stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sold By: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Message Seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProductDetailsComponent_img_27_Template, 1, 1, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Delivery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Silk:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " silk1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " silk2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Fabric:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " fabric1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " fabric2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "material:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " material1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " material2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " size1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " size2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Quantity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "320");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " available)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Total Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "strong", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Buy Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Share:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "section", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Sold By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "(2 customer reviews)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Top Selling Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "ul", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h4", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "My T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u09F3109.989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "prited lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "iframe", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "ul", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " There have been no reviews for this product yet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h3", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Related products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "a", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "del", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "\u09F3250.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "\u09F3249.999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h3", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "my Towel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "del", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "\u09F35,500.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "span", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "\u09F34,950.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "h3", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "a", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "my Shervani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "img", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "del", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "\u09F32,502.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "\u09F32,497.495");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "h3", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "a", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "my tshurt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sellerinfo.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sellerinfo.profileimage != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u09F3 ", ctx.product.home_discounted_base_price, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("/", ctx.product.availableQty, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/product-list/product-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/product-list/product-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../notification.service */ "./src/app/notification.service.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services.service */ "./src/app/services.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = function (a1) { return ["/product", a1]; };
function ProductListComponent_div_269_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "del", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, item_r1.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, item_r1.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u09F3", item_r1.purchase_price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u09F3", item_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", item_r1.availableqty, ")");
} }
class ProductListComponent {
    constructor(route, notifyService, http, api) {
        this.route = route;
        this.notifyService = notifyService;
        this.http = http;
        this.api = api;
        this.href = "";
        this.strAsArray = [];
        this.products = [];
    }
    ngOnInit() {
        this.href = this.route.url;
        this.strAsArray = this.href.split("/");
        if (this.strAsArray[2] == 'category') {
            const api_url = this.api.api_url;
            this.page_no = 1;
            const url = api_url + 'web/products/browse';
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers.set('content-type', 'application/json');
            headers.set('Access-Control-Allow-Origin', '*');
            let options = { headers: headers };
            const formData = new FormData();
            formData.append('page_no', '1');
            formData.append('category_id', this.strAsArray[3]);
            this.http.post(url, formData, options).subscribe((res) => {
                // console.log(res);
                this.products = res.data.products;
                this.cat_name = res.data.category_data.name;
            }, (err) => {
                // this.notifyService.showWarning("Somthing went wrong !!!!", "")
            });
        }
        else {
        }
        // console.log();
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 285, vars: 2, consts: [[1, "aiz-main-wrapper", "d-flex", "flex-column"], [1, "mb-4", "pt-3"], [1, "container", "sm-px-0"], ["id", "search-form", "action", "", "method", "GET", 1, ""], [1, "row"], [1, "col-xl-3"], [1, "aiz-filter-sidebar", "collapse-sidebar-wrap", "sidebar-xl", "sidebar-right", "z-1035"], ["data-toggle", "class-toggle", "data-target", ".aiz-filter-sidebar", "data-same", ".filter-sidebar-thumb", 1, "overlay", "overlay-fixed", "dark", "c-pointer"], [1, "collapse-sidebar", "c-scrollbar-light", "text-left"], [1, "d-flex", "d-xl-none", "justify-content-between", "align-items-center", "pl-3", "border-bottom"], [1, "h6", "mb-0", "fw-600"], ["type", "button", "data-toggle", "class-toggle", "data-target", ".aiz-filter-sidebar", "type", "button", 1, "btn", "btn-sm", "p-2", "filter-sidebar-thumb"], [1, "las", "la-times", "la-2x"], [1, "bg-white", "shadow-sm", "rounded", "mb-3"], [1, "fs-15", "fw-600", "p-3", "border-bottom"], [1, "p-3"], [1, "list-unstyled"], [1, "mb-2"], ["href", "#", 1, "text-reset", "fs-14", "fw-600"], [1, "las", "la-angle-left"], [1, "aiz-range-slider"], ["id", "input-slider-range", "data-range-value-min", " 110 ", "data-range-value-max", " 15000 "], [1, "row", "mt-2"], [1, "col-6"], ["data-range-value-low", "250", "id", "input-slider-range-value-low", 1, "range-slider-value", "value-low", "fs-14", "fw-600", "opacity-70"], [1, "col-6", "text-right"], ["data-range-value-high", "5000", "id", "input-slider-range-value-high", 1, "range-slider-value", "value-high", "fs-14", "fw-600", "opacity-70"], [1, "aiz-radio-inline"], ["data-toggle", "tooltip", "data-title", "Black", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#000000", "onchange", "filter()"], [1, "aiz-megabox-elem", "rounded", "d-flex", "align-items-center", "justify-content-center", "p-1", "mb-2"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#000000"], ["data-toggle", "tooltip", "data-title", "Blue", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#0000FF", "onchange", "filter()"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#0000FF"], ["data-toggle", "tooltip", "data-title", "Crimson", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#DC143C", "onchange", "filter()"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#DC143C"], ["data-toggle", "tooltip", "data-title", "FloralWhite", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#FFFAF0", "onchange", "filter()"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#FFFAF0"], ["data-toggle", "tooltip", "data-title", "Peru", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#CD853F", "onchange", "filter()"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#CD853F"], ["data-toggle", "tooltip", "data-title", "Beige", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#F5F5DC", "onchange", "filter()"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#F5F5DC"], ["data-toggle", "tooltip", "data-title", "DarkSlateBlue", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#483D8B", "onchange", "filter()"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#483D8B"], ["data-toggle", "tooltip", "data-title", "Amethyst", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#9966CC", "onchange", "filter()"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#9966CC"], ["data-toggle", "tooltip", "data-title", "Aqua", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#00FFFF", "onchange", "filter()"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#00FFFF"], ["data-toggle", "tooltip", "data-title", "DarkRed", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#8B0000", "onchange", "filter()"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#8B0000"], [1, "aiz-checkbox-list"], [1, "aiz-checkbox"], ["type", "checkbox", "name", "attribute_1[]", "value", "silk1", "onchange", "filter()"], [1, "aiz-square-check"], ["type", "checkbox", "name", "attribute_1[]", "value", "silk2", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_1[]", "value", "Mulberry", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_2[]", "value", "fabric1", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_2[]", "value", "fabric2", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_2[]", "value", "cotton", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_2[]", "value", "politer", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_2[]", "value", "heard cl", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_2[]", "value", "Silk", "change", "filter()"], ["type", "checkbox", "name", "attribute_2[]", "value", "Cotton", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_6[]", "value", "material1", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_6[]", "value", "material2", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_6[]", "value", "cotton", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_6[]", "value", "fabric", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_7[]", "value", "size1", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_7[]", "value", "size2", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_7[]", "value", "X", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_7[]", "value", "XL", "onchange", "filter()"], ["type", "checkbox", "name", "attribute_7[]", "value", "M", "onchange", "filter()"], [1, "col-xl-9"], [1, "breadcrumb", "bg-transparent", "p-0"], [1, "breadcrumb-item", "opacity-50"], ["href", "#", 1, "text-reset"], [1, "text-dark", "fw-600", "breadcrumb-item"], [1, "text-left"], [1, "d-flex"], [1, "form-group", "w-200px"], [1, "mb-0", "opacity-50"], ["name", "sort_by", "onchange", "filter()", 1, "form-control", "form-control-sm", "aiz-selectpicker"], ["value", "newest"], ["value", "oldest"], ["value", "price-asc"], ["value", "price-desc"], [1, "form-group", "ml-auto", "mr-0", "w-200px", "d-none", "d-md-block"], ["data-live-search", "true", "name", "brand", "onchange", "filter()", 1, "form-control", "form-control-sm", "aiz-selectpicker"], ["value", ""], ["value", "levis"], ["value", "mi"], ["value", "Raymond-IvGuX"], ["value", "Readme-hIwmu"], ["value", "Samsung-HrG4t"], ["value", "Bharatsthali-oeMea"], ["value", "Saree-creations-Ulj6W"], ["value", "Calvin-Klein-joSuW"], ["value", "Brindal-b1dk4"], ["value", "Rupkatha-LbGbs"], [1, "form-group", "ml-2", "mr-0", "w-200px", "d-none", "d-md-block"], ["data-live-search", "true", "name", "seller_id", "onchange", "filter()", 1, "form-control", "form-control-sm", "aiz-selectpicker"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "d-xl-none", "ml-auto", "ml-md-3", "mr-0", "form-group", "align-self-end"], ["type", "button", "data-toggle", "class-toggle", "data-target", ".aiz-filter-sidebar", 1, "btn", "btn-icon", "p-0"], [1, "la", "la-filter", "la-2x"], ["type", "hidden", "name", "min_price", "value", "11"], ["type", "hidden", "name", "max_price", "value", "22"], [1, "row", "gutters-5", "row-cols-xxl-4", "row-cols-xl-3", "row-cols-lg-4", "row-cols-md-3", "row-cols-2"], ["class", "col mb-3", 4, "ngFor", "ngForOf"], [1, "aiz-pagination", "aiz-pagination-center", "mt-4"], [1, "pagination"], ["aria-disabled", "true", "aria-label", "\u00AB Previous", 1, "page-item", "disabled"], ["aria-hidden", "true", 1, "page-link"], ["aria-current", "page", 1, "page-item", "active"], [1, "page-link"], [1, "page-item"], ["href", "#", 1, "page-link"], ["href", "#", "rel", "next", "aria-label", "Next \u00BB", 1, "page-link"], [1, "col", "mb-3"], [1, "aiz-card-box", "h-100", "border", "border-light", "rounded", "shadow-sm", "hov-shadow-md", "has-transition", "bg-white"], [1, "position-relative"], [1, "d-block", 3, "routerLink"], [1, "img-fit", "lazyload", "mx-auto", "h-160px", "h-md-220px", "h-xl-270px", "h-xxl-250px", 3, "src"], [1, "absolute-top-right", "aiz-p-hov-icon"], [1, "p-2", "text-left", "cart-sec-box"], [1, "fs-15"], [1, "d-block", "text-reset", 3, "routerLink"], [1, "d-flex", "align-items-center", "justify-content-start"], [1, "d-price"], [1, "price-amount"], [1, "rating-box"], [1, "rating", "rating-sm", "mt-1"], [1, "la", "la-star"], [1, "d-flex", "align-items-center", "justify-content-between", "view-box"], ["href", "javascript:void(0)", "onclick", "addToWishList(71)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left"], [1, "la", "la-heart-o"], ["href", "#", "onclick", "getproduct_details(71)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left"], [1, "las", "la-eye"], [1, "text-center", "w-100"], ["type", "button", "onclick", "showAddToCartModal(71)", 1, "btn", "w-100", "add-to-cart"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " All categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Price range ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Filter by color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Filter by Silk ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "silk1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "silk2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Mulberry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Filter by Fabric ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "fabric1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "fabric2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "cotton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "politer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "heard cloth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Silk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Cotton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Filter by material ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "material1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "material2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "cotton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "fabric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Filter by size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "size1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "size2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "XL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "ul", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "All categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\"Men\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "label", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Sort By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "select", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Newest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Oldest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Price low to high");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "option", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Price high to low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "label", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "select", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "option", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "All Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "option", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Levis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "option", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "MI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "option", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Raymond");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "option", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Readme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "option", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Samsung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "option", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Bharatsthali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "option", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Saree creations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "option", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Calvin Klein");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "option", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Brindal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "option", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Rupkatha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "label", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Sellers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "select", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "option", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "All Sellers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "option", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Demo Seller Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "option", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Deb Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "option", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "option", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Anirban Cliqpack Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "button", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "input", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "input", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](269, ProductListComponent_div_269_Template, 30, 12, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "ul", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "li", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "span", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "\u2039");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "li", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "span", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "li", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "li", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "a", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "\u203A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cat_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-list',
                templateUrl: './product-list.component.html',
                styleUrls: ['./product-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/seller-dashboard/seller-dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/seller-dashboard/seller-dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: SellerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerDashboardComponent", function() { return SellerDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SellerDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
SellerDashboardComponent.ɵfac = function SellerDashboardComponent_Factory(t) { return new (t || SellerDashboardComponent)(); };
SellerDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SellerDashboardComponent, selectors: [["app-seller-dashboard"]], decls: 248, vars: 0, consts: [[1, "py-5"], [1, "container"], [1, "d-flex", "align-items-start"], [1, "aiz-user-sidenav-wrap", "pt-4", "position-relative", "z-1", "shadow-sm"], [1, "absolute-top-right", "d-xl-none"], ["data-toggle", "class-toggle", "data-target", ".aiz-mobile-side-nav", "data-same", ".mobile-side-nav-thumb", 1, "btn", "btn-sm", "p-2"], [1, "las", "la-times", "la-2x"], [1, "absolute-top-left", "d-xl-none"], ["href", "#", 1, "btn", "btn-sm", "p-2"], [1, "las", "la-sign-out-alt", "la-2x"], [1, "aiz-user-sidenav", "rounded", "overflow-hidden", "c-scrollbar-light"], [1, "px-4", "text-center", "mb-4"], [1, "avatar", "avatar-md", "mb-3"], ["src", "https://dev1.ivantechnology.in/cliqpack/public/uploads/all/Lq41GU3h0PDAg8W2gYo81LhBS83ofja04tNq614K.jpg"], [1, "h5", "fw-600"], [1, "ml-2"], [1, "las", "la-check-circle", 2, "color", "green"], [1, "sidemnenu", "mb-3"], ["data-toggle", "aiz-side-menu", 1, "aiz-side-nav-list", "metismenu"], [1, "aiz-side-nav-item", "mm-active"], ["href", "#", "aria-expanded", "true", 1, "aiz-side-nav-link", "active"], [1, "las", "la-home", "aiz-side-nav-icon"], [1, "aiz-side-nav-text"], [1, "aiz-side-nav-item"], ["href", "#", 1, "aiz-side-nav-link"], [1, "las", "la-file-alt", "aiz-side-nav-icon"], [1, "la", "la-heart-o", "aiz-side-nav-icon"], [1, "las", "la-money-bill", "aiz-side-nav-icon"], [1, "badge", "badge-inline", "badge-success"], [1, "las", "la-star-of-david", "aiz-side-nav-icon"], [1, "las", "la-cog", "aiz-side-nav-icon"], [1, "las", "la-history", "aiz-side-nav-icon"], [1, "las", "la-money-bill-wave-alt", "aiz-side-nav-icon"], [1, "las", "la-atom", "aiz-side-nav-icon"], [1, "las", "la-user", "aiz-side-nav-icon"], [1, "h5", "fw-600", "text-center"], [1, "widget-balance", "pb-3", "pt-1"], [1, "text-center"], [1, "heading-4", "strong-700", "mb-4"], [1, "d-block", "fs-12", "mb-2"], [1, "btn", "btn-primary", "fw-600", "fs-18"], [1, "table", "table-borderless"], ["width", "60%", 1, "p-1"], ["width", "40%", 1, "p-1", "fw-600"], [1, "aiz-user-panel"], [1, "aiz-titlebar", "mt-2", "mb-4"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "h3"], [1, "row", "gutters-10"], [1, "col-md-3"], [1, "bg-grad-3", "text-white", "rounded-lg", "mb-4", "overflow-hidden"], [1, "px-3", "pt-3"], [1, "h3", "fw-700"], [1, "opacity-50"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1440 320"], ["fill", "rgba(255,255,255,0.3)", "fill-opacity", "1", "d", "M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"], [1, "bg-grad-1", "text-white", "rounded-lg", "mb-4", "overflow-hidden"], ["fill", "rgba(255,255,255,0.3)", "fill-opacity", "1", "d", "M0,192L30,208C60,224,120,256,180,245.3C240,235,300,181,360,144C420,107,480,85,540,96C600,107,660,149,720,154.7C780,160,840,128,900,117.3C960,107,1020,117,1080,112C1140,107,1200,85,1260,74.7C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"], [1, "bg-grad-2", "text-white", "rounded-lg", "mb-4", "overflow-hidden"], ["fill", "rgba(255,255,255,0.3)", "fill-opacity", "1", "d", "M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"], [1, "row"], [1, "col-md-7"], [1, "card"], [1, "card-header"], [1, "mb-0", "h6"], [1, "card-body"], [1, "table", "aiz-table", "mb-0", "footable", "footable-1", "breakpoint-lg"], [1, "footable-first-visible", 2, "display", "table-cell"], [1, "footable-last-visible", 2, "display", "table-cell"], [1, "col-md-5"], [1, "bg-white", "mt-4", "p-5", "text-center"], [1, "mb-3"], ["loading", "lazy", "src", "https://dev1.ivantechnology.in/cliqpack/public/assets/img/verified.png", "alt", "", "width", "130"], [1, "mb-0"], [1, "table", "aiz-table", "mb-0", "footable", "footable-2", "breakpoint-lg"], [1, "footable-header"], ["href", "https://dev1.ivantechnology.in/cliqpack/seller/product/upload", 1, "btn", "btn-primary", "d-inline-block"], ["href", "https://dev1.ivantechnology.in/cliqpack/seller/products", 1, "btn", "btn-primary", "d-inline-block"], ["loading", "lazy", "src", "https://dev1.ivantechnology.in/cliqpack/public/assets/img/trustedbudge.png", "alt", "", "width", "130"], [1, "col-md-4"]], template: function SellerDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mr. Seller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Purchase History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "47");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Product Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Shop Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Payment History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Money Withdraw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Support Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Manage Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sold Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "small", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Your sold amount (current month)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u09F33,960.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Total Sold: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " \u09F33,960.000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Last Month Sold: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \u09F30.000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " 26 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "svg", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Total sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "svg", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u09F33,960.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Total earnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "svg", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Successful orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "svg", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h5", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "table", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Total orders:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Pending orders:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Cancelled orders:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Successful orders:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h6", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "table", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "tr", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "th", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Formal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Winder cloths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Kurti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Mi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Gionee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Saree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Mob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Add New product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Product List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbGxlci1kYXNoYm9hcmQvc2VsbGVyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seller-dashboard',
                templateUrl: './seller-dashboard.component.html',
                styleUrls: ['./seller-dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/seller-login/seller-login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/seller-login/seller-login.component.ts ***!
  \**************************************************************/
/*! exports provided: SellerLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerLoginComponent", function() { return SellerLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SellerLoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
SellerLoginComponent.ɵfac = function SellerLoginComponent_Factory(t) { return new (t || SellerLoginComponent)(); };
SellerLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SellerLoginComponent, selectors: [["app-seller-login"]], decls: 2, vars: 0, template: function SellerLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "seller-login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbGxlci1sb2dpbi9zZWxsZXItbG9naW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seller-login',
                templateUrl: './seller-login.component.html',
                styleUrls: ['./seller-login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/seller-register/seller-register.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/seller-register/seller-register.component.ts ***!
  \********************************************************************/
/*! exports provided: SellerRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerRegisterComponent", function() { return SellerRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SellerRegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
SellerRegisterComponent.ɵfac = function SellerRegisterComponent_Factory(t) { return new (t || SellerRegisterComponent)(); };
SellerRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SellerRegisterComponent, selectors: [["app-seller-register"]], decls: 2, vars: 0, template: function SellerRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "seller-register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbGxlci1yZWdpc3Rlci9zZWxsZXItcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seller-register',
                templateUrl: './seller-register.component.html',
                styleUrls: ['./seller-register.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services.service.ts":
/*!*************************************!*\
  !*** ./src/app/services.service.ts ***!
  \*************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ServicesService {
    constructor() {
        this.api_url = "https://dev1.ivantechnology.in/cliqpack/api/v1/";
    }
}
ServicesService.ɵfac = function ServicesService_Factory(t) { return new (t || ServicesService)(); };
ServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServicesService, factory: ServicesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\App\cliqpack\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map