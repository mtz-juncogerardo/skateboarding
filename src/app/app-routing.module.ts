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
import { AdministratorComponent } from './Components/administrator/administrator.component';
import { AddProductComponent } from './Components/add-product/add-product.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'administrador', component: AdministratorComponent
  },
  {
    path: 'add/product', component: AddProductComponent
  },
  {
    path: 'home', component: InicioComponent
  },
  {
    path: 'shop', redirectTo: '/shop/tablas', pathMatch: 'full'
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
    path: 'product/:id', component: ProductDetailsComponent
  },
  {
    path: 'cart', component: ShopCartComponent
  }
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})


export class AppRoutingModule { }
