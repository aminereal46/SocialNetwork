import {call, getContext, put, takeLatest} from 'redux-saga/effects';
import {listPostsActions, listPostsActionsCreators} from "./actionCreators";
import {PostsGateway} from "../../gateways/postsGateway.interface";
import {Post} from "../../models/Post";
import {User} from "../../models/User";


function* listPosts() {
    try {
        const postsGateway: PostsGateway = yield getContext('postsGateway');
        const posts: Post[] = yield call(postsGateway.get);
        const users: User[] = yield call(postsGateway.getUsers);
        yield put(
            listPostsActionsCreators.setUsers(users),
        );
        yield put(
            listPostsActionsCreators.setPost(posts),
        );

    } catch (error) {
        //handle Errors
        console.error(error);
    }
}

export function* listPostsSaga() {
    yield takeLatest(listPostsActions.GET_POSTS, listPosts);
}

const listPostsSagas = [listPostsSaga];
export default listPostsSagas;