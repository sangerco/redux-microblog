import React from "react";
import { useDispatch } from "react-redux";
import { removeComment } from "../actions";

const Comment = ({ comment }) => {
    let dispatch = useDispatch();

    const deleteComment = (id) => {
        dispatch(removeComment(id));
    }

    return (
        <>
            <button 
                type="button" 
                className="btn btn-outline-danger btn-sm" 
                onClick={deleteComment}>
                    <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <p>{comment}</p>
        </>
    )
}

export default Comment;