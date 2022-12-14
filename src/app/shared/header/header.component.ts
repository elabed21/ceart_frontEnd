import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryModel} from "../../models/category.model";
import {DataService} from "../../services/data.service";
import {environment} from "../../../environments/environment";
import {MatDialog} from '@angular/material/dialog';
import {ShoppingCartService} from "../../services/shoppingCart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  FRONT_END_URL = environment.frontEndUrl;
  categories: any;

  constructor(
    private router: Router,
    private dataService: DataService,
    private dialog: MatDialog,
    private shoppingCartService: ShoppingCartService,
  ) {
  }


  ngOnInit(): void {
    this.getAllCategories();
  }


  getAllCategories(): void {
// @ts-ignore
    this.dataService.getCollection(new CategoryModel(), '/all')
      .pipe()
      .subscribe(
        (response: any) => {
          if (response) {
            this.categories = response;
          }
        });
  }

  getShopItemNumber(): number {
    return this.shoppingCartService.getProductsLength();
  }
}



