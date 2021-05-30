import React, {useEffect} from 'react';
import '../../../App.css';
import Post from "./components/Post";
import {useDispatch, useSelector} from "react-redux";
import {selectPosts} from "../../../coreLogic/usecases/list-posts/listPostsSelectors";
import {listPostsActionsCreators} from "../../../coreLogic/usecases/list-posts/actionCreators";
import {makeStyles} from "@material-ui/core";
import SearchBar from "./components/UserSearchBar";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        maxHeight: '100%',
    },
    container: {
        marginTop: theme.spacing(20),
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    },
}));

function App() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts)

    useEffect(() => {
        dispatch(listPostsActionsCreators.getPost());
    }, [dispatch])
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <SearchBar/>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
}

export default App;
