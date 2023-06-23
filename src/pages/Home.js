import { useState, useEffect } from 'react'
import BlogList from '../components/BlogList'

export default function Home() {
  const [blogs, setBlogs] = useState([
    {title: 'Anjay', body: 'lorem ipsum...', author: 'ryan', id: 1},
    {title: 'cuaks', body: 'lorem ipsum...', author: 'adi', id: 2},
    {title: 'Buset', body: 'lorem ipsum...', author: 'ryan', id: 3}
  ])

  const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs)
  }

  useEffect(() => {
    console.log('use effecr ran')
  }, [])

  return (
    <div className='home'>
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  )
}