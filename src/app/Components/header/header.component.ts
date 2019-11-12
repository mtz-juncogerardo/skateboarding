import { Component, OnInit} from '@angular/core';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemCount = 0;

  constructor(private carritoService: CarritoService) {
  }


  ngOnInit() {
    this.itemCount = this.carritoService.shopCart.length;
  }

}
