import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  // Crea un nuevo Producto
  public createProduct(data: Product, document: string) {
    return this.firestore.collection(document).add(data);
  }
  // Obtiene un Producto
  public getOneProduct(documentId: string, document: string) {
    return this.firestore.collection(document).doc(documentId).valueChanges();
  }
  // Obtiene todos los Productos
  public getAllProducts(document: string) {
    return this.firestore.collection(document).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  // Actualiza un Producto
  public updateProduct(documentId: string, data: any, document: string) {
    return this.firestore.collection(document).doc(documentId).set(data);
  }

  public deleteProduct(id: string, category: string) {
    return this.firestore.doc(`${category}/${id}`).delete();
  }

}
