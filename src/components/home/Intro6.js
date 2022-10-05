import { faFileMedicalAlt, faRestroom, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Home from './Home.module.css';

function Intro6() {
    return (
       
  <div className={Home.main3}>
    <h3>Services</h3>
    <h1>We Offer For You</h1>


<div className={Home.container5}>

<div className={Home.item6} id={Home.unic1}>

    <FontAwesomeIcon icon={faRestroom} className={Home.font2}/><span className={Home.span1}>Delux Room</span>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeats</p>

</div>

<div className={Home.item6} id={Home.unic2}>

    <FontAwesomeIcon icon={faWifi} className={Home.font2}/><span className={Home.span1}>Free Wifi</span>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeats</p>

</div>


<div className={Home.item6} id={Home.unic3}>

    <FontAwesomeIcon icon={faFileMedicalAlt} className={Home.font2}/><span className={Home.span1}>Free Medication</span>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeats</p>

</div>


</div>

  </div>
    );
}

export default Intro6;