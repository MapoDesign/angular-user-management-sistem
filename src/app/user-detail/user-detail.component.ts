import { UserService } from './../services/user.services';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user!: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

    
  saveUser(user: User) {
    if(user.id > 0) {
      this.userService.updateUser(this.user);
    }
  }

}
