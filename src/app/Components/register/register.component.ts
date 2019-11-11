import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


    name: string;
    direction: string;
    city: string;
    municipio: string;
    cp: number;
    phone: number;
    email: string;
    password = '';
    rePass = '';



  routeName = 'Iniciar Sesión / Registrarse';
  infoText = [];
  db: any;

  constructor(private authService: AuthService, private afs: AngularFirestore) {
  }

  registerUser() {
    this.infoText = [];
    this.checkForm();

    if (this.infoText.length === 0) {
      this.authService.createUser(this.email, this.password)
      .then(() => console.log('Auth Data Saved'))
      .catch((err) => this.infoText.push(err.message));

      this.db = this.afs.collection('users');
      this.db.add({
        name: this.name,
        direction: this.direction,
        city: this.city,
        municipio: this.municipio,
        cp: this.cp,
        phone: this.phone,
        email: this.email
      })
      .then(() => console.log('User Info Saved'));

    }


  }

  checkForm() {
    if (!this.name) {
      this.infoText.push('**Falta el Nombre');
    }
    if (!this.direction) {
      this.infoText.push('**Falta la dirección');
    }
    if (!this.city) {
      this.infoText.push('**Falta la ciudad');
    }
    if (!this.municipio) {
      this.infoText.push('**Falta el municipio');
    }
    if (!this.cp) {
      this.infoText.push('**Falta el codigo postal');
    }
    if (!this.phone) {
      this.infoText.push('**Falta el numero de telefono');
    }
    if (!this.email) {
      this.infoText.push('**Falta el email');
    }

    if (this.password !== this.rePass) {
      this.infoText.push('**Las contraseñas no coinciden');
    }

    if (this.password.length < 7) {
      this.infoText.push('**La contraseña debe ser de 8 caracteres mínimo');
    }
  }

  ngOnInit() {
  }

}
