import { Component } from "@angular/core";

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.css"]
})

export class UsersComponent {
    title = 'Users';
    public users = [
        {
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
        },
    ];
}