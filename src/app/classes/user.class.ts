import { UserInterface } from './../interfaces/user.interface';
export class User implements UserInterface{
    id: number;
    name: string;
    lastname: string;
    email: string;
    city: string;
    phone: string;
    age: number;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    }

    constructor() {
        this.id = 0;
        this.name = '';
        this.lastname = '';
        this.email = '';
        this.city = '';
        this.phone = '';
        this.age = 0;
        this.picture = {
            large: '',
            medium: '',
            thumbnail: ''
        }
    }
}