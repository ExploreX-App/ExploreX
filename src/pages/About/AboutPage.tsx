import React, { useRef } from 'react';
import './AboutPage.style.css';
import aboutImg2 from '../../assets/about-img2.jpg';
import arrow from '../../assets/arrow.png';
import member1 from '../../assets/member1.jpg';
import member2 from '../../assets/member1.jpg';
import member3 from '../../assets/member1.jpg';
import member4 from '../../assets/member1.jpg';
import member5 from '../../assets/member1.jpg';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const AboutPage = () => {
  // 스크롤 감지를 위한 ref 및 inView 상태 설정
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const { ref: toolsRef, inView: toolsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const { ref: methodologiesRef, inView: methodologiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const { ref: teamRef, inView: teamInView } = useInView({
    // 팀 섹션을 위한 훅 추가
    triggerOnce: true,
    threshold: 0.2
  });

  // 팀 섹션으로 스크롤할 수 있는 ref 생성
  const teamSectionRef = useRef(null);

  // 버튼 클릭 시 팀 섹션으로 스크롤하는 함수
  const scrollToTeamSection = () => {
    if (teamSectionRef.current) {
      teamSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 반응형 설정
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Container className='about-page'>
      {/* 텍스트 섹션 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Row>
          <Col xs={12} className='text-container'>
            <h1 className='about-title'>Your Ultimate Travel Guide</h1>
            <h3 className='about-subtitle'>
              Unlock extraordinary destinations and create memories that last a
              lifetime.
            </h3>
          </Col>
        </Row>
      </motion.div>

      {/* 이미지 섹션 */}
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <Row className='image-section'>
          <Col xs={12}>
            <img
              src={aboutImg2}
              alt='about-main-img'
              className='about-main-img'
            />
            <div className='overlay-box'>
              <h2 className='about-img-box-title'>ExploreX</h2>
              <p className='about-img-box-txt'>
                ExploreX is a cutting-edge travel guide website designed to help
                users discover the best hotels and activities around the globe.
              </p>
              <button className='overlay-box-btn' onClick={scrollToTeamSection}>
                Our Team
              </button>
            </div>
          </Col>
        </Row>
      </motion.div>

      {/* 프로젝트 소개 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Row className='columns'>
          <Col lg={7}></Col>
          <Col lg={5} className='right-column'>
            <div className='quote-container'>
              <i className='fa-solid fa-quote-left quote-icon'></i>
              <p className='quote-text'>
                ExploreX is your ultimate travel companion, designed to unlock
                the wonders of the world with ease. Powered by cutting-edge
                technologies and APIs, ExploreX connects travelers to the best
                hotels, activities, and hidden gems across the globe. Through
                the combined power of RapidAPI, Amadeus API, and Google Maps
                API, ExploreX offers a seamless, intuitive search experience,
                enabling users to discover and plan their dream trips
                effortlessly. ExploreX is more than just a travel guide—it's a
                gateway to unforgettable experiences, helping you create
                memories that will last a lifetime.
              </p>
            </div>
          </Col>
        </Row>
      </motion.div>

      {/* Skills, Tools, and Methodologies Section */}
      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <Container fluid>
          {/* Skills Section */}
          <div ref={skillsRef}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={
                skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
              }
              transition={{ duration: 0.8 }}
            >
              <Row className='about-skills-section'>
                <Col lg={7} className='skills-txt'>
                  <ul>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                  </ul>
                </Col>
                <Col lg={5}>
                  <div className='skills-header'>
                    <span>
                      <img
                        src={arrow}
                        alt='arrow icon'
                        className='arrow-icon'
                      />
                    </span>
                    <span>
                      <h2 className='skills-header-title'>Skills</h2>
                    </span>
                  </div>
                </Col>
              </Row>
            </motion.div>
          </div>

          {/* Tools Section */}
          <div ref={toolsRef}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={
                toolsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
              }
              transition={{ duration: 0.8 }}
            >
              <Row className='about-skills-section'>
                <Col lg={7} className='text-right'>
                  <div className='skills-header'>
                    <span>
                      <img
                        src={arrow}
                        alt='arrow icon'
                        className='arrow-icon'
                      />
                    </span>
                    <span>
                      <h2 className='skills-header-title'>Tools</h2>
                    </span>
                  </div>
                </Col>
                <Col lg={5} className='skills-txt'>
                  <ul>
                    <li>IDE: Visual Studio Code</li>
                    <li>Version control: Git & GitHub</li>
                    <li>UI/UX design and wireframing: Figma</li>
                    <li>Communication: Slack, Google meeting, Zoom</li>
                  </ul>
                </Col>
              </Row>
            </motion.div>
          </div>

          {/* Methodologies Section */}
          <div ref={methodologiesRef}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={
                methodologiesInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 100 }
              }
              transition={{ duration: 0.8 }}
            >
              <Row className='about-skills-section'>
                <Col lg={7} className='skills-txt'>
                  <ul>
                    <li>
                      Agile (Scrum) - Methodology for rapid development and
                      iteration
                    </li>
                    <li>Public APIs Used:</li>
                    <ul>
                      <li>
                        rapidapi.com - For fetching hotel and activity data
                      </li>
                      <li>
                        Amadeus API - Global travel content and flight data
                      </li>
                      <li>
                        Google Maps API - For displaying maps and location-based
                        services
                      </li>
                    </ul>
                  </ul>
                </Col>
                <Col lg={5}>
                  <div className='skills-header'>
                    <span>
                      <img
                        src={arrow}
                        alt='arrow icon'
                        className='arrow-icon'
                      />
                    </span>
                    <span>
                      <h2 className='skills-header-title'>Methodologies</h2>
                    </span>
                  </div>
                </Col>
              </Row>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Team Section */}
      <div ref={teamSectionRef}>
        <motion.section
          className='team-section'
          style={{
            backgroundColor: '#464646',
            padding: '40px 0',
            width: '100vw'
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
        >
          <Container fluid style={{ width: '80%', margin: '0 auto' }}>
            <h2 className='team-intro-title'>Meet Our Team</h2>
            <p className='team-intro-text'>
              Our team brings together a unique set of skills to make your
              travel experience seamless and enjoyable.
            </p>

            {/* React Multi Carousel 적용 */}
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              removeArrowOnDeviceType={['tablet', 'mobile']}
              showDots={true}
              dotListClass='custom-dot-list'
              customTransition='all 1s ease'
              transitionDuration={1000}
            >
              <Card className='team-card shadow' style={{ width: '280px' }}>
                <div className='team-img-wrapper'>
                  <Card.Img variant='top' src={member1} className='team-img' />
                </div>
                <Card.Body>
                  <Card.Title>Suhyun Park</Card.Title>
                  <Card.Text style={{ color: '#318AFF' }}>
                    Project Owner
                  </Card.Text>
                  <hr />
                  <ul className='team-role-list'>
                    <li>Role responsibility 1</li>
                    <li>Role responsibility 2</li>
                    <li>Role responsibility 3</li>
                    <li>Role responsibility 4</li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='team-card shadow' style={{ width: '280px' }}>
                <div className='team-img-wrapper'>
                  <Card.Img variant='top' src={member2} className='team-img' />
                </div>
                <Card.Body>
                  <Card.Title>James Jo</Card.Title>
                  <Card.Text style={{ color: '#318AFF' }}>
                    Scrum Master
                  </Card.Text>
                  <hr />
                  <ul className='team-role-list'>
                    <li>Role responsibility 1</li>
                    <li>Role responsibility 2</li>
                    <li>Role responsibility 3</li>
                    <li>Role responsibility 4</li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='team-card shadow' style={{ width: '280px' }}>
                <div className='team-img-wrapper'>
                  <Card.Img variant='top' src={member3} className='team-img' />
                </div>
                <Card.Body>
                  <Card.Title>Hailey Kim</Card.Title>
                  <Card.Text style={{ color: '#318AFF' }}>
                    UX Designer / Developer
                  </Card.Text>
                  <hr />
                  <ul className='team-role-list'>
                    <li>Role responsibility 1</li>
                    <li>Role responsibility 2</li>
                    <li>Role responsibility 3</li>
                    <li>Role responsibility 4</li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='team-card shadow' style={{ width: '280px' }}>
                <div className='team-img-wrapper'>
                  <Card.Img variant='top' src={member4} className='team-img' />
                </div>
                <Card.Body>
                  <Card.Title>Amy Ahn</Card.Title>
                  <Card.Text style={{ color: '#318AFF' }}>
                    Designer / Developer
                  </Card.Text>
                  <hr />
                  <ul className='team-role-list'>
                    <li>Role responsibility 1</li>
                    <li>Role responsibility 2</li>
                    <li>Role responsibility 3</li>
                    <li>Role responsibility 4</li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='team-card shadow' style={{ width: '280px' }}>
                <div className='team-img-wrapper'>
                  <Card.Img variant='top' src={member5} className='team-img' />
                </div>
                <Card.Body>
                  <Card.Title>May Kim</Card.Title>
                  <Card.Text style={{ color: '#318AFF' }}>
                    Main Developer
                  </Card.Text>
                  <hr />
                  <ul className='team-role-list'>
                    <li>Role responsibility 1</li>
                    <li>Role responsibility 2</li>
                    <li>Role responsibility 3</li>
                    <li>Role responsibility 4</li>
                  </ul>
                </Card.Body>
              </Card>
            </Carousel>
          </Container>
        </motion.section>
      </div>
    </Container>
  );
};

export default AboutPage;
