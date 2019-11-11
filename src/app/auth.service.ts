import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
  }

  createUser(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
       }


  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
