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
                    this.notifyService.showWarning(res.message, "");
                    location.reload();
                }
                else {
                    console.log(res.errors);
                    var results = res.errors;
                    for (var result in results) {
                        this.notifyService.showWarning(results[result], "");
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


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../notification.service */ "./src/app/notification.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services.service */ "./src/app/services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a1) { return ["/products/category", a1]; };
function HomeComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", cat_item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, cat_item_r1.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_item_r1.name);
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
        this.http.get(home_category).subscribe((res) => {
            console.log(res);
            if (res.status == 200) {
                this.product_category = res.data;
            }
            else {
                this.notifyService.showWarning("Somthing went wrong !!!!", "");
            }
        }, (error) => {
            // this.notifyService.showWarning("Somthing went wrong !!!!", "")
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1684, vars: 1, consts: [[1, "home-banner-area", "mb-4", "pt-5"], [1, "container"], [1, "row", "position-relative"], [1, "col-lg-3", "position-static", "d-none", "d-lg-block"], [1, "aiz-category-menu", "bg-white", "rounded", "cat-menu", "h-100", "shadow-sm"], ["class", "list-unstyled categories no-scrollbar mb-0 text-left", 4, "ngFor", "ngForOf"], [1, "col-lg-7"], [1, "home-slider"], [1, "owl-carousel", "owl-theme", "owl-loaded"], [1, "owl-stage-outer"], [1, "owl-stage", 2, "transform", "translate3d(-1573px, 0px, 0px)", "transition", "all 0s ease 0s", "width", "5507px"], [1, "owl-item", "cloned", 2, "width", "786.656px"], [1, "item"], ["alt", "1000+ Great Banner Background Photos \u00B7 Pexels \u00B7 Free Stock Photos", "src", "assets/cliqpack/index_files/t6sJqxHLCH2skWWJ7W0rHLmd0dKRkMSaWSn2EWDI.jpg", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], ["alt", "1000+ Great Banner Background Photos \u00B7 Pexels \u00B7 Free Stock Photos", "src", "assets/cliqpack/index_files/1xK7q7i77WU7UQPr3Y4BrbsL4Syv5PIVYXKbrMQm.jpg", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], [1, "owl-item", "active", 2, "width", "786.656px"], ["alt", "1000+ Great Banner Background Photos \u00B7 Pexels \u00B7 Free Stock Photos", "src", "assets/cliqpack/index_files/p8Om2UZU8cOer3Xn6TSBcTc7JtoaNFt1T3rmR9Ng.jpg", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], [1, "owl-item", 2, "width", "786.656px"], [1, "owl-nav"], [1, "owl-prev"], [1, "fa", "fa-angle-left"], [1, "owl-next"], [1, "fa", "fa-angle-right"], [1, "owl-dots"], ["role", "button", 1, "owl-dot", "active"], ["role", "button", 1, "owl-dot"], [1, "col-md-2", "col-lg-2", "col-sm-12", "col-12"], [1, "bg-white", "shadow-lg", "mb-3", "rounded", "p-2", "slide-left-sec"], ["alt", "Is Los Angeles a Horizontal City? | KCET", "src", "assets/cliqpack/index_files/DGQ6ZMJs4ljC2iAFOA3m3bHytMu8wzeVhfhSFD5r.png", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb", "w-100"], ["alt", "Is Los Angeles a Horizontal City? | KCET", "src", "assets/cliqpack/index_files/TkDys21EqRHNmgI6TAVDd5S6uM6In0qfAb9jxjKx.png", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb", "w-100"], [1, "cart-img", "mt-4"], [1, "row"], [1, "col-md-3"], ["src", "assets/cliqpack/index_files/DGQ6ZMJs4ljC2iAFOA3m3bHytMu8wzeVhfhSFD5r.png", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], ["src", "assets/cliqpack/index_files/wx4BZ1EqpYokp57LlIrPqlyJBqfZpdmrHUN0f1VU.png", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], ["src", "assets/cliqpack/index_files/V5iVG5iV6Q02UDj8pPfowjzUaPiIu0twBkqggHpJ.jpg", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], ["src", "assets/cliqpack/index_files/M04KXyAHj2Q9oK2JBeUMH46ElW6ICg0DPHKn7AU0.jpg", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb"], [1, "mb-4"], [1, "row", "gutters-10"], ["id", "todays_deal"], [1, "col-md-12", "col-lg-12"], [1, "bg-white", "shadow-sm", "rounded"], [1, "d-flex", "mb-1", "align-items-baseline", "border-bottom", "px-4", "py-3", "px-md-4", "py-md-3"], [1, "h5", "fw-700", "mb-0"], [1, "d-inline-block", "home-heading"], ["data-items", "6", "data-xl-items", "6", "data-lg-items", "6", "data-md-items", "3", "data-sm-items", "2", "data-xs-items", "2", "data-arrows", "true", "data-infinite", "true", 1, "aiz-carousel", "px-3", "half-outside-arrow", "slick-initialized", "slick-slider"], ["type", "button", "aria-disabled", "true", 1, "slick-prev", "slick-arrow", "slick-disabled", 2, "display", "inline-block"], [1, "las", "la-angle-left"], [1, "slick-list", "draggable"], [1, "slick-track", 2, "opacity", "1", "width", "1526px", "transform", "translate3d(0px, 0px, 0px)"], ["data-slick-index", "0", "aria-hidden", "false", 1, "slick-slide", "slick-current", "slick-active", 2, "width", "210px"], [1, "carousel-box", 2, "width", "100%", "display", "inline-block"], [1, "aiz-card-box", "border", "border-light", "rounded", "hov-shadow-md", "my-2", "has-transition"], [1, "position-relative"], ["href", "#", "tabindex", "0", 1, "d-block"], ["src", "assets/cliqpack/index_files/uhruKNA0DEMTPgq0JgNXrRXrW4ZNP2YUJERwKmYY.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], [1, "absolute-top-right", "aiz-p-hov-icon"], [1, "p-2", "text-left", "cart-sec-box"], [1, "fs-15"], ["href", "#", "tabindex", "0", 1, "d-block", "text-reset"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "price-amount"], [1, "d-price"], [1, "rating-box"], [1, "rating", "rating-sm", "mt-1"], [1, "la", "la-star"], [1, "d-flex", "align-items-center", "justify-content-between", "view-box"], ["href", "javascript:void(0)", "onclick", "addToWishList(53)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], [1, "la", "la-heart-o"], ["href", "javascript:void(0)", "onclick", "getproduct_details(53)", "data-toggle", "modal", "data-title", "View", "data-placement", "left", "tabindex", "0"], [1, "las", "la-eye"], [1, "text-center", "w-100"], ["type", "button", "onclick", "showAddToCartModal(53)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "1", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "210px"], ["src", "assets/cliqpack/index_files/G7RKPJ8LIV5flpwcQLEdITb4evnecxf0qb6Acq0q.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(52)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "javascript:void(0)", "onclick", "getproduct_details(52)", "data-toggle", "modal", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(52)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "2", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "210px"], ["src", "assets/cliqpack/index_files/Xdxvmqh6DCiZIJu58JKYyxYy152W5cxfsQMDO1Dw.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(51)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "javascript:void(0)", "onclick", "getproduct_details(51)", "data-toggle", "modal", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(51)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "3", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "210px"], ["src", "assets/cliqpack/index_files/aOittfhwNXiy05dxcgxA5lkkd1uUn0Uy1twICHNM.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(50)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "javascript:void(0)", "onclick", "getproduct_details(50)", "data-toggle", "modal", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(50)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "4", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "210px"], ["src", "assets/cliqpack/index_files/u9xHYLvp7Jc8jUuS1rFrEPsDZ0i1okHenjoBl2Bp.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(49)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "javascript:void(0)", "onclick", "getproduct_details(49)", "data-toggle", "modal", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(49)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "5", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "210px"], ["src", "assets/cliqpack/index_files/oAZDXK6R84sK2qNJtV87aK4uwEX8tFo4ln6z3rRn.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(48)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "javascript:void(0)", "onclick", "getproduct_details(48)", "data-toggle", "modal", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(48)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "6", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "210px"], ["href", "#", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/iza9UxfLdu8bADdzmYKcS2fdG15QNgoO3Qj44ZYt.bin", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["href", "#", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(41)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", "javascript:void(0)", "onclick", "getproduct_details(41)", "data-toggle", "modal", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(41)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["type", "button", "aria-disabled", "false", 1, "slick-next", "slick-arrow"], [1, "las", "la-angle-right"], ["id", "latest_featured_products"], [1, "slick-track", 2, "opacity", "1", "width", "872px", "transform", "translate3d(0px, 0px, 0px)"], ["src", "assets/cliqpack/index_files/oAZDXK6R84sK2qNJtV87aK4uwEX8tFo4ln6z3rRn.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "getproduct_details(48)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["src", "assets/cliqpack/index_files/Xdxvmqh6DCiZIJu58JKYyxYy152W5cxfsQMDO1Dw.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "getproduct_details(51)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["src", "assets/cliqpack/index_files/aOittfhwNXiy05dxcgxA5lkkd1uUn0Uy1twICHNM.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "getproduct_details(50)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["src", "assets/cliqpack/index_files/u9xHYLvp7Jc8jUuS1rFrEPsDZ0i1okHenjoBl2Bp.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "getproduct_details(49)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], [1, "big-image"], [1, "col-md-6"], [1, "bg-white", "shadow-sm", "rounded", "p-2"], ["alt", "31 Must-Read Books for Aspiring CEOs and Entrepreneurs", "src", "assets/cliqpack/index_files/lQFNEBiY8JKPR5o7arZilYA5WIbMcQlQC4cbQrwR.png", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb", "w-100"], ["alt", "31 Must-Read Books for Aspiring CEOs and Entrepreneurs", "src", "assets/cliqpack/index_files/E6B1P9PTvTzvWjXzat5GnE4qONJbFgIHUX0UILRd.jpg", "data-noaft", "1", "jsname", "HiaYvf", "jsaction", "load:XAeZkd;", 1, "n3VNCb", "w-100"], ["id", "section_home_categories"], ["id", "section_best_sellers"], [1, "home-banner-area", "mb-4", "pt-3"], [1, "row", "gutters-10", "position-relative"], ["data-arrows", "true", "data-dots", "true", "data-autoplay", "true", "data-infinite", "true", 1, "aiz-carousel", "dots-inside-bottom", "mobile-img-auto-height", "slick-initialized", "slick-slider"], [1, "slick-track", 2, "opacity", "1", "width", "0px", "transform", "translate3d(0px, 0px, 0px)"], ["id", "category"], [1, "shadow-sm", "rounded"], [1, "d-flex", "mb-1", "align-items-baseline", "py-3"], [1, "d-inline-block", "cat-heading"], [1, "tab-part"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["data-toggle", "tab", "href", "#nav-home-4", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom", "active"], ["data-toggle", "tab", "href", "#nav-home-5", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom"], ["data-toggle", "tab", "href", "#nav-home-24", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom"], ["id", "nav-tabContent", 1, "tab-content", "bg-white"], ["id", "nav-home-4", "role", "tabpanel", "aria-labelledby", "nav-home-tab-0", 1, "tab-pane", "fade", "show", "active"], ["data-items", "6", "data-xl-items", "6", "data-lg-items", "6", "data-md-items", "3", "data-sm-items", "2", "data-xs-items", "2", "data-arrows", "true", "data-infinite", "true", 1, "aiz-carousel", "px-3", "py-3", "half-outside-arrow", "slick-initialized", "slick-slider"], [1, "carousel-box", "your-class", 2, "width", "100%", "display", "inline-block"], ["src", "assets/cliqpack/index_files/anArIQq4zLBufHlUnZoBWb9rtWjzBz2IWmPVQPOC.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(60)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(60)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(60)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["src", "assets/cliqpack/index_files/FTSHkP3ycTZZSuvjHn5hpetUelqh9oxN9NoU9Vyq.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(59)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(59)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(59)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["src", "assets/cliqpack/index_files/JywQiNGyrTUPZMbfF1JYin0DLsbha76d4Htz9nXZ.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(58)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(58)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(58)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["href", "#", "onclick", "getproduct_details(48)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["id", "nav-home-5", "role", "tabpanel", "aria-labelledby", "nav-home-tab-1", 1, "tab-pane", "fade"], ["data-slick-index", "0", "aria-hidden", "false", 1, "slick-slide", "slick-current", "slick-active", 2, "width", "0px"], ["src", "assets/cliqpack/index_files/placeholder.jpg", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "javascript:void(0)", "onclick", "addToWishList(63)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(63)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(63)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "1", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "0px"], ["href", "javascript:void(0)", "onclick", "addToWishList(62)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(62)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(62)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "2", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "0px"], ["href", "javascript:void(0)", "onclick", "addToWishList(61)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(61)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(61)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["id", "nav-home-24", "role", "tabpanel", "aria-labelledby", "nav-home-tab-2", 1, "tab-pane", "fade"], ["src", "assets/cliqpack/index_files/placeholder.jpg", "data-src", " public/uploads/all/O0jtGkjg4Z15ZUQIZFGulKBkEHj7BUHV66tcFgb6.jpg", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "javascript:void(0)", "onclick", "addToWishList(67)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(67)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(67)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["src", "assets/cliqpack/index_files/placeholder.jpg", "data-src", " public/uploads/all/GdFG0Q6X2PAP5o0emikgBTTDi7d74nbrP4ta8JnB.jpg", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "javascript:void(0)", "onclick", "addToWishList(66)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(66)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(66)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["src", "assets/cliqpack/index_files/placeholder.jpg", "data-src", " public/uploads/all/jYplK998LCxXwI3FLX3eV93Q7mm3f4jTU2QmEX7M.jpg", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "javascript:void(0)", "onclick", "addToWishList(65)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(65)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(65)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "3", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "0px"], ["src", "assets/cliqpack/index_files/placeholder.jpg", "data-src", " public/uploads/all/SBjh3Ben4FDeayUgImIY9QG4T9JSSguNrS3iRh0k.jpg", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "javascript:void(0)", "onclick", "addToWishList(64)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(64)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(64)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-toggle", "tab", "href", "#nav-home-13", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom", "active"], ["data-toggle", "tab", "href", "#nav-home-14", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom"], ["id", "nav-home-13", "role", "tabpanel", "aria-labelledby", "nav-home-tab-0", 1, "tab-pane", "fade", "show", "active"], [1, "slick-track", 2, "opacity", "1", "width", "218px", "transform", "translate3d(0px, 0px, 0px)"], ["src", "assets/cliqpack/index_files/nAffBKQmipuWsKXB3IzOqgqoVBJrYIc2iTh0vmIS.png", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(68)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(68)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(68)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["id", "nav-home-14", "role", "tabpanel", "aria-labelledby", "nav-home-tab-1", 1, "tab-pane", "fade"], ["href", "javascript:void(0)", "onclick", "addToWishList(70)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(70)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(70)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-toggle", "tab", "href", "#nav-home-6", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom", "active"], ["data-toggle", "tab", "href", "#nav-home-15", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "slick-custom"], ["id", "nav-home-6", "role", "tabpanel", "aria-labelledby", "nav-home-tab-0", 1, "tab-pane", "fade", "show", "active"], [1, "slick-track", 2, "opacity", "1", "width", "436px", "transform", "translate3d(0px, 0px, 0px)"], ["src", "assets/cliqpack/index_files/jlDA4xpL7VHXXm1C9gtW0Uj446HEIpaCIzyZy1K9.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(57)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(57)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(57)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["src", "assets/cliqpack/index_files/zWf5j0LtUF1sYmcxl2TXbjdrs20cKhhgkutKz1D8.bin", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(56)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(56)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(56)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["id", "nav-home-15", "role", "tabpanel", "aria-labelledby", "nav-home-tab-1", 1, "tab-pane", "fade"], ["href", "javascript:void(0)", "onclick", "addToWishList(55)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(55)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(55)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["id", "mens"], ["id", "womens"], ["id", "beauty"], ["id", "highestsellings"], ["href", "#", "onclick", "getproduct_details(51)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(50)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(49)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["id", "recentview"], ["id", "latest"], ["id", "mostrecent"], ["id", "letest_products"], [1, "slick-track", 2, "opacity", "1", "width", "2676px", "transform", "translate3d(0px, 0px, 0px)"], ["data-slick-index", "0", "aria-hidden", "false", 1, "slick-slide", "slick-current", "slick-active", 2, "width", "215px"], [1, "las", "la-star"], ["data-slick-index", "1", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "215px"], ["src", "assets/cliqpack/index_files/iza9UxfLdu8bADdzmYKcS2fdG15QNgoO3Qj44ZYt.bin", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "javascript:void(0)", "onclick", "addToWishList(41)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "0"], ["href", "#", "onclick", "getproduct_details(41)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["type", "button", "onclick", "showAddToCartModal(41)", "tabindex", "0", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "2", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "215px"], ["href", "", "tabindex", "0", 1, "d-block"], ["src", "assets/cliqpack/index_files/G7RKPJ8LIV5flpwcQLEdITb4evnecxf0qb6Acq0q.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "#", "onclick", "getproduct_details(52)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["data-slick-index", "3", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "215px"], ["src", "assets/cliqpack/index_files/uhruKNA0DEMTPgq0JgNXrRXrW4ZNP2YUJERwKmYY.jpg", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", "#", "onclick", "getproduct_details(53)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "0"], ["data-slick-index", "4", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "215px"], ["data-slick-index", "5", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "215px"], ["data-slick-index", "6", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "215px"], ["href", " product/my-mobile-2-6X1RD", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/va3HyDs8doYawj2fTOJvST9GNaIZYKfKDUqpJtfR.jpg", "data-src", " public/uploads/all/va3HyDs8doYawj2fTOJvST9GNaIZYKfKDUqpJtfR.jpg", "alt", "my mobile 2", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", " product/my-mobile-2-6X1RD", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(69)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", " #", "onclick", "getproduct_details(69)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(69)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "7", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "215px"], ["href", " product/my-mobile-DCrXx", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/nAffBKQmipuWsKXB3IzOqgqoVBJrYIc2iTh0vmIS.png", "data-src", " public/uploads/all/nAffBKQmipuWsKXB3IzOqgqoVBJrYIc2iTh0vmIS.png", "alt", "my mobile", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", " product/my-mobile-DCrXx", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(68)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", " #", "onclick", "getproduct_details(68)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(68)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "8", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "215px"], ["href", " product/my-casual-3-jfpCA", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/O0jtGkjg4Z15ZUQIZFGulKBkEHj7BUHV66tcFgb6.jpg", "data-src", " public/uploads/all/O0jtGkjg4Z15ZUQIZFGulKBkEHj7BUHV66tcFgb6.jpg", "alt", "my casual 3", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["href", " product/my-casual-3-jfpCA", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(67)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", " #", "onclick", "getproduct_details(67)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(67)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "9", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "215px"], ["href", " product/my-casual-3-Mxv6G", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/GdFG0Q6X2PAP5o0emikgBTTDi7d74nbrP4ta8JnB.jpg", "data-src", " public/uploads/all/GdFG0Q6X2PAP5o0emikgBTTDi7d74nbrP4ta8JnB.jpg", "alt", "my casual 3", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "ls-is-cached", "lazyloaded"], ["href", " product/my-casual-3-Mxv6G", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(66)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", " #", "onclick", "getproduct_details(66)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(66)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "10", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "215px"], ["href", " product/my-casual-shurt-2-1nk4m", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/placeholder.jpg", "data-src", " public/uploads/all/jYplK998LCxXwI3FLX3eV93Q7mm3f4jTU2QmEX7M.jpg", "alt", "my casual shurt 2", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", " product/my-casual-shurt-2-1nk4m", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(65)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", " #", "onclick", "getproduct_details(65)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(65)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["data-slick-index", "11", "aria-hidden", "true", "tabindex", "-1", 1, "slick-slide", 2, "width", "215px"], ["href", " product/my-casual-shurt-LvMAz", "tabindex", "-1", 1, "d-block"], ["src", "assets/cliqpack/index_files/placeholder.jpg", "data-src", " public/uploads/all/SBjh3Ben4FDeayUgImIY9QG4T9JSSguNrS3iRh0k.jpg", "alt", "my casual shurt", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", " product/my-casual-shurt-LvMAz", "tabindex", "-1", 1, "d-block", "text-reset"], ["href", "javascript:void(0)", "onclick", "addToWishList(64)", "data-toggle", "tooltip", "data-title", "Add to wishlist", "data-placement", "left", "tabindex", "-1"], ["href", " #", "onclick", "getproduct_details(64)", "data-toggle", "tooltip", "data-title", "View", "data-placement", "left", "tabindex", "-1"], ["type", "button", "onclick", "showAddToCartModal(64)", "tabindex", "-1", 1, "btn", "w-100", "add-to-cart"], ["id", "our_brands"], [1, "rounded"], [1, "d-flex", "mb-1", "align-items-baseline", "py-3", "text-center", "justify-content-center"], ["data-items", "10", "data-xl-items", "10", "data-lg-items", "10", "data-md-items", "3", "data-sm-items", "2", "data-xs-items", "2", "data-arrows", "true", "data-infinite", "true", 1, "aiz-carousel", "half-outside-arrow", "brands-a", "slick-initialized", "slick-slider"], [1, "slick-track", 2, "opacity", "1", "width", "1370px", "transform", "translate3d(0px, 0px, 0px)"], ["data-slick-index", "0", "aria-hidden", "false", 1, "slick-slide", "slick-current", "slick-active", 2, "width", "129px"], ["href", " #", "tabindex", "0", 1, "d-block"], ["src", "assets/cliqpack/index_files/oDxkMwGJMjTfGEsEf0cmoFPsAgPuydOKvVskdf5k.png", "data-src", " public/uploads/all/oDxkMwGJMjTfGEsEf0cmoFPsAgPuydOKvVskdf5k.png", "alt", "Levis", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "1", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/LcIPZIMkyLMUtR2NnUauUWxF7ac0wq8pw7CisymQ.jpg", "data-src", " public/uploads/all/LcIPZIMkyLMUtR2NnUauUWxF7ac0wq8pw7CisymQ.jpg", "alt", "MI", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "2", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/ccKxeE9gbDkLjZhYWwaMmLnCfyIWLwEUV0vvOVbF.png", "data-src", " public/uploads/all/ccKxeE9gbDkLjZhYWwaMmLnCfyIWLwEUV0vvOVbF.png", "alt", "Raymond", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "3", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/dimETt52OdtTGlQJLsKgJfiFbZBLsNHiybAxm1vw.png", "data-src", " public/uploads/all/dimETt52OdtTGlQJLsKgJfiFbZBLsNHiybAxm1vw.png", "alt", "Readme", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "4", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/5whFOipVHkXle4BfUIGk2SjQL6bdDbjZGt2qa2g7.jpg", "data-src", " public/uploads/all/5whFOipVHkXle4BfUIGk2SjQL6bdDbjZGt2qa2g7.jpg", "alt", "Samsung", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "5", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/yoOuSfIRZ3Li4pOTXGTJzKybpr8z4mzCW70wNb45.png", "data-src", " public/uploads/all/yoOuSfIRZ3Li4pOTXGTJzKybpr8z4mzCW70wNb45.png", "alt", "Bharatsthali", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "6", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/ReP2MlegtJ2lMj1bLb6RABHnb3fY1r5srH8o2cfp.jpg", "data-src", " public/uploads/all/ReP2MlegtJ2lMj1bLb6RABHnb3fY1r5srH8o2cfp.jpg", "alt", "Saree creations", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "7", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/CY1fWPpNznUOhcrJtR7tNZxn7ae5kbVBvWSE924m.gif", "data-src", " public/uploads/all/CY1fWPpNznUOhcrJtR7tNZxn7ae5kbVBvWSE924m.gif", "alt", "Calvin Klein", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "8", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/QUliT6otu4GwP0ViIDX12nstHORWi8vjQaPpbpAr.png", "data-src", " public/uploads/all/QUliT6otu4GwP0ViIDX12nstHORWi8vjQaPpbpAr.png", "alt", "Brindal", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], ["data-slick-index", "9", "aria-hidden", "false", 1, "slick-slide", "slick-active", 2, "width", "129px"], ["src", "assets/cliqpack/index_files/L1nJk3H6BCss6bte5UM0yOj07ZFd2OHaNE9ep8YL.png", "data-src", " public/uploads/all/L1nJk3H6BCss6bte5UM0yOj07ZFd2OHaNE9ep8YL.png", "alt", "Rupkatha", "onerror", "this.onerror=null;this.src=' public/assets/cliqpack/assets/img/placeholder.jpg';", 1, "img-fit", "mx-auto", "h-140px", "h-md-210px", "lazyloaded"], [1, "list-unstyled", "categories", "no-scrollbar", "mb-0", "text-left"], [1, "category-nav-element", 3, "id"], [1, "text-truncate", "d-block", 3, "routerLink"], [1, "cat-name"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "my Towel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u09F3250.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u09F3249.999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "my Shervani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u09F35,500.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u09F34,950.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " 4.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "(1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "my tshurt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\u09F32,502.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u09F32,497.495");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "my Galexy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "\u09F315,015.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "\u09F315,014.800");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "My Samsung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\u09F35,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "My T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "\u09F3111.100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "\u09F3109.989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " 3.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "(1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "button", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Samsung M30 galaxy 6gb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\u09F310,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Add to Cart");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "button", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Latest Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "My T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "\u09F3111.100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "\u09F3109.989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, " 3.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "(1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "button", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "my tshurt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "\u09F32,502.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "\u09F32,497.495");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "my Galexy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "\u09F315,015.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "\u09F315,014.800");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "My Samsung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "\u09F35,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Add to Cart");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](458, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](459, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](462, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](463, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](470, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "span", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "nav", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "Formal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "a", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "Winder cloths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "a", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](498, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "my formal 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "\u09F3601.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "\u09F3600.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](512, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "a", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](519, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "a", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](521, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "button", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](531, "img", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](532, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "my formal 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "\u09F3909.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "\u09F3899.910");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](545, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](548, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "a", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](552, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](554, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "button", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](564, "img", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](565, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "my formal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, "\u09F3404.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "\u09F3399.960");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](578, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](581, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "a", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](585, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "a", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](587, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "button", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](597, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](598, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "My T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "\u09F3111.100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "\u09F3109.989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610, " 3.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](611, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, "(1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](614, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](618, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "a", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](620, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "button", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "Add to Cart");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](634, "img", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](635, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, "sweeter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "\u09F33,001.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](644, "\u09F33,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](648, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](651, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "a", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](655, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "a", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](657, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "button", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](667, "img", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](668, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "my jacket 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675, "\u09F34,040.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "\u09F33,999.600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](681, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](684, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "a", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](688, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "a", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](690, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "button", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "div", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](700, "img", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](701, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "my jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "\u09F3457.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](710, "\u09F3456.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](714, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](717, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "a", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](721, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "a", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](723, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "button", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "Add to Cart");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "div", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](737, "img", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](738, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, "my casual 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, "\u09F32,323.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](747, "\u09F32,299.770");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](751, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](753, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](754, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "a", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](758, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "a", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](760, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "button", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](770, "img", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](771, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "my casual 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "\u09F3303.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, "\u09F3299.970");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](784, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](787, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "a", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](791, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "a", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](793, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](795, "button", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](796, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "div", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](803, "img", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](804, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "my casual shurt 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, "\u09F3303.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "\u09F3299.970");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](816, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](817, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](819, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](820, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "a", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](824, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "a", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](826, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "button", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](836, "img", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](837, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "my casual shurt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](844, "\u09F3312.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](846, "\u09F3311.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](850, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](853, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "a", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](857, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "a", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](859, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "button", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](862, "Add to Cart");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "span", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "nav", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "a", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](873, "MI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "a", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](875, "Gionee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "div", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "div", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](881, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](885, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](887, "img", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](888, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](892, "my mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](894, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](895, "\u09F32,501.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](897, "\u09F32,500.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](900, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](901, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](903, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](904, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "a", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](908, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](909, "a", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](910, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](913, "Add to Cart");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](914, "div", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](917, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](920, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](924, "img", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](925, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](927, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](928, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](929, "my mobile 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](931, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](932, "\u09F312,120.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](933, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](934, "\u09F311,877.600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](936, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](938, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](940, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](941, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](942, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "a", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](945, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "a", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](947, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](948, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](949, "button", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](950, "Add to Cart");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](952, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](954, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](955, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](956, "span", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](957, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "nav", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](959, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](960, "a", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](961, "Kurti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](962, "a", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](963, "Saree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](964, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "div", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](966, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](968, "div", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](970, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](972, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](973, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](974, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](975, "img", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](976, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](978, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](980, "my kurti 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](981, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](982, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](983, "\u09F3260.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](985, "\u09F3250.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](986, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](987, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](988, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](989, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](992, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](994, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](995, "a", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](996, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](997, "a", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](998, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](999, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1000, "button", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1001, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1003, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1004, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1005, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1006, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1008, "img", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1009, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1010, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1011, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1012, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1013, "my kurti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1014, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1015, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1016, "\u09F3280.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1017, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1018, "\u09F3246.400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1019, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1020, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1021, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1022, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1023, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1024, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1025, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1026, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1028, "a", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1029, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1030, "a", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1031, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1032, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1033, "button", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1034, "Add to Cart");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1036, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1038, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1039, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1040, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1041, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1042, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1043, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1044, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1045, "img", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1046, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1047, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1048, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1049, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1050, "my Saree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1051, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1052, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1053, "\u09F3505.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1054, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1055, "\u09F3479.750");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1056, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1057, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1058, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1059, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1060, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1061, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1062, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1063, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1064, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1065, "a", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1066, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "a", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1068, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1069, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "button", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1071, "Add to Cart");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1072, "div", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1073, "div", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1074, "div", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1075, "div", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1076, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1077, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1078, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1079, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1080, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1081, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1082, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1083, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1084, "Highest Selling Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1085, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1086, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1087, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1088, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1089, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1090, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1091, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1092, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1093, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1094, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1095, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1097, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1098, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1099, "my tshurt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1100, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1101, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1102, "\u09F32,502.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1103, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1104, "\u09F32,497.495");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1105, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1106, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1107, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1108, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1110, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1114, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1115, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1116, "a", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1117, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1118, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1120, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1121, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1122, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1123, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1124, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1125, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1126, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1127, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1128, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1129, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1130, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1131, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1132, "my Galexy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1133, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1134, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1135, "\u09F315,015.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1136, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1137, "\u09F315,014.800");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1138, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1140, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1141, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1143, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1144, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1145, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1146, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1147, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1148, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1149, "a", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1150, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1151, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1152, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1153, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1154, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1155, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1156, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1158, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1159, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1160, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1161, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1162, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1163, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1164, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1165, "My Samsung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1167, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1168, "\u09F35,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1169, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1170, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1171, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1172, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1174, "(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1175, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1176, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1177, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1178, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1179, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1180, "a", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1181, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1182, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1183, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1184, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1185, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1186, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1188, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1189, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1190, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1191, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1192, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1193, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1194, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1195, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1196, "My T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1197, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1198, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1199, "\u09F3111.100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1200, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1201, "\u09F3109.989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1202, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1203, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1204, " 3.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1205, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1207, "(1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1208, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1209, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1210, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1211, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1212, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1213, "a", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1214, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1215, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1216, "button", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1217, "Add to Cart");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1218, "div", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1219, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1220, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1221, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1222, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1223, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1224, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1225, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1226, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1227, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1228, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1229, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1230, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1231, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1232, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1233, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1234, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1235, "div", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1236, "div", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1237, "div", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1238, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1240, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1241, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1242, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1243, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1244, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1245, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1246, "Latest Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1247, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1248, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1249, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1250, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1251, "div", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1252, "div", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1253, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1254, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1255, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1256, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1257, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1258, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1259, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1260, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1261, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1262, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1263, "My T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1264, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1265, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1266, "\u09F3111.100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1267, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1268, "\u09F3109.989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1269, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1270, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1271, " 3.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1272, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1273, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1274, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1275, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1276, "a", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1277, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1278, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1279, "button", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1280, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1281, "div", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1282, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1283, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1284, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1285, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1286, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1287, "img", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1288, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1289, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1290, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1291, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1292, "Samsung M30 galaxy 6gb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1293, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1294, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1295, "\u09F310,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1296, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1297, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1298, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1299, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1300, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1301, "a", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1302, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1303, "a", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1304, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1305, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1306, "button", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1307, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1308, "div", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1309, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1310, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1311, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1312, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1313, "a", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1314, "img", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1315, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1316, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1317, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1318, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1319, "my Shervani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1320, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1321, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1322, "\u09F35,500.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1323, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1324, "\u09F34,950.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1325, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1326, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1327, " 4.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1328, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1329, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1330, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1331, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1332, "a", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1333, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1334, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1335, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1336, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1337, "div", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1338, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1339, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1340, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1341, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1342, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1343, "img", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1344, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1345, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1347, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1348, "my Towel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1349, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1350, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1351, "\u09F3250.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1352, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1353, "\u09F3249.999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1354, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1355, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1356, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1357, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1358, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1359, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1360, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1361, "a", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1362, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1363, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1364, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1365, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1366, "div", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1367, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1368, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1369, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1370, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1371, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1372, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1373, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1374, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1375, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1376, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1377, "my tshurt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1378, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1379, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1380, "\u09F32,502.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1381, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1382, "\u09F32,497.495");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1383, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1384, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1385, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1386, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1387, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1388, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1389, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1390, "a", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1391, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1392, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1393, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1394, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1395, "div", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1396, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1397, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1398, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1399, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1400, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1401, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1402, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1403, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1404, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1405, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1406, "my mobile 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1407, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1408, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1409, "\u09F312,120.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1410, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1411, "\u09F311,877.600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1412, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1413, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1414, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1415, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1416, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1417, "a", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1418, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1419, "a", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1420, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1421, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1422, "button", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1423, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1424, "div", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1425, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1426, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1427, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1428, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1429, "a", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1430, "img", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1431, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1432, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1433, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1434, "a", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1435, "my mobile 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1436, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1437, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1438, "\u09F312,001.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1439, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1440, "\u09F312,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1441, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1442, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1443, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1444, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1445, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1446, "a", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1447, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1448, "a", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1449, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1450, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1451, "button", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1452, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1453, "div", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1454, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1455, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1456, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1457, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1458, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1459, "img", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1460, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1461, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1462, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1463, "a", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1464, "my mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1465, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1466, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1467, "\u09F32,501.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1468, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1469, "\u09F32,500.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1470, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1471, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1472, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1473, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1474, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1475, "a", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1476, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1477, "a", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1478, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1479, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1480, "button", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1481, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1482, "div", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1483, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1484, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1485, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1486, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1487, "a", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1488, "img", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1489, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1490, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1491, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1492, "a", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1493, "my casual 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1494, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1495, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1496, "\u09F32,323.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1497, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1498, "\u09F32,299.770");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1499, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1500, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1501, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1502, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1503, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1504, "a", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1505, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1506, "a", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1507, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1508, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1509, "button", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1510, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1511, "div", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1512, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1513, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1514, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1515, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1516, "a", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1517, "img", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1518, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1519, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1520, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1521, "a", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1522, "my casual 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1523, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1524, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1525, "\u09F3303.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1526, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1527, "\u09F3299.970");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1528, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1529, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1530, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1531, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1532, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1533, "a", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1534, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1535, "a", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1536, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1537, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1538, "button", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1539, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1540, "div", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1541, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1542, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1543, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1544, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1545, "a", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1546, "img", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1547, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1548, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1549, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1550, "a", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1551, "my casual shurt 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1552, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1553, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1554, "\u09F3303.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1555, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1556, "\u09F3299.970");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1557, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1558, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1559, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1560, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1561, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1562, "a", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1563, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1564, "a", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1565, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1566, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1567, "button", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1568, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1569, "div", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1570, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1571, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1572, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1573, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1574, "a", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1575, "img", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1576, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1577, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1578, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1579, "a", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1580, "my casual shurt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1581, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1582, "del", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1583, "\u09F3312.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1584, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1585, "\u09F3311.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1586, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1587, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1588, " 0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1589, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1590, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1591, "a", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1592, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1593, "a", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1594, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1595, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1596, "button", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1597, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1598, "button", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1599, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1600, "div", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1601, "div", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1602, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1603, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1604, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1605, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1606, "div", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1607, "div", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1608, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1609, "span", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1610, "Our Available Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1611, "div", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1612, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1613, "div", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1614, "div", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1615, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1616, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1617, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1618, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1619, "a", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1620, "img", 291);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1621, "div", 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1622, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1623, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1624, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1625, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1626, "a", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1627, "img", 293);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1628, "div", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1629, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1630, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1631, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1632, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1633, "a", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1634, "img", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1635, "div", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1636, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1637, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1638, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1639, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1640, "a", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1641, "img", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1642, "div", 298);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1643, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1644, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1645, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1646, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1647, "a", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1648, "img", 299);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1649, "div", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1650, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1651, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1652, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1653, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1654, "a", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1655, "img", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1656, "div", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1657, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1658, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1659, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1660, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1661, "a", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1662, "img", 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1663, "div", 304);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1664, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1665, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1666, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1667, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1668, "a", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1669, "img", 305);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1670, "div", 306);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1671, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1672, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1673, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1674, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1675, "a", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1676, "img", 307);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1677, "div", 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1678, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1679, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1680, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1681, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1682, "a", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1683, "img", 309);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */", ".slick-slider[_ngcontent-%COMP%] {\n                    max-height: 418px;\n                }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"] }]; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class ProductDetailsComponent {
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
                console.log(res);
                this.products = res.data.products;
                this.cat_name = res.data.category_data.name;
            }, (err) => {
                this.notifyService.showWarning("Somthing went wrong !!!!", "");
            });
        }
        else {
        }
        // console.log();
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 312, vars: 0, consts: [[1, "aiz-main-wrapper", "d-flex", "flex-column"], [1, "mb-4", "pt-3"], [1, "container"], [1, "bg-white", "shadow-sm", "rounded", "p-3"], [1, "row"], [1, "col-xl-5", "col-lg-6"], [1, "sticky-top", "z-3", "row", "gutters-10", "flex-row-reverse"], [1, "col"], ["data-nav-for", ".product-gallery-thumb", "data-fade", "true", 1, "aiz-carousel", "product-gallery"], [1, "carousel-box", "img-zoom", "rounded"], ["src", "https://via.placeholder.com/150", 1, "img-fluid", "lazyload"], [1, "col-auto", "w-80px"], ["data-items", "5", "data-nav-for", ".product-gallery", "data-vertical", "true", "data-focus-select", "true", "data-arrows", "true", 1, "aiz-carousel", "carousel-thumb", "product-gallery-thumb"], [1, "carousel-box", "c-pointer", "border", "p-1", "rounded"], ["src", "https://via.placeholder.com/150", 1, "lazyload", "mw-100", "size-50px", "mx-auto"], [1, "col-xl-7", "col-lg-6"], [1, "text-left"], [1, "mb-2", "fs-20", "fw-600"], [1, "row", "align-items-center"], [1, "col-6"], [1, "col-6", "text-right"], [1, "badge", "badge-md", "badge-inline", "badge-pill", "badge-success"], [1, "col-auto"], [1, "mr-2", "opacity-50"], ["onclick", "show_chat_modal()", 1, "btn", "btn-sm", "btn-soft-primary"], ["src", "https://via.placeholder.com/150", "alt", "Raymond", "height", "30"], [1, "row", "no-gutters", "mt-3"], [1, "col-sm-2"], [1, "opacity-50", "my-2"], [1, "col-sm-10"], [1, ""], [1, "h2", "fw-600", "text-primary"], [1, "opacity-70"], [1, "rating"], [1, "las", "la-star"], [1, "la", "la-star"], [1, "row", "no-gutters", "mt-4"], ["type", "text", "placeholder", "Delivery to"], ["id", "option-choice-form"], ["type", "hidden", "name", "_token", "value", "zugOCHknZufr93Gw3LDd44qtUKFIol38BPHG7yNb"], ["type", "hidden", "name", "id", "value", "71"], [1, "row", "no-gutters"], [1, "aiz-radio-inline"], [1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "attribute_id_1", "value", "silk1", "checked", ""], [1, "aiz-megabox-elem", "rounded", "d-flex", "align-items-center", "justify-content-center", "py-2", "px-3", "mb-2"], ["type", "radio", "name", "attribute_id_1", "value", "silk2"], ["type", "radio", "name", "attribute_id_2", "value", "fabric1", "checked", ""], ["type", "radio", "name", "attribute_id_2", "value", "fabric2"], ["type", "radio", "name", "attribute_id_6", "value", "material1", "checked", ""], ["type", "radio", "name", "attribute_id_6", "value", "material2"], ["type", "radio", "name", "attribute_id_7", "value", "size1", "checked", ""], ["type", "radio", "name", "attribute_id_7", "value", "size2"], ["data-toggle", "tooltip", "data-title", "Black", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#000000", "checked", ""], [1, "aiz-megabox-elem", "rounded", "d-flex", "align-items-center", "justify-content-center", "p-1", "mb-2"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#000000"], ["data-toggle", "tooltip", "data-title", "Blue", 1, "aiz-megabox", "pl-0", "mr-2"], ["type", "radio", "name", "color", "value", "#0000FF"], [1, "size-30px", "d-inline-block", "rounded", 2, "background", "#0000FF"], [1, "product-quantity", "d-flex", "align-items-center"], [1, "row", "no-gutters", "align-items-center", "aiz-plus-minus", "mr-3", 2, "width", "130px"], ["type", "button", "data-type", "minus", "data-field", "quantity", "disabled", "", 1, "btn", "col-auto", "btn-icon", "btn-sm", "btn-circle", "btn-light"], [1, "las", "la-minus"], ["type", "text", "name", "quantity", "placeholder", "1", "value", "10", "min", "10", "max", "10", "readonly", "", 1, "col", "border-0", "text-center", "flex-grow-1", "fs-16", "input-number"], ["type", "button", "data-type", "plus", "data-field", "quantity", 1, "btn", "col-auto", "btn-icon", "btn-sm", "btn-circle", "btn-light"], [1, "las", "la-plus"], [1, "avialable-amount", "opacity-60"], ["id", "available-quantity"], ["id", "chosen_price_div", 1, "row", "no-gutters", "pb-3", "d-none"], [1, "product-price"], ["id", "chosen_price", 1, "h4", "fw-600", "text-primary"], [1, "mt-3"], ["type", "button", "onclick", "addToCart()", 1, "btn", "btn-soft-primary", "mr-2", "add-to-cart", "fw-600"], [1, "las", "la-shopping-bag"], [1, "d-none", "d-md-inline-block"], ["type", "button", "onclick", "buyNow()", 1, "btn", "btn-primary", "buy-now", "fw-600"], [1, "la", "la-shopping-cart"], [1, "aiz-share"], [1, "mb-4"], [1, "row", "gutters-10"], [1, "col-xl-3", "order-1", "order-xl-0"], [1, "bg-white", "shadow-sm", "mb-3"], [1, "position-relative", "p-3", "text-left"], [1, "opacity-50", "fs-12", "border-bottom"], [1, "fw-600"], [1, "text-center", "border", "rounded", "p-2", "mt-3"], [1, "las", "la-star", "active"], [1, "las", "la-star", "half"], [1, "opacity-60", "fs-12"], [1, "bg-white", "rounded", "shadow-sm", "mb-3"], [1, "p-3", "border-bottom", "fs-16", "fw-600"], [1, "p-3"], [1, "list-group", "list-group-flush"], [1, "py-3", "px-0", "list-group-item", "border-light"], [1, "row", "gutters-10", "align-items-center"], [1, "col-5"], ["href", "#", 1, "d-block", "text-reset"], ["src", "https://via.placeholder.com/150", 1, "img-fit", "lazyload", "h-xxl-110px", "h-xl-80px", "h-120px"], [1, "col-7", "text-left"], [1, "fs-13", "text-truncate-2"], ["href", "https://dev1.ivantechnology.in/cliqpack/product/my-t-shirt-cb9ka", 1, "d-block", "text-reset"], [1, "rating", "rating-sm", "mt-1"], [1, "mt-2"], [1, "fs-17", "fw-600", "text-primary"], [1, "col-xl-9", "order-0", "order-xl-1"], [1, "bg-white", "mb-3", "shadow-sm", "rounded"], [1, "nav", "border-bottom", "aiz-nav-tabs"], ["href", "#tab_default_1", "data-toggle", "tab", 1, "p-3", "fs-16", "fw-600", "text-reset", "active", "show"], ["href", "#tab_default_2", "data-toggle", "tab", 1, "p-3", "fs-16", "fw-600", "text-reset"], ["href", "#tab_default_4", "data-toggle", "tab", 1, "p-3", "fs-16", "fw-600", "text-reset"], [1, "tab-content", "pt-0"], ["id", "tab_default_1", 1, "tab-pane", "fade", "active", "show"], [1, "p-4"], [1, "mw-100", "overflow-hidden", "text-left"], [1, "_2418kt"], [1, "_21Ahn-"], ["id", "tab_default_2", 1, "tab-pane", "fade"], [1, "embed-responsive", "embed-responsive-16by9"], ["src", "https://www.youtube.com/embed/5qap5aO4i9A", 1, "embed-responsive-item"], ["id", "tab_default_3", 1, "tab-pane", "fade"], [1, "p-4", "text-center"], ["href", "", 1, "btn", "btn-primary"], ["id", "tab_default_4", 1, "tab-pane", "fade"], [1, "text-center", "fs-18", "opacity-70"], [1, "bg-white", "rounded", "shadow-sm"], [1, "border-bottom", "p-3"], [1, "fs-16", "fw-600", "mb-0"], [1, "mr-4"], ["data-items", "5", "data-xl-items", "3", "data-lg-items", "4", "data-md-items", "3", "data-sm-items", "2", "data-xs-items", "2", "data-arrows", "true", "data-infinite", "true", 1, "aiz-carousel", "gutters-5", "half-outside-arrow"], [1, "carousel-box"], [1, "aiz-card-box", "border", "border-light", "rounded", "hov-shadow-md", "my-2", "has-transition"], ["href", "#", 1, "d-block"], ["src", "https://via.placeholder.com/150", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], [1, "p-md-3", "p-2", "text-left"], [1, "fs-15"], [1, "fw-600", "opacity-50", "mr-1"], [1, "fw-700", "text-primary"], [1, "fw-600", "fs-13", "text-truncate-2", "lh-1-4", "mb-0", "h-35px"], ["href", "https://dev1.ivantechnology.in/cliqpack/product/my-shervani-zqfar", 1, "d-block"], ["src", "https://via.placeholder.com/150", "data-src", "https://dev1.ivantechnology.in/cliqpack/public/uploads/all/G7RKPJ8LIV5flpwcQLEdITb4evnecxf0qb6Acq0q.jpg", "alt", "my Shervani", "onerror", "this.onerror=null;this.src='https://dev1.ivantechnology.in/cliqpack/public/assets/img/placeholder.jpg';", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "https://dev1.ivantechnology.in/cliqpack/product/my-shervani-zqfar", 1, "d-block", "text-reset"], ["href", "https://dev1.ivantechnology.in/cliqpack/product/my-tshurt-vio84", 1, "d-block"], ["src", "https://via.placeholder.com/150", "data-src", "https://dev1.ivantechnology.in/cliqpack/public/uploads/all/Xdxvmqh6DCiZIJu58JKYyxYy152W5cxfsQMDO1Dw.jpg", "alt", "my tshurt", "onerror", "this.onerror=null;this.src='https://dev1.ivantechnology.in/cliqpack/public/assets/img/placeholder.jpg';", 1, "img-fit", "lazyload", "mx-auto", "h-140px", "h-md-210px"], ["href", "https://dev1.ivantechnology.in/cliqpack/product/my-tshurt-vio84", 1, "d-block", "text-reset"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " My Printed shirt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "In stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sold By: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Inhouse product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Message Seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u09F3500.000 - \u09F326,000.000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Delivery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "form", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Silk:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " silk1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " silk2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Fabric:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " fabric1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " fabric2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "material:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " material1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " material2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " size1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " size2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Quantity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "320");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " available)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Total Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "strong", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Buy Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Share:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "section", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Sold By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "(2 customer reviews)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Top Selling Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "ul", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h4", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "My T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\u09F3109.989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "prited lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "iframe", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "ul", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " There have been no reviews for this product yet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "h3", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "span", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Related products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "img", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "del", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "\u09F3250.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "\u09F3249.999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h3", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "my Towel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "a", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "del", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "\u09F35,500.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "\u09F34,950.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "h3", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "a", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "my Shervani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "a", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "img", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "del", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "\u09F32,502.500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "span", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "\u09F32,497.495");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "h3", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "a", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "my tshurt");
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"] }]; }, null); })();


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
                console.log(res);
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
SellerDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SellerDashboardComponent, selectors: [["app-seller-dashboard"]], decls: 2, vars: 0, template: function SellerDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "seller-dashboard works!");
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