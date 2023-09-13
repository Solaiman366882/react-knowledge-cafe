
import { useEffect, useState } from "react"
import Blog from "./blog";

export default function Blogs({handleAddToBookmarks}){
    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])

    return(
        <div className="blog-container w-2/3">
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id} handleAddToBookmarks={handleAddToBookmarks} ></Blog>)
            }
        </div>
    )
}

