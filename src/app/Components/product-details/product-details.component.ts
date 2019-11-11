import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Output() itemCount = [];
  productDesc = 'Inserte Descripción';
  productName = 'Product Title';

  constructor() { }

  addToCart() {
    this.itemCount.push(1);
  }

  ngOnInit() {
  }

}
