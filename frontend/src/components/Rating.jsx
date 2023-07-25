import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Rating = ({ value, text }) => {
  return (
    <div className='rating'>
        <span>
            {/**If the value is greater than or equal to one show full star, then show half star for 0.5 and no star if all else */}
            { value >= 1 ? <FaStar /> :  value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
        </span>
        <span>
            {/**If the value is greater than or equal to two show full star, then show half star for 1.5 and no star if all else */}
            { value >= 2 ? <FaStar /> :  value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
        </span>
        <span>
            {/**If the value is greater than or equal to three show full star, then show half star for 2.5 and no star if all else */}
            { value >= 3 ? <FaStar /> :  value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
        </span>
        <span>
            {/**If the value is greater than or equal to four show full star, then show half star for 3.5 and no star if all else */}
            { value >= 4 ? <FaStar /> :  value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
        </span>
        <span>
            {/**If the value is greater than or equal to five show full star, then show half star for 4.5 and no star if all else */}
            { value >= 5 ? <FaStar /> :  value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
        </span>
        {/** if there is a rating text there then show it otherwise null */}
        <span className="rating-text">{ text && text }</span>
    </div>
  )
}

export default Rating