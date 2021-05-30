import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectComment} from "../../../../coreLogic/usecases/view-post-with-comments/viewPostSelectors";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginLeft: theme.spacing(2),
    },
    titleHeading: {
        fontSize: theme.spacing(2.5),
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
    name: {
        display: 'flex',
        flexDirection: 'column',
    }
}));

type CommentProps = {
    commentId: number
}


function Comment({commentId}: CommentProps) {
    const classes = useStyles();
    const comment = useSelector(selectComment(commentId));

    return (
        <div className={classes.container}>
            <div className={classes.name}>
                <Typography className={classes.titleHeading}> {comment.name} </Typography>
                <Typography className={classes.postedByHeading}> {comment.email}</Typography>
            </div>
            <Typography className={classes.body}> {comment.body} </Typography>
        </div>
    );
}

export default Comment;