import { post } from '@/fakedata/data'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className='max-w-4xl mx-auto py-8'>
        <h1 className='text-3xl font-bold mb-4'>Blogs</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grids-cols-3 gap-4'>
            {post.map(post => (
                <Link key={post.id} href={`/Blog/${post.id}`} className='p-4 rounded-md shadow-md'>
                    <h2 className='text-xl font-bold'>{post.title}</h2>
                    <p>Written By: {post.username}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Blog