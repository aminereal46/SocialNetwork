import {Comment} from "../models/Comment";

export interface CommentsGateway {
    get(postId: number): Promise<Comment[]> | Comment[];
}
