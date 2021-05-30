import React from 'react';
import {makeStyles, Typography, Tooltip, CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import {PostView, selectUserName} from "../../../../coreLogic/usecases/list-posts/listPostsSelectors";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    titleHeading: {
        fontSize: theme.spacing(3),
        marginRight: theme.spacing(),
    },
    postedByHeading: {
        fontSize: theme.spacing(2),
        marginTop: theme.spacing(-1),
        color: 'grey',
    },
    body: {
        marginTop: theme.spacing(2),
        fontSize: theme.spacing(2),
        // color: theme.palette.text.secondary,
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
    },
    progressBar: {
        position: 'absolute',
        right: theme.spacing(2),
        bottom: theme.spacing(2),
    }
}));

type PostHeaderProps = {
    post: PostView
    loading: boolean,
    expanded: boolean,
}


function PostHeader({post, loading, expanded}: PostHeaderProps) {
    const classes = useStyles();
    const userName = useSelector(selectUserName(post.userId));

    return (
        <Tooltip title={expanded ? "Click To hide comments" : "Click to show comments"}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <Typography className={classes.titleHeading}> {post.title} </Typography>
                    <Typography className={classes.postedByHeading}> Posted by {userName}</Typography>
                </div>

                <Typography className={classes.body}> "laudantium enim quasi est quidem magnam voluptate ipsam
                    eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente
                    accusantium" </Typography>
                <div  className={classes.progressBar}>
                    {loading && <CircularProgress/>}
                </div>
            </div>
        </Tooltip>

    );
}

export default PostHeader;