import { Container, Accordion, Card, Row, Col } from "react-bootstrap";
import './FrequentAskedQuestions.style.css'
const FreqeuntAskedQuestions = ({faqRef}) => {
    return (
        <Container ref={faqRef} className="FnA-container">
            <h3 style={{color: "red"}}>Hotel FAQ</h3>
            <Row>
                {/* Left Column: Title */}
                <Col className="FnA-col-1" xs={12} md={4} style={{ backgroundColor: "#d0e2ff" }}>
                    <h4 style={{padding:'30px'}}>Frequent Asked Questions</h4>
                </Col>

                {/* Right Column: Accordion */}
                <Col className="FnA-col-2" xs={12} md={8}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="FnA-header" style={{ borderTopLeftRadius: '0px' }}>What activities and services are provided at Excalibur?</Accordion.Header>
                            <Accordion.Body>
                                Excalibur offers the following activities/services, and fees may apply:
                                <ul>
                                    <li>Fitness Center</li>
                                    <li>Shopping</li>
                                    <li>Hot Springs</li>
                                    <li>Casino</li>
                                    <li>Golf Course (within 3km)</li>
                                    <li>Evening Entertainment</li>
                                    <li>Water Activities</li>
                                    <li>Swimming Pool</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What types of rooms can I book at Excalibur?</Accordion.Header>
                            <Accordion.Body>Excalibur offers Double Rooms and Suites.</Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How much does a stay at Excalibur cost?</Accordion.Header>
                            <Accordion.Body>The cost of a stay at Excalibur depends on the dates and the hotel policy. Please input your desired dates to check rates.</Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How far is Excalibur from the center of Las Vegas?</Accordion.Header>
                            <Accordion.Body>Excalibur is approximately 2.1 km from the center of Las Vegas.</Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Does Excalibur have a swimming pool?</Accordion.Header>
                            <Accordion.Body>Yes, Excalibur has a swimming pool. Please contact the hotel for more details.</Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Is parking available for guests at Excalibur?</Accordion.Header>
                            <Accordion.Body>Yes, parking is available for guests at Excalibur.</Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Are there any restaurants in Excalibur?</Accordion.Header>
                            <Accordion.Body>
                                Excalibur has 14 restaurants:
                                <ul>
                                    <li>Fat Burger</li>
                                    <li>Drenched Bar and Grill</li>
                                    <li>Johnny Rockets</li>
                                    <li>Popeyes</li>
                                    <li>Buca di Beppo</li>
                                    <li>Jimmy Johns</li>
                                    <li>Einstein Bros</li>
                                    <li>Baja Fresh</li>
                                    <li>Del Taco</li>
                                    <li>TAP Sports Bar</li>
                                    <li>Pick-Up Stix</li>
                                    <li>Pizza Hut</li>
                                    <li>The Buffet at Excalibur</li>
                                    <li>Dicks Last Resort</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Is Excalibur popular among families?</Accordion.Header>
                            <Accordion.Body>Yes, Excalibur is very popular among families.</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default FreqeuntAskedQuestions;
