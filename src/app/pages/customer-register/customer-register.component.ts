import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { NotificationService } from '../../notification.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  // regForm = new FormGroup({
  //   name: new FormControl(''),
  //   dob: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   password_confirmation: new FormControl(''),

  // });

  // regForm:any;
  regForm: any = FormGroup;
  constructor(private route: Router, private notifyService: NotificationService, private http: HttpClient, private api: ServicesService, private formBuilder: FormBuilder) {

    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      checkbox_example_1: ['', Validators.required]
    });
  }

  ngOnInit(): void {
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
      let headers = new HttpHeaders()
      headers.set('content-type', 'application/json')
      headers.set('Access-Control-Allow-Origin', '*')

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

      this.http.post<any>(url, formData, options).subscribe((res: any) => {
        console.log(res);

        if (res.status == true) {

          this.notifyService.showSuccess(res.message, "")
          location.reload();
        }
        else {
          console.log(res.errors);
          var results = res.errors
          for (var result in results) {
            this.notifyService.showError(results[result], "")

          }

        }

      },

        (err: any) => {

          // this.notifyService.showWarning("Somthing went wrong !!!!", "")
        }

      );

    } else {
      this.notifyService.showWarning("Password and confirm password not matched !!!!", "")
    }


  }
}
