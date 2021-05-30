import React, {Fragment, useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Divider, makeStyles} from "@material-ui/core";
import PostHeader from "./PostHeader";
import Comment from "./Comment";
import {PostView} from "../../../../coreLogic/usecases/list-posts/listPostsSelectors";
import {useDispatch, useSelector} from "react-redux";
import {viewPostActionsCreators} from "../../../../coreLogic/usecases/view-post-with-comments/actionCreators";
import {selectLoading} from "../../../../coreLogic/usecases/view-post-with-comments/viewPostSelectors";

const useStyles = makeStyles(theme => ({
    accordion: {
        marginBottom: theme.spacing(2),
    },
    accordionDetails: {
        paddingLeft: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e3f1fc'
    },
    divider: {
        margin: theme.spacing(2, 2),
    }
}));

type Props = {
    post: PostView
}

function Post({post}: Props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState(false);

    const loading = useSelector(selectLoading)

    const showComments = () => {
        if (!post.comments.length) {
            dispatch(viewPostActionsCreators.getComments(post.id));
        }
        setExpanded(expanded => !expanded);
    }

    return (
        <div className={classes.accordion}>
            <Accordion
                expanded={(!loading || loading !== post.id) && expanded}
                onChange={showComments}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <PostHeader post={post} loading={loading === post.id} expanded={expanded}/>
                </AccordionSummary>

                <AccordionDetails className={classes.accordionDetails}>
                    {post.comments.map((commentId: number, idx) => {
                        return (
                            <Fragment key={commentId}>
                                <Comment commentId={commentId}/>
                                {idx < post.comments.length - 1 &&
                                <Divider variant="inset" className={classes.divider}/>}
                            </Fragment>);
                    })}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Post;
