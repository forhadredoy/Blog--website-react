import React from 'react';
import { NavLink } from 'react-router-dom';
import imac from '../img/imac55.jpg';
import iphone from '../img/iphnnnn.jpg';
import ipad from '../img/ippppp.jpg';
import Home from './Home.module.css';

function Intro8() {
    return (
        <div className={Home.intro8}>

            <div className={Home.container6}>
                
                <img src={iphone}/>
                <img src={imac}/>
                <img src={ipad}/>

            </div>

            <div className={Home.container61}>
                <h1>Privacy that Apple</h1>
                <NavLink to='#' className={Home.navl4}>Learn more</NavLink>

            </div>
            
        </div>
    );
}

export default Intro8;