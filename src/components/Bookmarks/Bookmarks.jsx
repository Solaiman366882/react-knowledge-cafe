import Spent from "../Spent/Spent";

export default function Bookmarks(){

    return(
        <div className="w-1/3 p-2">
            <div>
                <Spent />
            </div>
            <div className="mt-5 bg-[#6047ec2d] p-3 rounded-lg">
                <h2>Bookmarked Blogs : 8</h2>
                <div className="p-4 rounded-lg bg-[#fff] mt-3">
                    <h2>Master Microsoft Power Platform and Become an In-Demand!</h2>
                </div>
            </div>
        </div>
    )
}