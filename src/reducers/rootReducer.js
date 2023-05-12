import { ADD_BLOG_POST, ADD_COMMENT, DELETE_COMMENT } from '../actionTypes'

const INITIAL_STATE = {
    posts: {},
    comments: {}
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_BLOG_POST: {
            const post = action.data;
            console.log(post)
            const posts = { ...state.posts, [post.id]: post };
            return {
                ...state,
                posts: posts
            }
        }
        case ADD_COMMENT: {
            const comment = action.data;
            console.log(comment.id)
            const comments = { ...state.comments, [comment.id]: comment };
            return {
                ...state,
                comments: comments
            }
        }
        case DELETE_COMMENT: {
            let comments = { ...state.comments };
            let commentIds = Object.keys(comments);
            for (let i = 0; i < commentIds.length; i++) {
                if (action.payload === commentIds[i]) {
                    delete commentIds[i]
                }
            }
            return {
                ...state,
                comments: comments
            }
        }
        default:
            return state;
    }
}

export default rootReducer;