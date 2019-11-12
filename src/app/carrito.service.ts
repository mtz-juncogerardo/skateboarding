import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  shopCart = [];

  constructor() { }

  addToCart(item) {
    this.shopCart.push(item);
  }
}
