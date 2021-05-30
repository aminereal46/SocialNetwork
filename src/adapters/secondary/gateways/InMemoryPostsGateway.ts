import {PostsGateway} from "../../../coreLogic/gateways/postsGateway.interface";
import {Post} from "../../../coreLogic/models/Post";
import {User} from "../../../coreLogic/models/User";

export default class InMemoryPostsGateway implements PostsGateway {

    private readonly _posts: Post[];
    private readonly _users: User[];

    constructor() {
        this._posts = [
            new Post(1, 'title1', 'body1', 1),
            new Post(2, 'title2', 'body2', 2),
        ];
        this._users = [
            new User(1, 'user 1', 'username1', 'user1@gmail.com'),
            new User(2, 'user 2', 'username2', 'user2@gmail.com'),
        ];
    }

    get = () => {
        return this._posts;
    }

    getUsers = () => {
        return this._users;
    }
}