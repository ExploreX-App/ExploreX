import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Card.style.css"

const TourCard = () => {

    const navigate = useNavigate();
    const ShowDetail = () => {
        navigate(`/`) ///${data.id}
    }
  return (
          <div className='tourcard-wrap' onClick={ShowDetail}>
          <img src='https://www.internationalcitizens.com/wp-content/uploads/2022/09/iStock-1178852373.jpg' className='card-img' alt='cadana' />
          <div className='tourcard-content'>
              <div>City</div>
            <div>Country</div>
          </div>
      </div>

  )
}

export default TourCard
