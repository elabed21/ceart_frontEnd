import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import {DataService} from "./services/data.service";
import {ApiHelperService} from "./services/api.helper.service";
import {ErrorHandlerService} from "./services/error.handler.service";
import {ExtraServiceService} from "./services/extra-service.service";
import {ObjectService} from "./services/object.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {JwtInterceptor} from "./services/JwtInterceptor";
import {FilePondModule} from 'ngx-filepond';
import {MatIconModule} from "@angular/material/icon";
import {ShoppingCartService} from "./services/shoppingCart.service";
import {ShoppingCartComponent} from './shared/shopping-cart/shopping-cart.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FactureComponent} from "./modules/panier/facture/facture.component";

@NgModule({
  declarations: [
    AppComponent,
    FactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FilePondModule,
    MatIconModule,
    MatDialogModule,

  ],
  providers: [
    DataService,
    ApiHelperService,
    ErrorHandlerService,
    ExtraServiceService,
    ObjectService,
    //{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    ShoppingCartService,

  ],
  bootstrap: [AppComponent],
  entryComponents: [ShoppingCartComponent]
})
export class AppModule {
}
