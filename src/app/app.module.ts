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

@NgModule({
  declarations: [
    AppComponent,
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

  ],
  providers: [
    DataService,
    ApiHelperService,
    ErrorHandlerService,
    ExtraServiceService,
    ObjectService,
    //{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
