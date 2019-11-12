import { Component, OnInit, Output } from '@angular/core';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDesc = 'Inserte Descripción';
  productName = 'Product Title';

  constructor(private carritoService: CarritoService) { }

  pushToCart() {
    this.carritoService.addToCart('item');
    console.log(this.carritoService.shopCart);
  }

  ngOnInit() {
  }

}
