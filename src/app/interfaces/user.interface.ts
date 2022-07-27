export interface User {
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

}