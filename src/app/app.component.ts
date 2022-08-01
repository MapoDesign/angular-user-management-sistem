import { Component } from '@angular/core';
import { User } from './classes/user.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ums';
  showForm : boolean = false;
  userSelected: User = new User();
  
  updateUser(user: User) {
    this.showForm = true;
    this.userSelected = user;
  }

  newUser(){
    this.userSelected = new User();
    this.showForm = true;
  }
}
