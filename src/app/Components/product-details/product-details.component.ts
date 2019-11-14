import { Component, OnInit, Output } from '@angular/core';
import { CarritoService } from '../../carrito.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDesc = '';
  productName = '';
  productPrice = 0;
  productImage1 = '';
  productImage2 = '';
  productSize = '';
  productExtra = '';
  id = '';
  trucks = false;

  constructor(private carritoService: CarritoService,
              private route: ActivatedRoute,
              private productService: ProductService
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
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;

      if (this.productService.getProductTabla(this.id)) {
        const exactProduct = this.productService.getProductTabla(this.id);
        this.trucks = false;
        this.productDesc = exactProduct.description;
        this.productName = exactProduct.name;
        this.productImage1 = exactProduct.image1;
        this.productImage2 = exactProduct.image2;
        this.productPrice = exactProduct.price;
        this.productExtra = exactProduct.extras;
        this.productSize = exactProduct.medida;
      } else if (this.productService.getProductRueda(this.id)) {
        const exactProduct = this.productService.getProductRueda(this.id);
        this.trucks = false;
        this.productDesc = exactProduct.description;
        this.productName = exactProduct.name;
        this.productImage1 = exactProduct.image1;
        this.productImage2 = exactProduct.image2;
        this.productPrice = exactProduct.price;
        this.productExtra = exactProduct.extras;
        this.productSize = exactProduct.medida;
      } else if (this.productService.getProductTornillo(this.id)) {
        const exactProduct = this.productService.getProductTornillo(this.id);
        this.trucks = false;
        this.productDesc = exactProduct.description;
        this.productName = exactProduct.name;
        this.productImage1 = exactProduct.image1;
        this.productImage2 = exactProduct.image2;
        this.productPrice = exactProduct.price;
        this.productExtra = exactProduct.extras;
        this.productSize = exactProduct.medida;
      } else if (this.productService.getProductElevador(this.id)) {
        const exactProduct = this.productService.getProductElevador(this.id);
        this.trucks = false;
        this.productDesc = exactProduct.description;
        this.productName = exactProduct.name;
        this.productImage1 = exactProduct.image1;
        this.productImage2 = exactProduct.image2;
        this.productPrice = exactProduct.price;
        this.productExtra = exactProduct.extras;
        this.productSize = exactProduct.medida;
      } else if (this.productService.getProductTruck(this.id)) {
        const exactProduct = this.productService.getProductTruck(this.id);
        this.trucks = true;
        this.productDesc = exactProduct.description;
        this.productName = exactProduct.name;
        this.productImage1 = exactProduct.image1;
        this.productImage2 = exactProduct.image2;
        this.productPrice = exactProduct.price;
        this.productExtra = exactProduct.extras;
        this.productSize = exactProduct.medida;
      }
    });
  }

}
