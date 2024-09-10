import React from 'react'
import Banner from './components/Banner/Banner'
import CardSlide from '../../common/CardSlide/CardSlide'
import CategorySlide from './components/CategorySlide/CategorySlide'
import { Container } from 'react-bootstrap'
import "./Homepage.style.css"


//banner
//

const HomePage = () => {
  return (
    <Container>
          <div>HomePage
        <Banner />
        <CategorySlide />
        <CardSlide />

          </div>
    </Container>

  )
}

export default HomePage