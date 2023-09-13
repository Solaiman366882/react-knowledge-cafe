// import PropTypes from "prop-types";
import Spent from "../Spent/Spent";
import Bookmark from "../Bookmarks/Bookmark"

export default function Bookmarks({bookmarks,readingTime}){

    return(
        <div className="w-1/3 p-2">
            <div>
                <Spent readingTime={readingTime}/>
            </div>
            <div className="mt-5 bg-[#6047ec2d] p-3 rounded-lg">
                <h2>Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
                }
                
            </div>
        </div>
    )
}
// Bookmarks.propTypes = {
//     bookmarks : PropTypes.array,
// }