import React, {  useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);

  const naviagate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/books/${id}`)
    .then(response => {
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setTitle(response.data.title);
      setLoading(false);
    })
    .catch(error => {
      setLoading(false);
      alert('an error happend');
      console.log(error);
    })
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    };

    setLoading(true);

    axios.put(`http://localhost:3000/books/${id}`, data)
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

      <h2>Edit book</h2>

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
        <button onClick={handleEditBook}>
          Save
        </button>
      </div>

      </div>
    </>
  )
}

export default UpdateBook