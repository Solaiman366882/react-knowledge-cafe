import PropTypes from "prop-types";
export default function Spent({readingTime}){
    return(
        <div className="rounded-lg overflow-hidden">
            <h2 className="text-[#6047EC] bg-[#6047ec2d] p-3 text-center">Spent time on read : {readingTime} min</h2>
        </div>
    )
}

Spent.propTypes = {
    readingTime : PropTypes.number
}
