import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CarritoService } from '../../carrito.service';
import { Product } from '../../product.model';
import { AuthService } from '../../auth.service';
import { FirestoreService } from '../../firestore.service';


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
  user: firebase.User;
  orderedProducts = [];

  constructor(private carritoService: CarritoService, private authService: AuthService, private firestore: FirestoreService) {

    this.carritoService.shopCart$.subscribe(data => {
      this.shopCart = data;

      this.getTotal();
    });

    this.authService.getUserState()
    .subscribe(user => {
      this.user = user;
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
    this.carritoService.removeProduct(idx, 1);
    this.getTotal();
  }

  paypalOrder() {
    const order = [];
    this.shopCart.forEach(item => {

      order.push(

        );
    });

    return order;
  }

  getOrderItems() {
    let counter = 0;
    this.shopCart.forEach(item => {
      this.orderedProducts[counter] = item.name;
      counter++;
    });
  }



  ngOnInit() {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{

              description: 'Compra en DChiripa Skate',
              amount: {
                currency_code: 'MXN',
                value: this.total,
              }
          }]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.paidFor = true;
        this.getOrderItems();
        this.firestore.createPedido({
          PedidoPor: this.user.email,
          Productos: this.orderedProducts
        }, 'PedidosHistory')
        .then(() => {
          this.authService.insertOrderInfo(this.user.uid, this.orderedProducts, this.user.email)
          .then( res => this.carritoService.removeProduct(0, this.shopCart.length));
        });


      },
      onError: err => console.log(err)

    })
    .render(this.paypalElement.nativeElement);
  }

}
