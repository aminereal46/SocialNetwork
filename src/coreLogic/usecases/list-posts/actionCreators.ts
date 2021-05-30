import {Post} from "../../models/Post";
import {User} from "../../models/User";


export const listPostsActions = {
    GET_POSTS: 'GET_POSTS',
    SET_POSTS: 'SET_POSTS',
    SET_USERS: 'SET_USERS',
    SET_SELECTED_USER: 'SET_SELECTED_USER',
}

export const listPostsActionsCreators = {
    getPost: () => ({type: listPostsActions.GET_POSTS}),
    setPost: (posts: Post[]) => ({type: listPostsActions.SET_POSTS, payload: {posts}}),
    setUsers: (users: User[]) => ({type: listPostsActions.SET_USERS, payload: {users}}),
    setSelectedUser: (userId: number) => ({type: listPostsActions.SET_SELECTED_USER, payload: {userId}}),
};

