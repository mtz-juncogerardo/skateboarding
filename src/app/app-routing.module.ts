import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  {
    path: 'home', component: InicioComponent
  },
  {
    path: 'shop', component: TiendaComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
