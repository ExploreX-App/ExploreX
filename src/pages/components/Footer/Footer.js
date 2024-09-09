// components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className='bg-light text-center text-lg-start'>
      <div className='text-center p-3' style={{ backgroundColor: '#f1f1f1' }}>
        © 2024 Explore X
        <a className='text-dark' href='#1'>
          enjoy your journey!
        </a>
      </div>
    </footer>
  );
};

export default Footer;
