import FormNewPost from '@/components/form-new-post'
import Header from '@/components/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto my-5'>
      <FormNewPost />
    </main>
  )
}
