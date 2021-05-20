import { Component, OnInit } from '@angular/core';
import { ServicesService }  from  '../../services.service';
import { NotificationService } from '../../notification.service'
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private route:Router,private notifyService : NotificationService, private http : HttpClient, private api : ServicesService) {

   }
product_category :string
product_daily :string
  ngOnInit(): void {
    const api_url= this.api.api_url;
    const home_category =api_url+'home-categoris';
    const daily_product =api_url+'products/todays-deal';
    const page_no:any= 1;

    let headers = new HttpHeaders()
    headers.set('content-type', 'application/json')
    headers.set('Access-Control-Allow-Origin', '*')

    let options = { headers: headers };
    this.http.get<any>(home_category).subscribe((res:any)=>{
      // console.log(res);
      if(res.status == 200){
        this.product_category=res.data;
      }else{
        this.notifyService.showWarning("Somthing went wrong !!!!", "")
      }
    },(error:any)=>{
      // this.notifyService.showWarning("Somthing went wrong !!!!", "")
    });




      const formData = new FormData();
      formData.append('page_no', page_no);
    this.http.post<any>(daily_product,formData,options).subscribe((res:any)=>{
      // console.log(res.data.products);
      if(res.status == true){
        this.product_daily=res.data.products;
      }else{
        this.notifyService.showWarning("Somthing went wrong !!!!", "")
      }
    },(error:any)=>{
      // this.notifyService.showWarning("Somthing went wrong !!!!", "")
    });
    }
  }
  
 
   
    