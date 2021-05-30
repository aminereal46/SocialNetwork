import {call, getContext, put, takeLatest} from 'redux-saga/effects';
import {viewPostActions, viewPostActionsCreators} from "./actionCreators";
import {CommentsGateway} from "../../gateways/commentsGateway.interface";
import {Action} from "../../types";


function* getComments(action: Action) {
    try {
        const {postId} = action.payload;
        yield put(
            viewPostActionsCreators.setLoading(postId),
        );
        const commentsGateway: CommentsGateway = yield getContext('commentsGateway');
        const comments: Comment[] = yield call(commentsGateway.get, postId);
        yield put(
            viewPostActionsCreators.setComments(comments, postId),
        );
    } catch (error) {
        //handle errors
        console.error(error);
    }
    yield put(
        viewPostActionsCreators.setLoading(null),
    );
}

export function* getCommentsSaga() {
    yield takeLatest(viewPostActions.GET_COMMENTS, getComments);
}

const viewPostSagas = [getCommentsSaga];
export default viewPostSagas;