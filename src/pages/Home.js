import BlogList from '../components/BlogList'
import useFetch from '../hooks/useFetch'

export default function Home() {
  const { data, isLoading, error } = useFetch('http://localhost:8000/blogs') 
  
  return (
    <div className='home'>
      { error && <div>{ error }</div>}
      { isLoading && <div>Loading...</div> }
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  )
}