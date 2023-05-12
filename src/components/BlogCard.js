import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, title, description }) => {
    const navigate = useNavigate();

    const handleGoToPost = () => {
        navigate(`/posts/${id}`);
    };

    return (
        <div className="card w-75 mb-3" style={{ padding: '20px' }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={`/posts/${id}`} 
                    onClick={handleGoToPost} 
                    role="button" 
                    className="btn btn-outline-primary btn-sm">
                    Read More
                </a>
            </div>
        </div>
    )
}

export default BlogCard;