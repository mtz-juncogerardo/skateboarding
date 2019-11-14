import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  signupForm: FormGroup;

  routeName = 'Contacto';
  formConfirmation = '';

  constructor(private builder: FormBuilder, private apiService: ApiService) {

    this.signupForm = this.builder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      telefono: [''],
      mensaje: ['']

    });
  }

  enviar(values: object) {
    this.apiService.postForm('http://157.245.15.242/api/send', values)
    .subscribe((res) =>{
      console.log(res);
      alert('Datos enviados Correctamente');
    }, (err) => {
      console.log(err);
      alert('ERROR por favor intenta nuevamente o utiliza otro medio de contacto');
    });
  }

  ngOnInit() {

    const whatsappLink = document.getElementById('whatsapp');

    const width = screen.width;
    // tslint:disable-next-line: max-line-length
    const link = 'https://wa.me/524423867262?text=Hola%20vengo%20de%20la%20tienda%20de%20skateboards,%20me%20interesa%20ponerme%20en%20contacto%20con%20ustedes.';

    if (width < 769) {
      whatsappLink.setAttribute('href', link);
    }

  }

}
