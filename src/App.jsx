
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/header'

function App() {

  return (
    <>
      <div className='max-w-screen p-3'>
        <Header></Header>
        <div className='md:flex gap-4'>
          <Blogs></Blogs>
          <Bookmarks />
        </div>
      </div>
    </>
  )
}

export default App
