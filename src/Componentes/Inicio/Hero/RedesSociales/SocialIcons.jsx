import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SocialIcons.css'

const socialIcons = [
  {
    icon: faFacebook,
    color: '#fff',
    backgroundColor: '#4267B2',
    link: 'https://www.facebook.com/carollinaygoliat',
  },
  {
    icon: faWhatsapp,
    color: '#fff',
    backgroundColor: '#25D366',
    link: 'https://api.whatsapp.com/send?phone=6251017566',
  },
  {
    icon: faInstagram,
    color: '#fff',
    backgroundColor: '#E1306C',
    link: 'https://www.instagram.com/alkalizmusicboxdragon/',
  },
];

const SocialIcons = () => {
  return (
    <div className="redes">
        <h3>Sígueme en mis redes</h3>
        <ul>
      {socialIcons.map((icon, index) => (
        <li>
        <a
          key={index}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: icon.backgroundColor,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon icon={icon.icon} style={{ color: icon.color }} size="2x" />
        </a>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default SocialIcons