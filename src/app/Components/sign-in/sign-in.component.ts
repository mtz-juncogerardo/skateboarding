import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  routeName = 'Iniciar Sesión';
  email = '';
  password = '';

  constructor(private signIn: AngularFireAuth) {
  }

  sendSignData() {
    this.signIn.auth.signInWithEmailAndPassword(this.email, this.password);
  }

  ngOnInit() {
  }

}
