import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private products: Product[] = [];
  private shopCart = new BehaviorSubject<Product[]>([]);

  shopCart$ = this.shopCart.asObservable();

  constructor() { }

  addToCart(product: Product) {
    this.products = [...this.products, product];
    this.shopCart.next(this.products);
  }

  removeProduct(idx, itemsNumber){
    this.products.splice(idx, itemsNumber);
    console.log(idx);
    this.shopCart.next(this.products);
  }
}
