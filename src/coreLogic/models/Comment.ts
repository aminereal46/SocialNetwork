export class Comment {
    constructor(private _id: number, private _name: string, private _email: string, private _body: string) {
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

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }
    serialize() {
        return {
            id: this._id,
            name: this._name,
            email: this._email,
            body: this._body,
        };
    }


}
