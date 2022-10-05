
import React from 'react';
import one from '../img/band1.jpg';
import two from '../img/band2.jpg';
import three from '../img/band3.jpg';
import four from '../img/band4.jpg';
import five from "../img/band5.jpg";
import Home from './Home.module.css';

function Intro8() {
    return (

   <div className={Home.main3}>
    <h1> Our Bands</h1>
       <div className={Home.container6}>
        <div className={Home.item7}>

            <img src={one}/>

        </div>
          <div className={Home.item7}>

            <img src={two}/>

        </div>

        <div className={Home.item7}>

            <img src={three}/>

        </div>
          <div className={Home.item7}>

            <img src={four}/>

        </div>

          <div className={Home.item7}>

            <img src={five}/>

        </div>


      </div>

        

   </div>
          
    );
}

export default Intro8;