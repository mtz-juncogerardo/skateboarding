import { Component, OnInit } from '@angular/core';
import { FirestoreService} from '../firestore.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  id: any;
  name: any;
  price: number;
  description: any;
  image1: any;
  image2: any;
  medida: any;
  extras: any;
  cat: any;

  constructor(private firestore: FirestoreService, private route: Router) { }

  addProduct() {
    const product = {
      id: this.id,
      name: this.name,
      price: this.price,
      description: this.description,
      image1: this.image1,
      image2: this.image2,
      medida: this.medida,
      extras: this.extras
    };

    this.firestore.createProduct(product, this.cat)
    .then(res => this.route.navigate(['/administrador/ruben']));
  }

  ngOnInit() {
  }

}
