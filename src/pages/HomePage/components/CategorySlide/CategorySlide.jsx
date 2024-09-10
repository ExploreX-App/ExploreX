import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';
import CategoryCard from '../CategoryCard/CategoryCard';
import { useActivitiesQuery } from '../../../../hooks/useFetchActivities';
import { responsive } from '../../../../common/Constants/responsive';


const CategorySlide = () => {
  const { data } = useActivitiesQuery({ keyword: "new york" })
  console.log("dd",data)

  return (
      <div>
<Container>
        <Carousel
          additionalTransfrom={0}
          autoPlay
          autoPlaySpeed={3000}
          infinite={true}
          centerMode={false}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            itemClass="movie-slider"
            containerClass="carousel-container"
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}


        >
          {/* {data?.map((item, index) => (
            <CategoryCard key={index} data={item} />
          ))} */}
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
                    <CategoryCard />

        </Carousel>
        </Container>     
    </div>
  )
}

export default CategorySlide
