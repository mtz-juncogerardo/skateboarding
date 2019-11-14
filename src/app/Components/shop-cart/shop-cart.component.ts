import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../carrito.service';
import { Observable } from 'rxjs';
import { Product } from '../../product.model';
import { async } from 'q';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  routeName = 'Tienda / Carrito';
  shopCart: Product[];
  total: number;

  constructor(private carritoService: CarritoService) {
    const totalPrice = [];

    this.carritoService.shopCart$.subscribe(data => {
      this.shopCart = data;
    });

    for (const item of this.shopCart) {
      console.log(item.price);
      totalPrice.push(item.price);
    }

    this.total = totalPrice.reduce((a, b) => a + b , 0);

  }



  removeProduct(idx){
    this.carritoService.removeProduct(idx);
  }



  ngOnInit() {
  }

}
