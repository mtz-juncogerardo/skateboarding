import { Component, OnInit} from '@angular/core';
import { CarritoService } from '../../carrito.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemCount$: Observable<number>;

  constructor(private carritoService: CarritoService) {
    this.itemCount$ = this.carritoService.shopCart$
    .pipe(map(products => products.length));
  }


  ngOnInit() {
  }

}
