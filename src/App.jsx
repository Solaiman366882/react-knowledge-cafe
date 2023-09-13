
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/header'
import { useState } from 'react'

function App() {

  const [bookmarks,setBookmarks] = useState([]);

  const handleAddToBookmarks = () => {

    console.log('Bookmarks Adding soon.');
  }

  return (
    <>
      <div className=' max-w-screen-xl mx-auto p-3'>
        <Header></Header>
        <div className='md:flex gap-4'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks} ></Blogs>
          <Bookmarks />
        </div>
      </div>
    </>
  )
}

export default App
