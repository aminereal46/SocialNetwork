import {AppState, CommentsStore, CoreLogicState} from "../../../store/appState.interface";

export interface CommentView {
    id: number,
    name: string,
    email: string,
    body: string,
}
const selectCoreLogicState = (state: AppState): CoreLogicState => state.coreLogicState;

const selectCommentStore = (state: AppState): CommentsStore => {
    const coreLogicState = selectCoreLogicState(state);
    return coreLogicState.comments;
}

export const selectComment = (commentId: number ) => (state: AppState): CommentView => {
    const {comments} = selectCommentStore(state);
    return comments[commentId] || {};
}

export const selectLoading = (state: AppState): number | null => {
    const {loading} = selectCommentStore(state);
    return loading

};