import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const DeleteBook = () => {

    const [loading, setLoading] = useState(false);
    const naviagate = useNavigate();
    const {id} = useParams();

    const handleDeleteBook = () => {
      setLoading(true);
      axios.delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        naviagate('/');
      })
      .catch(error => {
        setLoading(false);
        alert('an error happend');
        console.log(error);
      })
    }

  return (
    <>
    
    <Link to='/'>
        Back
    </Link>

    {loading ? <p>Loading...</p> : ''}

    <div>
      <h3>Are you sure?</h3>
      <button onClick={handleDeleteBook}>
        Delete
      </button>
    </div>
    
    </>
  )
}

export default DeleteBook