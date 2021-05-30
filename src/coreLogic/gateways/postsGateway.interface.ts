import {Post} from "../models/Post";
import {User} from "../models/User";

export interface PostsGateway {
    get(): Promise<Post[]> | Post[];
    getUsers(): Promise<User[]> | User[];
}
