import createSagaMiddleware from "redux-saga";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {AppState} from "./appState.interface";
import {composeWithDevTools} from "redux-devtools-extension";
import coreLogicState from "./coreLogicStateReducer";
import rootSaga from "./rootSaga";
import {PostsGateway} from "../coreLogic/gateways/postsGateway.interface";
import {CommentsGateway} from "../coreLogic/gateways/commentsGateway.interface";

export interface SagaContext {
    postsGateway?: PostsGateway,
    commentsGateway?: CommentsGateway
}

export const createReduxStore = (sagaContext: SagaContext) => {
    const sagaMiddleware = createSagaMiddleware({ context: sagaContext });
    const store = createStore(combineReducers<AppState>({
            coreLogicState
        }),
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga());
    return store;
};


