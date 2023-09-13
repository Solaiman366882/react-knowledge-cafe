import PropTypes from 'prop-types';
import { useEffect, useState } from "react"
import Blog from "./blog";

export default function Blogs({handleAddToBookmarks,handleReadingTimeAdd}){
    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])

    return(
        <div className="blog-container w-2/3">
            {
                blogs.map(blog => <Blog 
                                    blog={blog} 
                                    key={blog.id} 
                                    handleAddToBookmarks={handleAddToBookmarks} 
                                    handleReadingTimeAdd={handleReadingTimeAdd}
                                ></Blog>)
            }
        </div>
    )
}

Blogs.propTypes ={
    handleAddToBookmarks: PropTypes.func,
    handleReadingTimeAdd: PropTypes.func,
}

