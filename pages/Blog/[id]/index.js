import React from 'react'
import Comment from '@/components/comment'
import FormComment from '@/components/form-comment'

const BlogPostDetail = () => {
  return (
    <div className='max-w-4xl mx-auto py-8'>
        <h1 className='text-3xl font-bold'>Post One</h1>
        <p>Written By: Johnny Applesauce</p>
        <div className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</div>
        <Comment />
        <FormComment />

    </div>
  )
}

export default BlogPostDetail