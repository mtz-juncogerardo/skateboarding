import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FirestoreService } from '../../firestore.service';
import { of, from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})

export class AdministratorComponent implements OnInit {

  user: firebase.User;
  userId: string;
  pedidos: any;
  userDatabase: any;
  tablas: any;
  ruedas: any;
  trucks: any;
  elevadores: any;
  tornillos: any;
  gorras: any;
  tennis: any;
  ceras: any;
  baleros: any;
  playeras: any;

  wantsDelete = false;


  constructor(private route: Router, private authService: AuthService, private firestore: FirestoreService) {
  }

  askConfirm() {
    if (this.wantsDelete) {
      this.wantsDelete = false;
    } else {
      this.wantsDelete = true;
    }
  }

  delete(id: string, category: string) {
    this.firestore.deleteProduct(id, category)
    .then(() => {
      console.log('Producto Eliminado');
      this.wantsDelete = false;
    });
  }


  ngOnInit() {
    this.authService.getUserState()
      .subscribe(user => {
        this.user = user;
        this.userId = user.uid;
      });

    this.firestore.getAllProducts('Pedidos').subscribe(data => {
      this.pedidos = data;
    });

    this.firestore.getAllProducts('Users').subscribe(data => {
      this.userDatabase = data;
    });

    this.firestore.getAllProducts('Tablas').subscribe(data => {
      this.tablas = data;
    });

    this.firestore.getAllProducts('Trucks').subscribe(data => {
      this.trucks = data;
    });

    this.firestore.getAllProducts('Ruedas').subscribe(data => {
      this.ruedas = data;
    });

    this.firestore.getAllProducts('Elevadores').subscribe(data => {
      this.elevadores = data;
    });

    this.firestore.getAllProducts('Tennis').subscribe(data => {
      this.tennis = data;
    });

    this.firestore.getAllProducts('Tornillos').subscribe(data => {
      this.tornillos = data;
    });

    this.firestore.getAllProducts('Gorras').subscribe(data => {
      this.gorras = data;
    });

    this.firestore.getAllProducts('Ceras').subscribe(data => {
      this.ceras = data;
    });

    this.firestore.getAllProducts('Baleros').subscribe(data => {
      this.baleros = data;
    });

    this.firestore.getAllProducts('Playeras').subscribe(data => {
      this.playeras = data;
    });


  }

}
