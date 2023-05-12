import React, { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import NewBlogPost from "./components/NewBlogPost";
import Home from "./components/Home";
import { v4 as uuid } from "uuid";
import BlogPost from "./components/BlogPost";


const AppRoutes = () => {
    const [posts, setPosts] = useState([]);

    const addPost = post => {
        let newPost = { ...post, id: uuid() };
        setPosts(posts => [ ...posts, newPost ])
    }


    return (
        <Routes>
            <Route exact='true' path="/" element={<Home />} />
            <Route exact='true' path='/new' element={<NewBlogPost addPost={addPost} />} />
            <Route exact='true' path='/posts/:id' element={<BlogPost />} />
            <Route path="*" element={<Navigate replace to='/' />} />
        </Routes>
    )
}

export default AppRoutes;