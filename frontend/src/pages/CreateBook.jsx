import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);

  const naviagate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };

    setLoading(true);

    axios.post('http://localhost:3000/books', data)
    .then(() => {
      setLoading(false);
      naviagate('/');
    })
    .catch((error => {
      setLoading(false);
      alert('an error happend');
      console.log(error); 
    }))

  };

  return (
    <>
      <div>

      <Link to='/'>
        Back
      </Link>

      <h2>Create book</h2>

      {loading ? <p>Loading</p> : ''}

      <div>
        <div>
          <label>Title</label>
          <input 
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author</label>
          <input 
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Publish year</label>
          <input 
          type="number"
          value={publishYear}
          onChange={e => setPublishYear(e.target.value)}
          />
        </div>
        <button onClick={handleSaveBook}>
          Save
        </button>
      </div>

      </div>
    </>
  )
}

export default CreateBook