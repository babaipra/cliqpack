import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { NotificationService } from '../../notification.service'
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private route: Router, private notifyService: NotificationService, private http: HttpClient, private api: ServicesService) { }
  public href: string = "";
  public strAsArray = [];
  public products = [];
  public page_no: number;
  public cat_name: string;
  ngOnInit(): void {
    this.href = this.route.url;
    this.strAsArray = this.href.split("/")
    if (this.strAsArray[2] == 'category') {
      const api_url = this.api.api_url;
      this.page_no = 1;
      const url = api_url + 'web/products/browse';

      let headers = new HttpHeaders()
      headers.set('content-type', 'application/json')
      headers.set('Access-Control-Allow-Origin', '*')

      let options = { headers: headers };
      const formData = new FormData();
      formData.append('page_no', '1');
      formData.append('category_id', this.strAsArray[3]);
      this.http.post<any>(url, formData, options).subscribe((res: any) => {
        // console.log(res);
        this.products=res.data.products;
        this.cat_name=res.data.category_data.name;
      },(err: any) => {
          // this.notifyService.showWarning("Somthing went wrong !!!!", "")
        }  
      
      );

    } else {


    }
    // console.log();
  }

}
