import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { CategorieComponent } from './modules/categorie/categorie.component';
import { ProduitsComponent } from './modules/categorie/produits/produits.component';
import { AbonnementComponent } from './modules/home/abonnement/abonnement.component';
import { HomeComponent } from './modules/home/home.component';
import { FactureComponent } from './modules/panier/facture/facture.component';
import { PanierComponent } from './modules/panier/panier.component';
import { ProductDetailComponent } from './modules/profil/product-detail/product-detail.component';
import { ProfilComponent } from './modules/profil/profil.component';
import { SignupComponent } from './modules/signup/signup.component';

const routes: Routes = [
  {
    path:'',component: LayoutsComponent,
    
     children: [{ path:'',component:HomeComponent},
                { path:'profil',component:ProfilComponent},
                {path:'profil/detail',component:ProductDetailComponent},
                {path:'profil/abonnement',component:AbonnementComponent},
                {path:'cart',component:PanierComponent},
                {path:'cart/checkout',component:FactureComponent},
                {path:'categorie',component:CategorieComponent},
                {path:'produits',component:ProduitsComponent},
                {path:'signup',component:SignupComponent},



                ], 
  },

 {
    path:'**',
    redirectTo:''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
