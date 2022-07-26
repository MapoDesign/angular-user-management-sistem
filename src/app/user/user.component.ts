import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from './../user.services';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user: any
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.userService.deleteUser(this.user);
  }

}
