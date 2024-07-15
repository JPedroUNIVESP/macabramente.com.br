import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialMediaComponent = () => {
  const instagramUrl = 'https://www.instagram.com/seu_usuario/';
  const whatsappUrl = 'https://wa.me/seu_numero';

  return (
    <div style={styles.container}>
      <img
        src="url_da_sua_imagem"
        alt="Imagem central"
        style={styles.image}
      />
      <div style={styles.iconContainer}>

        <p>teste</p>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaInstagram size={32} />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaWhatsapp size={32} />
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  iconContainer: {
    marginTop: '20px',
  },
  icon: {
    margin: '0 10px',
    color: '#000',
  },
};

export default SocialMediaComponent;
