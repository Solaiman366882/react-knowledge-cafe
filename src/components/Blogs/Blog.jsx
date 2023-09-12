
export default function Blog({blog}){
   const {title,author,coverImage} = blog;
    return(
        <div className="blog">
            <div className="blog-cover">
                <img src="" alt="" />
            </div>
            <div className="author-info">
                <div className="info-left">
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title">
                <h2 className="text-3xl">{title}</h2>
            </div>
            <div className="tags">

            </div>
            <a href="">Mark as Read</a>
        </div>
    )

}