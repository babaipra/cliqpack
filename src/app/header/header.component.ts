import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { NotificationService } from '../notification.service'
import {  AuthService} from '../auth.service'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, private notifyService: NotificationService, private http: HttpClient, private api: ServicesService,
    private auth:AuthService) { }
  public log_val: any;
  public log_url: string;
  ngOnInit(): void {
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
    let headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': auth_token
    })
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
    
    this.http.post<any>(url, formData, { headers: headers }).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.auth.logout();
       
        location.reload();
      }else{
        this.notifyService.showWarning("Somthing went wrong !!!!", "")
      }
    },

      (err: any) => {
        // this.notifyService.showWarning("Somthing went wrong !!!!", "")
      }

    );

  }
}
