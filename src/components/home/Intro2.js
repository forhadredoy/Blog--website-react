
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import two from '../img/02.jpg';
import three from '../img/03.jpg';
import four from '../img/05.jpg';
import Home from './Home.module.css';

function Intro2() {
    return (
       <div className={Home.main}>
        <h3 className={Home.head3}>Latest News</h3>
        <h1 className={Home.head}>Our Latest Posts For Travellers</h1>
         <div className={Home.container1}>

<div className={Home.item1} id={Home.items1}>
    <img src={two}/><br></br>
    <FontAwesomeIcon icon={faClock} className ={Home.font}/><span className={Home.span}> 10 october 2022</span>
    <h3> Top view concept image of businessman</h3>

</div>

<div className={Home.item1} id={Home.items2}>
    <img src={three}/><br></br>
    <FontAwesomeIcon icon={faClock} className ={Home.font}/><span className={Home.span}> 10 october 2022</span>
    <h3>Top view concept image of businessman</h3>

</div>

<div className={Home.item1} id={Home.items3}>
    <img src={four}/><br></br>
    <FontAwesomeIcon icon={faClock} className ={Home.font}/><span className={Home.span}> 10 october 2022</span>
    <h3> Top view concept image of businessman</h3>

</div>





</div>
       </div>
    );
}

export default Intro2;