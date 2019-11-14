import { Component, OnInit} from '@angular/core';
import { CarritoService } from '../../carrito.service';
import { AuthService } from '../../auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: firebase.User;
  itemCount$: Observable<number>;

  constructor(private carritoService: CarritoService, private authService: AuthService) {
    this.itemCount$ = this.carritoService.shopCart$
    .pipe(map(products => products.length));
  }

  logout() {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.getUserState()
    .subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

}
