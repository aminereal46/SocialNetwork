import {PostsGateway} from "../../../coreLogic/gateways/postsGateway.interface";
import client from "./config";
import {Post} from "../../../coreLogic/models/Post";
import {User} from "../../../coreLogic/models/User";


export default class ApiPostsGateway implements PostsGateway {


    get = async () => {
        const {data: posts} = await client.get('/posts');

        return posts.map((post: any) => {
            return new Post(post.id, post.title, post.body, post.userId)
        })
    }

    getUsers = async () => {

        const {data: users} = await client.get('/users');

        return users.map((user: any) => {
            return new User(user.id, user.name, user.username, user.email)
        })
    }
}