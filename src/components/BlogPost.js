import React from "react";
import { useParams } from "react-router";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import Comment from "./Comment";

const BlogPost = () => {
    let foundPost = [];
    let foundComments = [];

    const { id } = useParams();

    const posts = useSelector(st => st.posts);
    const postIds = Object.keys(posts);

    for (let i = 0; i < postIds.length; i++) {
        if(id === postIds[i]) {
            foundPost = [ ...foundPost, postIds[i] ]
        }
    };

    const comments = useSelector(st => st.comments);

    for (let id in comments) {
        if (foundPost[0] === comments[id].postId) {
            foundComments = [ ...foundComments, comments[id].id]
        }
    }

    return (
        <div className="container-fluid">
            {foundPost.map(p => 
                <div>
                    <h1>{p.title}</h1>
                    <h6><em>{p.description}</em></h6>
                    <p>{p.body}</p>
                </div>
            )}
            <div>
                {foundComments.map(c => 
                    <Comment comment={c.comment} />)}

                <CommentForm postId={id} />
            </div>
        </div>
    )
}

export default BlogPost;