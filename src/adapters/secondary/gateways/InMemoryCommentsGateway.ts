import {PostsGateway} from "../../../coreLogic/gateways/postsGateway.interface";
import {Post} from "../../../coreLogic/models/Post";
import {CommentsGateway} from "../../../coreLogic/gateways/commentsGateway.interface";
import {Comment} from "../../../coreLogic/models/Comment";

export default class InMemoryCommentsGateway implements CommentsGateway {

    private readonly _comments: Comment[];

    constructor() {
        this._comments = [
            new Comment(1, 'name1', 'user1@gmail.com', 'body Comment 1'),
            new Comment(2, 'name2', 'user2@gmail.com', 'body Comment 2'),
        ];
    }

    get = () => {
        return this._comments;
    }
}