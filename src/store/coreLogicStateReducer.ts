import {combineReducers} from "redux";
import {posts, comments, users} from "../reducers/reducers";


export default combineReducers({
    posts,
    comments,
    users,
});