import React, { useState } from 'react'
import { FormData } from '@/types/blogs'
const inputClass = 'w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'

const FormNewPost = () => {
    const [formData, setFormData] = useState({
        title:'',
        post:''
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

  return (
    <form className='max-w-md mx-auto p-4' onSubmit={handleSubmit}>
        <div className='mb-4'>
            <input type='text' 
            className={inputClass} 
            placeholder='Enter Title'
            name='title'
            value={formData.title}
            onChange={handleChange}></input>
        </div>
        <div className='mb-4'>
            <input type='text' 
            className={inputClass} 
            placeholder='Enter Post'
            name='post'
            value={formData.post}
            onChange={handleChange}></input>
        </div>
        <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full'>Submit</button>
    </form>
  )
}

export default FormNewPost