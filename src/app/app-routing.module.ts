import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ShopCartComponent } from './Components/shop-cart/shop-cart.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: InicioComponent
  },
  {
    path: 'shop', component: TiendaComponent
  },
  {
    path: 'shop/:category', component: TiendaComponent
  },
  {
    path: 'contact', component: ContactoComponent
  },
  {
    path: 'about', component: NosotrosComponent
  },
  {
    path: 'signin', component: SignInComponent
  },
  {
    path: 'signin/register', component: RegisterComponent
  },
  {
    path: 'product/details', component: ProductDetailsComponent
  },
  {
    path: 'shop/cart', component: ShopCartComponent
  }
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
