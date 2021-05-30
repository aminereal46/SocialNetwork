export class Post {
    private _comments: number[] = [];

    constructor(private _id: number, private _title: string, private _body: string, private _userId: number) {
    }

    get userId(): number {
        return this._userId;
    }

    set userId(value: number) {
        this._userId = value;
    }

    get comments(): number[] {
        return this._comments;
    }

    set comments(value: number[]) {
        this._comments = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
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
            title: this._title,
            body: this._body,
            userId: this._userId,
            comments: this._comments,
        };
    }
}
