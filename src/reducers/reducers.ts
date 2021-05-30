import {listPostsActions} from "../coreLogic/usecases/list-posts/actionCreators";
import {Action} from "../coreLogic/types";
import {Post} from "../coreLogic/models/Post";
import {viewPostActions} from "../coreLogic/usecases/view-post-with-comments/actionCreators";
import {Comment} from "../coreLogic/models/Comment";
import {User} from "../coreLogic/models/User";
import {CommentsStore, PostsStore, UsersStore} from "../store/appState.interface";

const postsInitialState: PostsStore = {};

const posts = (state = postsInitialState, action: Action) => {
    switch (action.type) {
        case listPostsActions.SET_POSTS:
            return action.payload.posts.reduce((acc: { [key: number]: any }, post: Post) => {
                if (!acc[post.id]) {
                    acc[post.id] = post.serialize()
                }
                return acc;
            }, {});
        case viewPostActions.SET_COMMENTS:
            const {postId, comments} = action.payload;
            return {...state, [postId]: {...state[postId], comments: comments.map((comment: Comment) => comment.id)}};
        default:
            return state;
    }
};
const usersInitialState: UsersStore = {selectedUser: 'all', allUsers: {}};

const users = (state = usersInitialState, action: Action) => {
    switch (action.type) {
        case listPostsActions.SET_USERS:
            const allUsers = action.payload.users.reduce((acc: { [key: number]: any }, user: User) => {
                if (!acc[user.id]) {
                    acc[user.id] = user.serialize();
                }
                return acc;
            }, {});
            return {...state, allUsers}
        case listPostsActions.SET_SELECTED_USER:
            return {...state, selectedUser: action.payload.userId}
        default:
            return state;
    }
};

const commentsInitialState: CommentsStore = {comments: {}, loading: null};

const comments = (state = commentsInitialState, action: Action) => {
    switch (action.type) {
        case viewPostActions.SET_COMMENTS:
            const newComments = action.payload.comments.reduce((acc: { [key: number]: any }, comment: Comment) => {
                if (!acc[comment.id]) {
                    acc[comment.id] = comment.serialize()
                }
                return acc;
            }, {});
            return {...state, comments: {...state.comments, ...newComments}}
            case viewPostActions.SET_LOADING:
            return {...state, loading: action.payload.postId}
        default:
            return state;
    }
};


export {posts, users, comments};