import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../user.model';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData: User = {
    name: '',
    direction: '',
    city: '',
    municipio: '',
    cp: '',
    phone: '',
    email: '',
  };
  password = '';
  rePass = '';
  authError = '';

  routeName = 'Iniciar Sesión / Registrarse';
  infoText = [];
  db: any;

  constructor(private authService: AuthService, private afs: AngularFirestore) {
  }

  registerUser() {
    this.infoText = [];
    this.checkForm();

    if (this.infoText.length === 0) {
      this.authService.createUser(this.userData, this.password);
    }


  }

  checkForm() {
    if (!this.userData.name) {
      this.infoText.push('**Falta el Nombre');
    }
    if (!this.userData.direction) {
      this.infoText.push('**Falta la dirección');
    }
    if (!this.userData.city) {
      this.infoText.push('**Falta la ciudad');
    }
    if (!this.userData.municipio) {
      this.infoText.push('**Falta el municipio');
    }
    if (!this.userData.cp) {
      this.infoText.push('**Falta el codigo postal');
    }
    if (!this.userData.phone) {
      this.infoText.push('**Falta el numero de telefono');
    }
    if (!this.userData.email) {
      this.infoText.push('**Falta el email');
    }

    if (this.password !== this.rePass) {
      this.infoText.push('**Las contraseñas no coinciden');
    }

    if (this.password.length < 7) {
      this.infoText.push('**La contraseña debe ser de 8 caracteres mínimo');
    }

    if(this.authError) {
      this.infoText.push(this.authError);
    }
  }

  ngOnInit() {

    this.authService.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

}
