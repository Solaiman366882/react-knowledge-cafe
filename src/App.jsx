
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/header'
import { useState } from 'react'

function App() {

  const [bookmarks,setBookmarks] = useState([]);

  const [readingTime,setReadingTime] = useState(0);

  const handleReadingTimeAdd = (blog) => {
    const {reading_time} = blog;
    const newReadingTime = readingTime + reading_time;
    setReadingTime(newReadingTime);

  }

  const handleAddToBookmarks = (blog) => {

    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <div className=' max-w-screen-xl mx-auto p-3'>
        <Header></Header>
        <div className='md:flex gap-4'>
          <Blogs 
            handleAddToBookmarks={handleAddToBookmarks}
            handleReadingTimeAdd={handleReadingTimeAdd} 
          ></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
        </div>
      </div>
    </>
  )
}

export default App
