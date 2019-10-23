import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  routeName = 'Tienda';
  categorias = ['Tablas', 'Trucks', 'Ruedas', 'Tornillos', 'Elevadores'];

  constructor() { }

  ngOnInit() {
  }

}
