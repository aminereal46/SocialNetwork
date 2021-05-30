import {Post} from "../coreLogic/models/Post";
import {Comment} from "../coreLogic/models/Comment";
import {User} from "../coreLogic/models/User";

export interface AppState {
    coreLogicState: CoreLogicState;
}

export interface PostsStore {
    [key: number]: {
        id: number,
        title: string,
        body: string,
        userId: number,
        comments: number[],
    }
}

export interface CommentsStore {
    comments: {
        [key: number]: {
            id: number,
            name: string,
            email: string,
            body: string,
        }
    }
    loading: number | null,
}

export interface UsersStore {
    allUsers: {
        [key: number]: {
            id: number,
            name: string,
            username: string,
            email: string,
        }
    }
    selectedUser: string | number,
}


export interface CoreLogicState {
    posts: PostsStore,
    comments: CommentsStore,
    users: UsersStore,
}
