import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocation, faMessage, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Home from './Home.module.css';

function Button11() {
    return (
      <div className={Home.main7}>
          <div className={Home.container10}>
            <div className={Home.item11}>
                <h1>Unic.com</h1>
                <p> <FontAwesomeIcon icon={faLocation}/> Tupac Amaru 200 - Lima</p>
                <p><FontAwesomeIcon icon={faPhoneAlt}/> +51 0123456789</p>
                <p><FontAwesomeIcon icon={faMessage}/> Info@localhost.xyz</p>

            </div>

            <div className={Home.item11}>
                <h1>Departments</h1>
                <p>Pediatric </p>
                <p>Laboratory</p>
                <p>odontolog</p>
                <p>Physiotherapy</p>
                <p>Opthalmology</p>
                <p>Cynecology</p>

            </div>

            <div className={Home.item11}>
                <h1>Quick Links</h1>
                <p>How wea are </p>
                <p>Terms and conditions</p>
                <p>Privacy</p>
                <p>Our Awards</p>
                <p>testmonials</p>
                <p>Our professionals</p>

            </div>

            <div className={Home.item11}>
                <h1>Opening hours</h1>
                <p>Monday   : 9:00 - 19:00</p>
                <p>Tuesday  : 9:00 - 19:00</p>
                <p>wednesday  : 9:00 - 19:00</p>
                <p>Thusday  : 9:00 - 19:00</p>
                <p>Friday  : 9:00 - 19:00</p>
                <p>Suterday  : 9:00 - 19:00</p>
                <p>Sunday  : Emergency</p>

            </div>
            
            
        </div>

        <div className={Home.container11}>
            <div className={Home.item12}>
                <p>© 2022 Your Company - By Unitemplates</p>
              

            </div>

            <div className={Home.item12}>
                <p>Home</p>
                <p>About Us</p>
                <p>Contact Us</p>
                <FontAwesomeIcon icon={faFacebook} className={Home.font8}/>   <FontAwesomeIcon icon={faInstagram} className={Home.font8}/>   <FontAwesomeIcon icon={faLinkedin} className={Home.font8}/>   <FontAwesomeIcon icon={faTwitter} className={Home.font8}/>
            </div>
          
              

          


        </div>
      </div>
    );
}

export default Button11;