// src/components/Footer.js
import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.iconContainer}>
        <a href="https://www.instagram.com/macabra.mente" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaInstagram size={20} />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=5519991320789&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaWhatsapp size={20} />
        </a>
      </div>
      <p style={styles.paragraph}>Carolini Marangoni - CRP 06/159340</p>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
    backgroundColor: 'rgb(28,30,26)',
  },
  iconContainer: {
    marginTop: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s, transform 0.3s',
  },
  paragraph: {
    color: 'white',
    margin: '0',
    marginTop: '10px',
    fontSize: '1.1em',
    fontFamily: 'Chapbook',
  },
  iconHover: {
    color: '#1DA1F2',
    transform: 'scale(1.1)',
  }
};

export default Footer;
