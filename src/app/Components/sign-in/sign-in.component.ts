import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  routeName = 'Iniciar Sesión';
  email = '';
  password = '';
  authError: any;

  constructor(private authService: AuthService) {
  }

  sendSignData() {
    this.authService.login(this.password, this.email);
  }

  ngOnInit() {
    this.authService.eventAuthError$.subscribe(data =>{
      this.authError = data;
      console.log(this.authError);
    });
  }

}
