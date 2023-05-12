import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { addPost } from '../actions'
import { useDispatch } from 'react-redux';

const NewBlogPost = () => {
    const dispatch = useDispatch();

    const INITIAL_STATE = {
        title: '',
        description: '',
        body: ''
    }

    const addBlogPost = (data) => {
        console.log(data)
        dispatch(addPost(data))
    }
    
    const [formData, setFormData] = useState(INITIAL_STATE);

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value,
            id: uuidv4()
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBlogPost(formData)
        setFormData(INITIAL_STATE);
        navigate('/');
    }

    const handleCancel = () => {
        navigate('/');
    }

    return (
        <form style={{padding: '10px'}} onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='title' className='form-label'>Title:</label>
                <input className='form-control'
                    id='title'
                    type='text'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='description' className='form-label'>Description:</label>
                <input className='form-control' 
                    id='description'
                    type='text'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor='body'>Body:</label>
                <textarea className='form-control' 
                    id='body'
                    type='text'
                    name='body'
                    value={formData.body}
                    onChange={handleChange}
                />
            </div>

            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save</button>
            <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default NewBlogPost;