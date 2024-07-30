import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

function Footer() {
  
  const handleSendMessage = () => {
    const url = `https://api.whatsapp.com/send?phone=6251017566`;
    window.open(url, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Alkaliz</h3>
            <p>Disponible para cotizaciones sin compromiso bla bla bla</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Me</h3>
            <ul>
              <li><a href="https://www.instagram.com/alkalizmusicboxdragon/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" color="#e1306c"  /></a></li>
              <li><a href="https://www.facebook.com/carollinaygoliat" target="_blank"><FontAwesomeIcon icon={faFacebook} size="lg" color="#007bff"/></a></li>
              <li><a href='#'><FontAwesomeIcon icon={faWhatsapp} size="lg" color="#25D366" onClick={handleSendMessage}/></a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:Goliatycaro113@hotmail.com">Goliatycaro113@hotmail.com</a></p>
            <p>Phone: 625 101 7566</p>
          </div>
        </div>
        <p className="copyright">Copyright 2023 Alkaliz.</p>
      </div>
    </footer>
  );
}

export default Footer;