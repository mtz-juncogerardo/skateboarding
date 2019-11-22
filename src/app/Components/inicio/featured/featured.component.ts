import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  featured: any;

  constructor(private productService: ProductService) {

    this.productService.getFeatured().subscribe(data => {
      this.featured = data;
    });

   }

  ngOnInit() {
  }

}
