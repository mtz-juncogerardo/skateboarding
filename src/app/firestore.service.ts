import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
    return this.firestore.collection(document).valueChanges();
  }
  // Actualiza un Producto
  public updateProduct(documentId: string, data: any, document: string) {
    return this.firestore.collection(document).doc(documentId).set(data);
  }
}
