import { UserService } from '../services/user.services';
import { Component } from "@angular/core";
import { User } from '../interfaces/user.interface';

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.css"]
})

export class UsersComponent {
    title = 'Users';
    public users: User[] = [];

    constructor(private service: UserService) {

    }
    ngOnInit(): void {
        this.users = this.service.getUsers();
    }
    onDeleteUser(user: User) {
        this.service.deleteUser(user);
    }
}