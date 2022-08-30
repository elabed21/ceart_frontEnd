import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../services/shoppingCart.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: any[];
  cartItemsSub: any;
  totalAmmount: any;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) {
    this.cartItems = [];
    this.cartItemsSub = this.shoppingCartService.getProducts().subscribe(data => {
      this.cartItems = data;
      this.totalAmmount = this.shoppingCartService.getTotalPrice();
    });
  }

  ngOnInit() {
  }

  // Remove item from cart list
  removeItemFromCart(productId: any) {
    this.shoppingCartService.removeProductFromCart(productId);
  }

  emptyCart() {
    this.shoppingCartService.emptryCart();
  }

  saveShopList(cartItems: any[], totalAmmount: any) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalAmmount', totalAmmount.toString());
  }
}
