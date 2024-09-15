// Skills.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faBootstrap,
  faGithub,
  faFigma
} from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.style.css';

const Skills = () => {
  return (
    <div className='skills-section'>
      <Container fluid className='skills-container'>
        <Row>
          {/* Left Column */}
          <Col lg={6} className='left-column'>
            <h1 className='section-title'>Our Core Skills</h1>
            <p className='section-subtitle'>Technologies and Tools We Use:</p>
            <button className='learn-more-btn'>Learn More</button>
          </Col>

          {/* Right Column */}
          <Col lg={6} className='right-column'>
            <div className='skill-box'>
              <div className='icon-box'>
                <FontAwesomeIcon icon={faReact} size='2x' />
              </div>
              <div className='content-box'>
                <h3>React / JavaScript</h3>
                <p>We use React for building interactive and modern UIs.</p>
              </div>
            </div>

            <div className='skill-box'>
              <div className='icon-box'>
                <FontAwesomeIcon icon={faBootstrap} size='2x' />
              </div>
              <div className='content-box'>
                <h3>CSS / Bootstrap</h3>
                <p>Bootstrap helps us create responsive and modern designs.</p>
              </div>
            </div>

            <div className='skill-box'>
              <div className='icon-box'>
                <FontAwesomeIcon icon={faGithub} size='2x' />
              </div>
              <div className='content-box'>
                <h3>Git & GitHub</h3>
                <p>Version control and collaboration through GitHub.</p>
              </div>
            </div>

            <div className='skill-box'>
              <div className='icon-box'>
                <FontAwesomeIcon icon={faFigma} size='2x' />
              </div>
              <div className='content-box'>
                <h3>Figma</h3>
                <p>Figma is our primary tool for planning our website.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
