import React from 'react'
import { Tabs,Tab, Container, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.style.css'
import DatePicker from './component/CalendarPicker';
import CountrySearch from './component/CountrySearch/CountrySearch';
import VisitorCounter from './component/VisitorCounter/VisitorCounter';


const SearchBar = () => {
  return (
    <div>
          <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
        <Tab eventKey="hotel" title="Hotel">
          <Container>
            <Row>
              <Col lg={3} sm={ 12}><CountrySearch /></Col>
              <Col lg={3} sm={ 12}>   <DatePicker />
              </Col>
           
              <Col lg={ 4} sm={ 12}>
              <VisitorCounter />    
              </Col>
              <Col lg={ 2} sm={ 12}>
           <Button className='search-btn' variant="primary">Search</Button>
              </Col>
           
            </Row>
          
          </Container>

      </Tab>
      <Tab eventKey="activity" title="Activity">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
          </Tabs>
    </div>
  )
}

export default SearchBar
