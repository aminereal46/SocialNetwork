import {CommentsGateway} from "../../../coreLogic/gateways/commentsGateway.interface";
import client from "./config";
import {Comment} from "../../../coreLogic/models/Comment";

export default class ApiCommentsGateway implements CommentsGateway {


    get = async (postId: number) => {
        const {data: comments} = await client.get(`/comments?postId=${postId}`);
        return comments.map((comment: any) => {
            return new Comment(comment.id, comment.name, comment.email, comment.body)
        })
    }
}