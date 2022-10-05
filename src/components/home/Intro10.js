import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import one from "../img/18.jpg";
import two from '../img/19.jpg';
import three from '../img/20.jpg';
import five from '../img/22.jpg';
import six from '../img/23.jpg';
import four from '../img/24.jpg';
import Home from './Home.module.css';

 function Intro10() {
    return (

       

         
            <div className={Home.container8}>
                <div className={Home.item9}>
                    <img  src= {one}/>
                    <h2>Burj Khalifa ,Dubai</h2>
                    <FontAwesomeIcon icon={faClock}/><span>10 days trip</span>
                </div>



                <div className={Home.item9}>
                    <img  src= {two}/>
                    <h2>Samesha,UK</h2>
                    <FontAwesomeIcon icon={faClock}/><span>10 days trip</span>
                </div>

                <div className={Home.item9}>
                    <img  src= {three}/>
                    <h2>Heric,USA</h2>
                    <FontAwesomeIcon icon={faClock}/><span>10 days trip</span>
                </div>

                <div className={Home.item9}>
                    <img  src= {four}/>
                    <h2>Horisc,Germany</h2>
                    <FontAwesomeIcon icon={faClock}/><span>10 days trip</span>
                </div>
                <div className={Home.item9}>
                    <img  src= {five}/>
                    <h2>Milita,France</h2>
                    <FontAwesomeIcon icon={faClock}/><span>10 days trip</span>
                </div>


                <div className={Home.item9}>
                    <img  src= {six}/>
                    <h2>Mesta,Spain</h2>
                    <FontAwesomeIcon icon={faClock}/><span>10 days trip</span>
                </div>

            </div>

      

    );
}

export default Intro10;