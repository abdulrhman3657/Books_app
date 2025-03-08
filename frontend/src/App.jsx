import './App.css'
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom'
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import DisplayBook from './pages/DisplayBook';
import Home from './pages/Home';
import UpdateBook from './pages/UpdateBook';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/books/create' element={<CreateBook/>}/>
          <Route path='/books/details/:id' element={<DisplayBook/>}/>
          <Route path='/books/update/:id' element={<UpdateBook/>}/>
          <Route path='/books/delete/:id' element={<DeleteBook/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
