import { UserService } from '../services/user.services';
import { Component, EventEmitter, Output } from "@angular/core";
import { User } from '../classes/user.class';

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.css"]
})

export class UsersComponent {
    title = 'Users';
    caption = "Users list is a array of User objects";
    public users: User[] = [];
    @Output() updateUser = new EventEmitter<User>();

    constructor(private service: UserService) {

    }
    ngOnInit(): void {
        this.users = this.service.getUsers();
    }
    onDeleteUser(user: User) {
        this.service.deleteUser(user);
    }
    onSelectUser(user: User) {
        this.updateUser.emit(Object.assign({},user) );
    }
}