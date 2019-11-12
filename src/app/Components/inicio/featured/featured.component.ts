import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) {

    this.products = this.productService.getTablas().filter(item => item.id === '1' || item.id === '2' || item.id === '3');
   }

  ngOnInit() {
  }

}
