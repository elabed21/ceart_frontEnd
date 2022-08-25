import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from '../modules/home/home.component';
import { RouterModule } from '@angular/router';
import { ProfilComponent } from '../modules/profil/profil.component';
import { SharedModule } from '../shared/shared.module';
import { PanierComponent } from '../modules/panier/panier.component';
import { CategorieComponent } from '../modules/categorie/categorie.component';
import { SignupComponent } from '../modules/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProduitsComponent } from '../modules/categorie/produits/produits.component';



@NgModule({
  declarations: [
    LayoutsComponent,
    HomeComponent,
    ProfilComponent,
    PanierComponent,
    CategorieComponent,
    SignupComponent,
    ProduitsComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,],

})
export class LayoutsModule { }
