import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatBadgeModule,
    DragDropModule,
  ],

  exports: [
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent
  ]

})

export class SharedModule {
}
