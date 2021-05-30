import {Store} from "redux";
import {AppState} from "../../../store/appState.interface";
import {PostsGateway} from "../../gateways/postsGateway.interface";
import InMemoryPostsGateway from "../../../adapters/secondary/gateways/InMemoryPostsGateway";
import {createReduxStore} from "../../../store/store";
import {listPostsActionsCreators} from "./actionCreators";
import {selectPosts} from "./listPostsSelectors";
import {Post} from "../../models/Post";

describe('list Posts', () => {
    let postsGateway: PostsGateway;
    let store: Store<AppState>;
    let initialState: AppState;

    beforeEach(() => {
        postsGateway = new InMemoryPostsGateway();
        store = createReduxStore({postsGateway})
        initialState = store.getState();
    })

    it('list Posts', () => {
        store.dispatch(listPostsActionsCreators.getPost());
        const post1 = new Post(1, 'title1', 'body1', 1).serialize();
        const post2 = new Post(2, 'title2', 'body2', 2).serialize();
        expect(selectPosts(store.getState())).toEqual([post1, post2])
    })

});