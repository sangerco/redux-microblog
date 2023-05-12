import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addComment } from '../actions';
import { useDispatch } from 'react-redux';

const CommentForm = ({ postId }) => {
    const dispatch = useDispatch();

    const INITIAL_STATE = {
        comment: '', 
        postId: postId
    }

    const addBlogComment = (data) => {
        console.log(data)
        dispatch(addComment(data))
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value,
            postId: postId,
            id: uuidv4()
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBlogComment(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <div className='container'>
            <form style={{ padding: '10px' }} onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='title' className='form-label'></label>
                    <input className='form-control'
                        id='comment'
                        type='text'
                        name='comment'
                        value={formData.comment}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save</button>
            </form>
        </div>
    );
}

export default CommentForm;