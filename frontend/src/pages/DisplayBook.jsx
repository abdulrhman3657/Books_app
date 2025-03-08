import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DisplayBook = () => {

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams(); 
  
    useEffect(() => {
      setLoading(true)
      axios.get(`http://localhost:3000/books/${id}`)
      .then(response => {
        setBook(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
    }, []);


    // console.log(book);

  return (
    <>
    
    <Link to='/'>
      Back
    </Link>

    <h2>Book info</h2>

    {loading ? <p>Loading...</p> : (

      <div>
        <div>
          <span style={{ fontWeight: 'bold', color: 'lightgreen' }}>Id: </span>
          <span>{book._id}</span>
        </div>
        <div>
          <span style={{ fontWeight: 'bold', color: 'lightgreen' }}>Title: </span>
          <span>{book.title}</span>
        </div>
        <div>
          <span style={{ fontWeight: 'bold', color: 'lightgreen' }}>Author: </span>
          <span>{book.author}</span>
        </div>
        <div>
          <span style={{ fontWeight: 'bold', color: 'lightgreen' }}>Publish Year: </span>
          <span>{book.publishYear}</span>
        </div>
        <div>
          <span style={{ fontWeight: 'bold', color: 'lightgreen' }}>Create Time: </span>
          <span>{new Date(book.createdAt).toString()}</span>
        </div>
        <div>
          <span style={{ fontWeight: 'bold', color: 'lightgreen' }}>Last Update Time: </span>
          <span>{new Date(book.udatedAt).toString()}</span>
        </div>

      </div>

    )}
    
    </>
  )
}

export default DisplayBook