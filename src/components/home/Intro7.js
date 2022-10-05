import { faPerson, faTaxi, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Home from './Home.module.css';

function Intro7() {
    return (
       
  


<div className={Home.container5}>

<div className={Home.item6} id={Home.unic1}>

    <FontAwesomeIcon icon={faUtensils} className={Home.font2}/><span className={Home.span1}>Delicois Food</span>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeats</p>

</div>

<div className={Home.item6} id={Home.unic2}>

    <FontAwesomeIcon icon={faTaxi} className={Home.font2}/><span className={Home.span1}>Airport taxi </span>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeats</p>

</div>


<div className={Home.item6} id={Home.unic3}>

    <FontAwesomeIcon icon={faPerson} className={Home.font2}/><span className={Home.span1}>Tour Guide</span>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeats</p>

</div>


</div>

    );
}

export default Intro7;