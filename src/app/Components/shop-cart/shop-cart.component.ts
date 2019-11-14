import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CarritoService } from '../../carrito.service';
import { Observable } from 'rxjs';
import { Product } from '../../product.model';
import { async } from 'q';

declare var paypal;
@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  @ViewChild('paypal', {static: true}) paypalElement: ElementRef;
  routeName = 'Tienda / Carrito';
  shopCart: Product[];
  total: number;
  paidFor = false;

  constructor(private carritoService: CarritoService) {

    this.carritoService.shopCart$.subscribe(data => {
      this.shopCart = data;

      this.getTotal();
    });
  }

  getTotal() {
    const totalPrice = [];
    for (const item of this.shopCart) {
      totalPrice.push(item.price);
    }

    this.total = totalPrice.reduce((a, b) => a + b , 0);
  }

  removeProduct(idx){
    this.carritoService.removeProduct(idx);
    this.getTotal();
  }

  paypalOrder() {
    const order = [];
    this.shopCart.forEach(item =>{

      order.push(
        {
          description: item.description,
          amount: {
            currency_code: 'MXN',
            value: item.price,
          }
        }
        );
    });

    return order;
  }



  ngOnInit() {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: this.paypalOrder()
        });
      },
      onApprove: async(data, actions) => {
        const order = await actions.order.capture();
        this.paidFor = true;
        console.log(order);
      },
      onError: err => console.log(err)

    })
    .render(this.paypalElement.nativeElement);
  }

}
