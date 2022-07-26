import { UserService } from './../user.services';
import { Component } from "@angular/core";

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.css"]
})

export class UsersComponent {
    title = 'Users';
    public users: any[] = [];

    constructor(private service: UserService) {

    }
    ngOnInit(): void {
        this.users = this.service.getUsers();
    }
    onDeleteUser(user: any) {
        this.service.deleteUser(user);
    }
}