import React from 'react'
import "./CategoryCard.style.css"

const CategoryCard = () => {
    return (
      <div className='card'>
                <div className='category-container'>
          <img src='https://res.cloudinary.com/hello-tickets/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_800/v1639448826/ignuqnj093e3v7tjot29.jpg' alt='new york' />
          <div className="category-overlay"></div>
          <div className='category-text'>New York</div>
    </div>
      </div>

  )
}

export default CategoryCard
