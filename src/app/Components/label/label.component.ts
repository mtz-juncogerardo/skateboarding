import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  @Input() routeName: string;
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
