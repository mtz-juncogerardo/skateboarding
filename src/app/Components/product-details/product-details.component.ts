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

  constructor(private carritoService: CarritoService,
              private route: ActivatedRoute,
              private productService: ProductService
  ) { }

  pushToCart() {
    this.carritoService.addToCart('item');
    console.log(this.carritoService.shopCart);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;

      if (this.productService.getProductTabla(id)) {
        const exactProduct = this.productService.getProductTabla(id);
        this.productDesc = exactProduct.description;
        this.productName = exactProduct.name;
        this.productImage1 = exactProduct.image1;
        this.productImage2 = exactProduct.image2;
        this.productPrice = exactProduct.price;
      } else if (this.productService.getProductRueda(id)) {
        const exactProduct = this.productService.getProductRueda(id);
        this.productDesc = exactProduct.description;
        this.productName = exactProduct.name;
        this.productImage1 = exactProduct.image1;
        this.productImage2 = exactProduct.image2;
        this.productPrice = exactProduct.price;
      } else if (this.productService.getProductTornillo(id)) {
        const exactProduct = this.productService.getProductTornillo(id);
        this.productDesc = exactProduct.description;
        this.productName = exactProduct.name;
        this.productImage1 = exactProduct.image1;
        this.productImage2 = exactProduct.image2;
        this.productPrice = exactProduct.price;
      } else if (this.productService.getProductElevador(id)) {
        const exactProduct = this.productService.getProductElevador(id);
        this.productDesc = exactProduct.description;
        this.productName = exactProduct.name;
        this.productImage1 = exactProduct.image1;
        this.productImage2 = exactProduct.image2;
        this.productPrice = exactProduct.price;
      } else if (this.productService.getProductTruck(id)) {
        const exactProduct = this.productService.getProductTruck(id);
        this.productDesc = exactProduct.description;
        this.productName = exactProduct.name;
        this.productImage1 = exactProduct.image1;
        this.productImage2 = exactProduct.image2;
        this.productPrice = exactProduct.price;
      }
    });
  }

}
