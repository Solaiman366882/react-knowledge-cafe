import PropTypes from 'prop-types';
import {BsBookmarks} from 'react-icons/bs';

export default function Blog({blog,handleAddToBookmarks}){
   const {title,author,coverImage,postedDate,reading_time,tags} = blog;
    return(
        <div className="blog p-4" >
            <div className="blog-cover">
                <img src={coverImage} className='w-full rounded-lg mb-5' alt="" />
            </div>
            <div className="author-info">
                <div className="info-left flex justify-between items-center">
                    <div className='flex gap-4 items-center'>
                        <img src={author.author_img} className='w-14 h-14 rounded-full object-cover' alt="" />
                        <div>
                            <h3>{author.name}</h3>
                            <p>{postedDate}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>{reading_time} min read</p>
                        <button onClick={() => handleAddToBookmarks(blog)}><BsBookmarks /></button>
                    </div>
                </div>
            </div>
            <div className="title">
                <h2 className="text-4xl text-[#111] my-3">{title}</h2>
            </div>
            <div className="tags">
                {
                    tags.map((tag,idx) => <a className='text-lg text-sky-500 underline mr-3' key={idx}>#{tag}</a>)
                }
            </div>
            <a href="">Mark as Read</a>
        </div>
    )

}
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks:PropTypes.func
}