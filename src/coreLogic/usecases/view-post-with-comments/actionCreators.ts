
export const viewPostActions = {
    GET_COMMENTS: 'GET_COMMENTS',
    SET_COMMENTS: 'SET_COMMENTS',
    SET_LOADING: 'SET_LOADING',
}

export const viewPostActionsCreators = {
    getComments: (postId: number) => ({type: viewPostActions.GET_COMMENTS, payload: {postId}}),
    setComments: (comments: Comment[], postId: number) => ({type: viewPostActions.SET_COMMENTS, payload: {comments, postId}}),
    setLoading: (postId: number | null) => ({type: viewPostActions.SET_LOADING, payload: {postId}}),

};

