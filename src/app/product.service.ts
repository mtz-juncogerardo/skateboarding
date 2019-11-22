import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  tablas: any = [];
  ruedas: any = [];
  trucks: any = [];
  elevadores: any = [];
  tornillos: any = [];
  gorras: any = [];
  tennis: any = [];

  constructor(private firestore: AngularFirestore) { }

  getFeatured() {
    return this.firestore.collection('Featured').valueChanges();
  }

  getTablas() {
    return this.firestore.collection('Tablas').valueChanges();
  }

  getTrucks() {
    return this.firestore.collection('Trucks').valueChanges();
  }

  getRuedas() {
    return this.firestore.collection('Ruedas').valueChanges();
  }

  getTornillos() {
    return this.firestore.collection('Tornillos').valueChanges();
  }

  getElevadores() {
    return this.firestore.collection('Elevadores').valueChanges();
  }

  getTennis() {
    return this.firestore.collection('Tennis').valueChanges();
  }

  getGorras() {
    return this.firestore.collection('Gorras').valueChanges();
  }

  getCeras() {
    return this.firestore.collection('Ceras').valueChanges();
  }

  // -----Get individual Products-----
  getProductTabla(id: any) {
    console.log('ID:', id);
    this.getTablas().subscribe(data => {
      this.tablas = data;
      this.tablas.forEach(item => {
        if (id === item.id) {
          return true;
        }
      });
      return false;
    });



  }

  getProductRueda(id: any) {
    this.getRuedas().subscribe(data => {
      this.ruedas = data;
    });

    this.ruedas.forEach(item => {
      if (id === item.id) {
        return true;
      }
    });

    return false;
  }

  getProductTornillo(id: any) {
    this.getTornillos().subscribe(data => {
      this.tornillos = data;
    });

    this.tornillos.forEach(item => {
      if (id === item.id) {
        return true;
      }
    });

    return false;
  }

  getProductElevador(id: any) {
    this.getElevadores().subscribe(data => {
      this.elevadores = data;
    });

    this.elevadores.forEach(item => {
      if (id === item.id) {
        return true;
      }
    });

    return false;
  }

  getProductTruck(id: any) {
    this.getTrucks().subscribe(data => {
      this.trucks = data;
    });

    this.trucks.forEach(item => {
      if (id === item.id) {
        return true;
      }
    });

    return false;
  }

  getProductGorra(id: any) {
    this.getGorras().subscribe(data => {
      this.gorras = data;
    });

    this.gorras.forEach(item => {
      if (id === item.id) {
        return true;
      }
    });

    return false;
  }

  getProductTennis(id: any) {
    this.getTennis().subscribe(data => {
      this.tennis = data;
    });

    this.tennis.forEach(item => {
      if (id === item.id) {
        return true;
      }
    });

    return false;
  }






}




