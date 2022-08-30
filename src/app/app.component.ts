import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "./services/shoppingCart.service";
import {ProductModel} from "./models/product.model";
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'finalCreart';
  products: any = [];


  constructor(
    private shoppingCartService: ShoppingCartService,
    private dataService: DataService,

  ) {
  }

  ngOnInit() {
    // Get all product list on component init
    //this.getProducts();
  }

  getProducts() {
    // @ts-ignore
    this.dataService.getCollection(new ProductModel(), '/all')
      .pipe()
      .subscribe(
        (response: any) => {
          if (response) {
            this.products = response;
          }
        }, () => {

        });
  }
}
