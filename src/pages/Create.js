import { useState } from "react";
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    setIsLoading(true)

    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
      }).then(() => {
        console.log('new blog created')
        setIsLoading(false)
        history.push('/')
      })
    }, 500)
  }

  return (
    <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input 
            type="text" 
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog Body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog Author:</label>
          <input 
            type="text" 
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {!isLoading && <button>Add Blog</button>}
          {isLoading && <button disabled>Adding blog...</button>}

        </form>
    </div>
  )
}
