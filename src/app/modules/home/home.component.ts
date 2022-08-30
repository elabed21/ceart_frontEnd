import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {DataService} from "../../services/data.service";
import {ProductModel} from "../../models/product.model";
import {ShoppingCartService} from "../../services/shoppingCart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  ,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: any[];
  private singleProduct: any[];
  private isAdded: any[];

//ajout dynamique des images pour caroussel
  /*data = [
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg", title: "Slide 1" },
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg", title: "Slide 2" },
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg", title: "Slide 3" }
  ];*/


  constructor(
    private dataService: DataService,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit() {
    this.getProducts();

  }


  getProducts() {
    // @ts-ignore
    this.dataService.getCollection(new ProductModel(),'/all')
      .pipe()
      .subscribe(
        (response: any) => {
          if (response) {
            this.productList = response;
          }
        }, (error) => {

        });
  }

  addToCart(event : any, productId: number) :any{

    // If Item is already added then display alert message
    if (event.target.classList.contains('btn-success')) {
      alert('This product is already added into cart.');
      return false;
    }

    this.singleProduct = this.productList.filter((product: any) => {
      return product.id === productId;
    });

    // this.cartItems.push(this.singleProduct[0]);

    this.shoppingCartService.addProductToCart(this.singleProduct[0]);
  }

}
