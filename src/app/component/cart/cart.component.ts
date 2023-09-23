import { Component } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  trash = faTrashCan;
  public product :any =[];
  public grandTotal : number = 0;


  constructor(private cartService:CartService){}

  ngOnInit():void{
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product = res;
      this.grandTotal =this.cartService.getTotal()
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAll();
  }
}
