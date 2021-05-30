import {Post} from "./Post";

export class User {
    private _posts: Post[] = [];

    constructor(private _id: number, private _name: string, private _username: string, private _email: string) {
    }


    get posts(): Post[] {
        return this._posts;
    }

    set posts(value: Post[]) {
        this._posts = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    serialize() {
        return {
            id: this._id,
            name: this._name,
            username: this._username,
            email: this._email,
            posts: this._posts,
        };
    }
}
