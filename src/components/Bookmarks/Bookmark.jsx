const Bookmark = ({bookmark}) =>{
    
    const {title} = bookmark;

    return(
        <div className="p-4 rounded-lg bg-[#fff] mt-3">
            <h2>{title}</h2>
        </div>
    )
}

export default Bookmark