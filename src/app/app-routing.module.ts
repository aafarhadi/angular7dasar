import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListprodukComponent } from './listproduk/listproduk.component';
import { DetailprodukComponent } from './detailproduk/detailproduk.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listproduk', component: ListprodukComponent },
  { path: 'detailproduk/:permalink', component: DetailprodukComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, LoginComponent, ListprodukComponent, DetailprodukComponent]