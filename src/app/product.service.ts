import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  baleros: any = [];

  constructor(private firestore: AngularFirestore) { }

  getFeatured() {
    return this.firestore.collection('Featured').valueChanges();
  }

  getTablas() {
    return this.firestore.collection('Tablas').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getTrucks() {
    return this.firestore.collection('Trucks').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getRuedas() {
    return this.firestore.collection('Ruedas').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getTornillos() {
    return this.firestore.collection('Tornillos').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getElevadores() {
    return this.firestore.collection('Elevadores').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getTennis() {
    return this.firestore.collection('Tennis').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getGorras() {
    return this.firestore.collection('Gorras').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getCeras() {
    return this.firestore.collection('Ceras').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getBaleros() {
    return this.firestore.collection('Baleros').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
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

  getProductBaleros(id: any) {
    console.log('ID:', id);
    this.getBaleros().subscribe(data => {
      this.baleros = data;
      this.baleros.forEach(item => {
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




