import { ADD_BLOG_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

export const addPost = (data) => ({ type: ADD_BLOG_POST, data });
export const addComment = (data) => ({ type: ADD_COMMENT, data });
export const removeComment = (id) => ({ type: DELETE_COMMENT, payload: id });