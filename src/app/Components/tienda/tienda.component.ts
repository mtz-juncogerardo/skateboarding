import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  loading = true;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
  }

  async onLoad() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    },1000);
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      const category = params.category;

      switch (category) {
        case 'tablas':
          this.trucks = false;
          this.productRender = [];
          this.productService.getTablas().subscribe(data => {
            data.forEach(item => {
              this.productRender.push(item);
            });
          });
          break;
        case 'ruedas':
          this.trucks = false;
          this.productRender = [];
          this.productService.getRuedas().subscribe(data => {
            data.forEach(item => {
              this.productRender.push(item);
            });
          });
          break;
        case 'trucks':
          this.trucks = true;
          this.productRender = [];
          this.productService.getTrucks().subscribe(data => {
            data.forEach(item => {
              this.productRender.push(item);
            });
          });
          break;
        case 'tornillos':
          this.trucks = false;
          this.productRender = [];
          this.productService.getTornillos().subscribe(data => {
            data.forEach(item => {
              this.productRender.push(item);
            });
          });
          break;
        case 'elevadores':
          this.trucks = false;
          this.productRender = [];
          this.productService.getElevadores().subscribe(data => {
            data.forEach(item => {
              this.productRender.push(item);
            });
          });
          break;
        case 'tennis':
          this.trucks = false;
          this.productRender = [];
          this.productService.getTennis().subscribe(data => {
            data.forEach(item => {
              this.productRender.push(item);
            });
          });
          break;
        case 'gorras':
          this.trucks = false;
          this.productRender = [];
          this.productService.getGorras().subscribe(data => {
            data.forEach(item => {
              this.productRender.push(item);
            });
          });
          break;
        case 'ceras':
          this.trucks = false;
          this.productRender = [];
          this.productService.getCeras().subscribe(data => {
            data.forEach(item => {
              this.productRender.push(item);
            });
          });
          break;
          case 'baleros':
          this.trucks = false;
          this.productRender = [];
          this.productService.getBaleros().subscribe(data => {
            data.forEach(item => {
              this.productRender.push(item);
            });
          });
          break;
          case 'playeras':
          this.trucks = false;
          this.productRender = [];
          this.productService.getPlayeras().subscribe(data => {
            data.forEach(item =>{
              this.productRender.push(item);
            });
          });
      }
    });
  }

}
