import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {


  public cartItemList:any=[];
  public productList = new BehaviorSubject<any>([]);


  constructor() { }

  getProduct(){
    return this.productList.asObservable();
  }
  setProduct(products:any){
    this.cartItemList.push(...products);
    this.productList.next(products);
  }
  addToCart(products:any){
    this.cartItemList.push(products);
    this.productList.next(this.cartItemList);
    this.getTotal()
    console.log(this.cartItemList)
  }
  getTotal():number{
    let grandTotal:any = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(products:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(products.id === a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAll(){
    this.cartItemList = []
    this.productList.next(this.cartItemList)
  }
}
