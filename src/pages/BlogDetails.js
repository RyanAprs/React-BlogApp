import { useParams, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function BlogDetails() {
    const { id } = useParams()
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();

    const handleDelete = () => {
      setTimeout(() => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/')
        })
        }, 500) 
      }

  return (
    <div className="blog-details">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>delete</button>
          </article>
        )}
    </div>
  )
}
