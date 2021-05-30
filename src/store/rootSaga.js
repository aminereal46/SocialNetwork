import {all, fork} from 'redux-saga/effects';
import listPostsSagas from "../coreLogic/usecases/list-posts/listPostsSaga";
import viewPostWithCommentsSagas from "../coreLogic/usecases/view-post-with-comments/viewPostWithCommentsSaga";

const sagas = [
        ...listPostsSagas,
        ...viewPostWithCommentsSagas,
];

export default function rootSaga(dataProvider, authProvider) {
    return function* () {
        yield all(sagas.map(fork)
        );
    }
}
