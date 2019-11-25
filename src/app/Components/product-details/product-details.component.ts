import { Component, OnInit, Output } from '@angular/core';
import { CarritoService } from '../../carrito.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../product.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  tablas: any = [];
  ruedas: any = [];
  trucks: any = [];
  elevadores: any = [];
  tornillos: any = [];
  gorras: any = [];
  tennis: any = [];
  baleros: any = [];

  productDesc = '';
  productName = '';
  productPrice = 0;
  productImage1 = '';
  productImage2 = '';
  productSize = '';
  productExtra = '';
  id = '';
  isTrucks = false;
  isTablas = false;
  isRuedas = false;
  isTornillos = false;
  isElevadores = false;
  isTennis = false;
  isGorras = false;
  isBaleros = false;
  user: firebase.User;

  constructor(private carritoService: CarritoService,
              private route: ActivatedRoute,
              private productService: ProductService,
              private authService: AuthService
  ) { }


  pushToCart() {
    this.carritoService.addToCart({
      name: this.productName,
      id: this.id,
      description: this.productDesc,
      image1: this.productImage1,
      image2: this.productImage2,
      price: this.productPrice,
      medida: this.productSize,
      extras: this.productExtra
    });
  }

  ngOnInit() {
    this.authService.getUserState()
      .subscribe(user => {
        this.user = user;
      });

    this.route.params.subscribe((params: Params) => {
      this.isTablas = false;
      this.isRuedas = false;
      this.isTrucks = false;
      this.isElevadores = false;
      this.isTornillos = false;
      this.isGorras = false;
      this.isTennis = false;
      this.isBaleros = false;
      this.id = params.id;

      this.productService.getTablas().subscribe(data => {
        this.tablas = data;
        this.tablas.forEach(item => {

          if (this.id === item.id) {
            this.isTablas = true;
            this.productDesc = item.description;
            this.productName = item.name;
            this.productImage1 = item.image1;
            this.productImage2 = item.image2;
            this.productPrice = item.price;
            this.productExtra = item.extras;
            this.productSize = item.medida;
          }

        });
      });

      this.productService.getBaleros().subscribe(data => {
        this.baleros = data;
        this.baleros.forEach(item => {

          if (this.id === item.id) {
            this.isBaleros = true;
            this.productDesc = item.description;
            this.productName = item.name;
            this.productImage1 = item.image1;
            this.productImage2 = item.image2;
            this.productPrice = item.price;
            this.productExtra = item.extras;
            this.productSize = item.medida;
          }

        });
      });

      this.productService.getRuedas().subscribe(data => {
        this.ruedas = data;
        this.ruedas.forEach(item => {

          if (this.id === item.id) {
            this.isRuedas = true;
            this.productDesc = item.description;
            this.productName = item.name;
            this.productImage1 = item.image1;
            this.productImage2 = item.image2;
            this.productPrice = item.price;
            this.productExtra = item.extras;
            this.productSize = item.medida;

          }
        });
      });

      this.productService.getTornillos().subscribe(data => {
        this.tornillos = data;
        this.tornillos.forEach(item => {

          if (this.id === item.id) {
            this.isTornillos = true;
            this.productDesc = item.description;
            this.productName = item.name;
            this.productImage1 = item.image1;
            this.productImage2 = item.image2;
            this.productPrice = item.price;
            this.productExtra = item.extras;
            this.productSize = item.medida;

          }
        });
      });

      this.productService.getElevadores().subscribe(data => {
        this.elevadores = data;
        this.elevadores.forEach(item => {

          if (this.id === item.id) {
            this.isElevadores = true;
            this.productDesc = item.description;
            this.productName = item.name;
            this.productImage1 = item.image1;
            this.productImage2 = item.image2;
            this.productPrice = item.price;
            this.productExtra = item.extras;
            this.productSize = item.medida;

          }
        });
      });

      this.productService.getTrucks().subscribe(data => {
        this.trucks = data;
        this.trucks.forEach(item => {

          if (this.id === item.id) {
            this.isTrucks = true;
            this.productDesc = item.description;
            this.productName = item.name;
            this.productImage1 = item.image1;
            this.productImage2 = item.image2;
            this.productPrice = item.price;
            this.productExtra = item.extras;
            this.productSize = item.medida;

          }
        });
      });

      this.productService.getGorras().subscribe(data => {
        this.gorras = data;
        this.gorras.forEach(item => {

          if (this.id === item.id) {
            this.isGorras = true;
            this.productDesc = item.description;
            this.productName = item.name;
            this.productImage1 = item.image1;
            this.productImage2 = item.image2;
            this.productPrice = item.price;
            this.productExtra = item.extras;
            this.productSize = item.medida;

          }
        });
      });

      this.productService.getTennis().subscribe(data => {
        this.tennis = data;
        this.tennis.forEach(item => {

          if (this.id === item.id) {
            this.isTennis = true;
            this.productDesc = item.description;
            this.productName = item.name;
            this.productImage1 = item.image1;
            this.productImage2 = item.image2;
            this.productPrice = item.price;
            this.productExtra = item.extras;
            this.productSize = item.medida;
          }

        });
      });
    });
  }

}
