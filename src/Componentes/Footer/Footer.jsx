import React from 'react';
import './Footer.css'

function Footer() {
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
              <li><a href="#" target="_blank">Instagram</a></li>
              <li><a href="#" target="_blank">Facebook</a></li>
              <li><a href="#" target="_blank">Twitter</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:Goliatycaro113@hotmail.com">Goliatycaro113@hotmail.com</a></p>
            <p>Phone: 625 101 7566</p>
          </div>
        </div>
        <p className="copyright">Copyright 2023 Alkaliz. rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;