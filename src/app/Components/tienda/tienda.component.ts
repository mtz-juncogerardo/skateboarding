import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  routeName = 'Tienda';
  productRender = [];
  trucks = false;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      const category = params.category;

      switch (category) {
        case 'tablas':
          this.trucks = false;
          this.productRender = [];
          this.productService.getTablas().forEach(item => {
            this.productRender.push(item);
          });
          break;
        case 'ruedas':
          this.trucks = false;
          this.productRender = [];
          this.productService.getRuedas().forEach(item => {
          this.productRender.push(item);
          });
          break;
        case 'trucks':
          this.trucks = true;
          this.productRender = [];
          this.productService.getTrucks().forEach(item => {
          this.productRender.push(item);
          });
          break;
        case 'tornillos':
          this.trucks = false;
          this.productRender = [];
          this.productService.getTornillos().forEach(item => {
            this.productRender.push(item);
          });
          break;
        case 'elevadores':
          this.trucks = false;
          this.productRender = [];
          this.productService.getElevadores().forEach(item => {
            this.productRender.push(item);
          });
          break;
          case 'tennis':
          this.trucks = false;
          this.productRender = [];
          this.productService.getTennis().forEach(item => {
            this.productRender.push(item);
          });
          break;
      }
    });
  }

}
