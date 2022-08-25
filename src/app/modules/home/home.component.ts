import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {DataService} from "../../services/data.service";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  ,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: any;


//ajout dynamique des images pour caroussel
  /*data = [
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg", title: "Slide 1" },
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg", title: "Slide 2" },
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg", title: "Slide 3" }
  ];*/


  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit() {
    $.getScript('assets/js/strip.pkgd.min.js');
    $.getScript('assets/js/main.min.js');
    $.getScript('assets/js/script.js');

  }


}
