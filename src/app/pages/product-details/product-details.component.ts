import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { NotificationService } from '../../notification.service'
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router,ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: Router,private acroute: ActivatedRoute, private notifyService: NotificationService, private http: HttpClient, private api: ServicesService) { }
  public href: string = "";
  public strAsArray = [];
  public product :any;
  public sellerinfo :any;
  public ratings :any;
  public related :any;
  public verients :any;
  public productImage:any;
  public page_no: number;
  public cat_name: string;
  ngOnInit(): void {
    
    this.href = this.route.url;
    this.strAsArray = this.href.split("/")
    if (this.strAsArray[1] == 'product') {
      const api_url = this.api.api_url;
      this.page_no = 1;
      const url = api_url + 'web/products/details';

      let headers = new HttpHeaders()
      headers.set('content-type', 'application/json')
      headers.set('Access-Control-Allow-Origin', '*')

      let options = { headers: headers };
      const formData = new FormData();
      formData.append('product_id', this.strAsArray[2]);
      this.http.post<any>(url, formData, options).subscribe((res: any) => {
        console.log(res);
        this.product=res.data.products;
        this.productImage=res.data.products.productImage;
        this.ratings=res.data.ratings;
        this.related=res.data.related;
        this.sellerinfo=res.data.sellerinfo;
        this.verients=res.data.verients;
        console.log(this.product);
      },(err: any) => {
          this.notifyService.showWarning("Somthing went wrong !!!!", "")
        }  
      
      );

    } else {


    }
    // console.log();
  }


}
