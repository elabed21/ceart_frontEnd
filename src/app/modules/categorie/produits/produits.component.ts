import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../models/product.model";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  products: any;

  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit(): void {
    this.getProduct(1);
  }

  getProduct(page: any): any {
    // @ts-ignore
    this.dataService.getCollection(new ProductModel(), '?page=' + page)
      .pipe()
      .subscribe(
        (response: any) => {
          if (response) {
            this.products = response;
          }
        }, (error) => {

        });
  }

}
