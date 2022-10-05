import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import one from '../img/ishpa.jpg';
import two from '../img/ishpa1.jpg';
import three from '../img/ishpa2.jpg';
import './Intro15.css';

function Home15() {
    return (
       <div className='main'>
        <h3>Test Monials </h3>
        <h1>What Saying our Happy Customers</h1>
         <div className='element'>
              <div className="conatainer">

                
      <div className="item">
        <img src= {one}/>
      </div>
      <div className="text">
        
        <p>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
        <h2>Sanjana Afrin Ishpa</h2>

        <div className="btn">
          <button>Profile</button>
          <button>Message</button>
        </div>

        <div className="font">

          <FontAwesomeIcon icon={faFacebook} className="icon"/>
          <FontAwesomeIcon icon={faInstagram} className="icon"/>
          <FontAwesomeIcon icon={faTwitter} className="icon"/>
          <FontAwesomeIcon icon={faLinkedin} className="icon"/>
       
        </div>
      </div>
    </div>


    <div className="conatainer">

                
<div className="item">
  <img src= {two}/>
</div>
<div className="text">
  
  <p>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
  <h2>Sanjana Afrin Ishpa</h2>

  <div className="btn">
    <button>Profile</button>
    <button>Message</button>
  </div>

  <div className="font">

<FontAwesomeIcon icon={faFacebook} className="icon"/>
<FontAwesomeIcon icon={faInstagram} className="icon"/>
<FontAwesomeIcon icon={faTwitter} className="icon"/>
<FontAwesomeIcon icon={faLinkedin} className="icon"/>

</div>
</div>
</div>


<div className="conatainer">

                
<div className="item">
  <img src= {three}/>
</div>
<div className="text">
  
  <p>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
  <h2>Sanjana Afrin Ishpa</h2>

  <div className="btn">
    <button>Profile</button>
    <button>Message</button>
  </div>

  <div className="font">

<FontAwesomeIcon icon={faFacebook} className="icon"/>
<FontAwesomeIcon icon={faInstagram} className="icon"/>
<FontAwesomeIcon icon={faTwitter} className="icon"/>
<FontAwesomeIcon icon={faLinkedin} className="icon"/>

</div>
</div>
</div>
            
        </div>
       </div>
    );
}

export default Home15;