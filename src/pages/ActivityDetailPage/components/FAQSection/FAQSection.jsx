import React from 'react';
import { Button } from 'react-bootstrap';

const FAQSection = () => (
  <div>
    <h3>Have a question?</h3>
    <input type="text" placeholder="Ask your question..." className="faq-search-bar" />
    <Button variant="primary" className="ml-2">Search</Button>
  </div>
);

export default FAQSection;
