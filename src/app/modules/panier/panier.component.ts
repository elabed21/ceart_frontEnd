import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {ShoppingCartService} from "../../services/shoppingCart.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  cartItems: any;
  totalAmmount: number;
  quantity: any;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.cartItems = this.router.getCurrentNavigation()?.extras.state?.cartItems;
    this.totalAmmount = this.router.getCurrentNavigation()?.extras.state?.totalAmmount;
    if(!this.cartItems || !this.totalAmmount ){
      this.cartItems = JSON.parse(<string>localStorage.getItem('cartItems'));
      this.totalAmmount = JSON.parse(<string>localStorage.getItem('totalAmmount'));
    }
  }

  ngOnInit(): void {
    $.getScript('assets/js/userincr.js');
    $.getScript('assets/js/main.min.js');
    $.getScript('assets/js/script.js');


  }

  // Remove item from cart list

  removeItemFromCart(productId: any) {
    /* this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    this.mySharedService.setProducts(this.cartItems); */

    this.shoppingCartService.removeProductFromCart(productId);

  }

  emptyCart() {
    this.shoppingCartService.emptryCart();
  }

}
