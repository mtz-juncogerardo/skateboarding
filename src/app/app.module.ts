import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavbarComponent } from './Components/header/navbar/navbar.component';
import { HeroComponent } from './Components/inicio/hero/hero.component';
import { FeaturedComponent } from './Components/inicio/featured/featured.component';
import { ShopBannerComponent } from './Components/inicio/shop-banner/shop-banner.component';
import { FooterComponent } from './Components/footer/footer.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { LabelComponent } from './Components/label/label.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ShopCartComponent } from './Components/shop-cart/shop-cart.component';

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
    LabelComponent,
    RegisterComponent,
    ProductDetailsComponent,
    ShopCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
