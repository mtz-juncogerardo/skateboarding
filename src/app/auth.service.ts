import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from './user.model';

import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>('');
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: User;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
  }

  createUser(user: User, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, password)
      .then(userCredential => {
        this.newUser = user;

        userCredential.user.updateProfile({
          displayName: user.name,
        });

        this.insertUserData(userCredential)
          .then(() => this.router.navigate(['/home']));
      })
      .catch(error => this.eventAuthError.next(error));
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.afs.doc(`Users/${userCredential.user.uid}`).set(this.newUser);
  }

  insertOrderInfo(userID: string, product: any, correo: string) {
    return this.afs.doc(`Pedidos/${userID}`).set({
      email: correo,
      products: product
    });
  }

  async login(password: string, email: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        if (userCredential) {
          this.router.navigate(['/home']);
        }
      })
      .catch(error => {
        this.eventAuthError.next(error);
      });
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  getUserState() {
    return this.afAuth.authState;
  }
}
