import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public productList:any;
  constructor(private api :ApiServiceService,private cartService:CartService){ }
 
  ngOnInit():void{
    this.api.getProduct()
    .subscribe(res=>{
      this.productList =res;
      
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }
  addtocart(items:any){
    this.cartService.addToCart(items)
  }
}
