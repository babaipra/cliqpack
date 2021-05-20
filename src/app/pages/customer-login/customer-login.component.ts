import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { NotificationService } from '../../notification.service'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private route: Router, private notifyService: NotificationService, private http: HttpClient, private api: ServicesService) { }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  public loginuser:string= window.localStorage.getItem('isLoggedIn');
  ngOnInit() {
  
    if (this.loginuser === null) {
      this.route.navigate(['/login']);
    }
    else {

      if ( this.loginuser === 'true') {
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
      let headers = new HttpHeaders()
      headers.set('content-type', 'application/json')
      headers.set('Access-Control-Allow-Origin', '*')

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

      this.http.post<any>(url, formData, options).subscribe((res: any) => {
        console.log(res.data);

        if (res.status == true) {
          // window.sessionStorage.setItem('token','aaaa');
          // window.localStorage.setItem('token','aaaa');
          //  window.sessionStorage.getItem('token');
          //  window.sessionStorage.clear();

          this.notifyService.showSuccess(res.message, "")
          window.localStorage.setItem('email', res.data.user.email);
          window.localStorage.setItem('name', res.data.user.name);
          // window.localStorage.setItem('user', res.data.user);
          window.localStorage.setItem('role', res.data.user.user_type);
          window.localStorage.setItem('authtoken', res.data.token);
          window.localStorage.setItem('isLoggedIn', 'true');
          if (res.data.user.user_type == 'customer') {
            this.route.navigate(['/dashboard']);
          } else if (res.data.user.user_type == 'seller') {
            this.route.navigate(['/seller/dashboard']);
          } else {
            this.notifyService.showWarning('Not access this page', "")
          }
          // this.route.navigate(['/index']);
        }
        else {
          this.notifyService.showWarning(res.message, "")
        }

      },

        (err: any) => {
          // this.notifyService.showWarning("Somthing went wrong !!!!", "")
        }

      );

    }
    else {



      this.notifyService.showWarning("Username Or Password Not Blank", "CliqPack")


    }
  }

}
