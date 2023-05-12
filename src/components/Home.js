import React from "react";
import BlogCard from "./BlogCard";
import { useSelector } from "react-redux";


const Home = () => {
    const posts = useSelector(st => st.posts)
    const postIds = Object.keys(posts);

    return (
        <div className="container">
            {postIds.map(p =>
                <div key={(p)}>
                    <BlogCard id={p} title={posts[p].title} description={posts[p].description} />
                </div>)}
        </div>
    )
}

export default Home;