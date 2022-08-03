import { Component } from '@angular/core';
import { User } from './classes/user.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ums';
  showDati : boolean = false;
  showDoc : boolean = false;
  userSelected: User = new User();
  
  updateUser(user: User) {
    this.showDati = true;
    this.userSelected = user;
  }

  newUser(){
    this.userSelected = new User();
    this.showDati = true;
  }

  showDocLink(){
    this.showDoc = true;
    this.showDati = false;
  }

  showDatiLink(){
    this.showDoc = false;
    this.showDati = true;
  }
}
