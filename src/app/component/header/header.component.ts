import { Component } from '@angular/core';
import { faShippingFast,faSearch ,faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   shipment =faShippingFast;
   search =faSearch;
   facart = faCartPlus;
   

   public totalItem :number = 0;
   constructor (private cartService:CartService){ }

   ngOnInit():void{
    this.cartService.getProduct()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
   }
}
