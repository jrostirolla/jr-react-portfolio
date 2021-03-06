import React from 'react';

const styles = {
  background: {
    background: 'rgb(243, 94, 8)',
  },
  text: {
    color: 'black',
  },
  name: {
    color: 'black',
    position: 'fixed',
    right: '0',
    padding: '10px',
    fontSize: '20px',
    fontWeight: 'bolder',
  }
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
    <ul style={styles.background} className="nav nav-tabs">
      <li style={styles.text} className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li style={styles.text} className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li style={styles.text} className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li style={styles.text} className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>    
      <li style={styles.name}>James Rostirolla</li>
    </ul>

    </div>
  );
}

export default NavTabs;
