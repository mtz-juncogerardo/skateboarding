import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeroComponent } from './inicio/hero/hero.component';
import { FeaturedComponent } from './inicio/featured/featured.component';
import { ShopBannerComponent } from './inicio/shop-banner/shop-banner.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LabelComponent } from './label/label.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HeroComponent,
    FeaturedComponent,
    ShopBannerComponent,
    FooterComponent,
    InicioComponent,
    TiendaComponent,
    ContactoComponent,
    NosotrosComponent,
    SignInComponent,
    CarritoComponent,
    LabelComponent,
    RegisterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
