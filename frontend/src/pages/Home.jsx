import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// icons
import { IoMdAdd } from "react-icons/io";
import { CiSquareInfo } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Home = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:3000/books')
    .then(response => {
      setBooks(response.data.data);
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  // console.log(books);

  return (
  <>
      <div>Home</div>

      <Link to='/books/create'>
        <IoMdAdd />
      </Link>

      {loading ? <p>Loading...</p> : (
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Tile</th>
            <th>Author</th>
            <th>Publish year</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book, index) => (
              <tr key={book._id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  {book.title}
                </td>
                <td>
                  {book.author}
                </td>
                <td>
                  {book.publishYear}
                </td>
                <td>
                  <Link to={`/books/details/${book._id}`}>
                  <CiSquareInfo />
                  </Link>
                  <Link to={`/books/update/${book._id}`}>
                  <FaEdit />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                  <MdDelete />
                  </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      )
      }
        

  </>
  )
}

export default Home