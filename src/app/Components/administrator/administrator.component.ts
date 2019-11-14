import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})

export class AdministratorComponent implements OnInit {

  user: firebase.User;
  userId: string;

  constructor(private authService: AuthService) {
  }


  ngOnInit() {
    this.authService.getUserState()
    .subscribe(user => {
      this.user = user;
      this.userId = user.uid;
    });


  }

}


