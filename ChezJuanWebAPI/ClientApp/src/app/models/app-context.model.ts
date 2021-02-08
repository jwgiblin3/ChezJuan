export class AppContext {
    user: User;
    isLoggedIn: boolean;
}

export class User {
    id: string;
    email: string;
    name: string;
    imageUrl: string;
 }