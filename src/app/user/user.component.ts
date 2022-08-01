import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/user.class';
import { UserService } from '../services/user.services';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User | undefined
  @Output('onDeleteUser') userDeleted = new EventEmitter()
  @Output('onSelectUser') onSelectUser = new EventEmitter()
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }
  editUser() {
    this.onSelectUser.emit(this.user);
  }

}
