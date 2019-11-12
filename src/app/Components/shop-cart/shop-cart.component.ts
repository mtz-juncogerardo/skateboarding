import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../carrito.service';
import { Observable } from 'rxjs';
import { Product } from '../../product.model';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  routeName = 'Tienda / Carrito';
  products$: Observable<Product[]>;

  constructor(private carritoService: CarritoService) {
    this.products$ = this.carritoService.shopCart$;
  }

  removeProduct(idx){
    this.carritoService.removeProduct(idx);
  }



  ngOnInit() {
  }

}
