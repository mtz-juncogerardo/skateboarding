import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  user: firebase.User;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getUserState()
    .subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

}
