import {Store} from "redux";
import {AppState} from "../../../store/appState.interface";
import {createReduxStore} from "../../../store/store";
import {viewPostActionsCreators} from "./actionCreators";
import {CommentsGateway} from "../../gateways/commentsGateway.interface";
import InMemoryCommentsGateway from "../../../adapters/secondary/gateways/InMemoryCommentsGateway";
import {Comment} from "../../models/Comment";
import {selectComment} from "./viewPostSelectors";

describe('view Post with comments', () => {
    let commentsGateway: CommentsGateway;
    let store: Store<AppState>;
    let initialState: AppState;

    beforeEach(() => {
        commentsGateway = new InMemoryCommentsGateway();
        store = createReduxStore({commentsGateway})
        initialState = store.getState();
    })

    it('view Post with comments', () => {
        store.dispatch(viewPostActionsCreators.getComments(1));
        const comment1 = new Comment(1, 'name1', 'user1@gmail.com', 'body Comment 1').serialize();
        const comment2 = new Comment(2, 'name2', 'user2@gmail.com', 'body Comment 2').serialize();
        expect(selectComment(1)(store.getState())).toEqual(comment1)
        expect(selectComment(2)(store.getState())).toEqual(comment2)
    })

});