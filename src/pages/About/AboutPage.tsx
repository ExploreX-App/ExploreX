import React, { useRef } from 'react';
import './AboutPage.style.css';
import arrow from '../../assets/arrow.png';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'react-multi-carousel/lib/styles.css';
import TeamMembers from './components/TeamMembers';
import HeaderSlider from './components/HeaderSlider/HeaderSlider';
import './components/HeaderSlider/HeaderSlider.style.css';
import Skills from './components/Skills/Skills'; // Import the new SkillsSection component

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
      {/* 이미지 섹션 */}
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <Row className='image-section'>
          <Col xs={12}>
            <HeaderSlider />
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

      {/* 텍스트 섹션 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* 프로젝트 소개 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Row className='columns'>
            <Col lg={7}>
              <h1 className='about-title'>Your Ultimate Travel Guide</h1>
              <h3 className='about-subtitle'>
                Unlock extraordinary destinations and create memories that last
                a lifetime.
              </h3>
            </Col>
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

        {/* Skills Section */}
        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <Skills />
        </motion.div>
      </motion.div>

      {/* Team Section */}
      <div ref={teamSectionRef}>
        <TeamMembers />
      </div>
    </Container>
  );
};

export default AboutPage;
