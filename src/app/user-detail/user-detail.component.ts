import { UserService } from './../services/user.services';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy!: User;
  private __user!: User;
  @Input() set user(user: User) {
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  };

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

    
  saveUser(user: User) {
    if(user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
  }

  resetForm() {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }

  

}
