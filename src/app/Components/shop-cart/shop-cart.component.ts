import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  routeName: string ="Tienda / Carrito"

  constructor() { }

  ngOnInit() {
  }

}
