import React from 'react';
import './Footer.css';

const Footer = ({ name }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 {name}. Built with React and CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;