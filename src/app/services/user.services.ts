import { Injectable } from "@angular/core";
import { User } from "../classes/user.class";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users: Array<User> = [
        {
            id: 1,
            name: 'Jennie',
            lastname: 'Nichols',
            email: 'jennie.nichols@example.com',
            city: 'Milesport',
            phone: '+94 1-292-667-3921',
            age: 30,
            picture: {
                large: "https://randomuser.me/api/portraits/women/75.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg"
            },
        },
        {
            id: 2,
            name: 'Cordell',
            lastname: 'Rippin',
            email: 'cordell.rippin@email.com',
            city: 'Marksborough',
            phone: '+260 176-134-2870',
            age: 40,
            picture: {
                large: "https://randomuser.me/api/portraits/men/75.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
        },
        {
            id: 3,
            name: 'Erika',
            lastname: 'Cassin',
            email: 'erika.cassin@email.com',
            city: 'Kozeyfort',
            phone: '+258 (199) 380-3101',
            age: 35,
            picture: {
                large: "https://randomuser.me/api/portraits/women/91.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/91.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/91.jpg"
            },
        },
        {
            id: 4,
            name: 'Sherly',
            lastname: 'Considine',
            email: 'sherly.considine@email.com',
            city: 'New Annett',
            phone: '+268 838.143.5457',
            age: 24,
            picture: {
                large: "https://randomuser.me/api/portraits/women/73.jpg",
                medium: "https://randomuser.me/api/portraits/women/men/73.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg"
            },
        },
        {
            id: 5,
            name: 'Ferdinand',
            lastname: 'Brakus',
            email: 'ferdinand.brakus@email.com',
            city: 'East Jaime',
            phone: '+223 1-485-063-4034',
            age: 33,
            picture: {
                large: "https://randomuser.me/api/portraits/men/73.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg"
            },
        },
        {
            id: 6,
            name: 'Buford',
            lastname: 'Kuhn',
            email: 'buford.kuhn@email.com',
            city: 'East Elenor',
            phone: '+27 981-017-8610',
            age: 38,
            picture: {
                large: "https://randomuser.me/api/portraits/men/12.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"
            },
        }
    ];

    getUsers() {

        return this.users;
    }
    deleteUser(user: User) {
        const index = this.users.indexOf(user);
        if (index > -1) {
            this.users.splice(index, 1);
        }
    }
    updateUser(user: User) {
        const index = this.users.findIndex((v)=>v.id === user.id);
        alert(index);
        if (index > -1) {
            this.users[index] = {...user};
        }
    }

    createUser(user: User) {
        this.users.splice(0, 0, user);
      }

}