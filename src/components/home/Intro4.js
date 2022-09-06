import React from 'react';
import { NavLink } from 'react-router-dom';
import imac4 from '../img/imac4.jpg';
import imac1 from '../img/mac1.jpg';
import imac2 from '../img/mac2.jpg';
import Home from './Home.module.css';

function Intro4() {
    return (
        <div className={Home.intro4}>

        <div className={Home.container3}>
            <img src={imac1}/>
        <div className={Home.btn2}>
            <button>ABout Imac1</button>
        </div >
        <div className={Home.navl1}>
        <NavLink to="#">Learn more</NavLink>
        </div>
        
        </div>


        <div className={Home.container3}>
            <img src={imac2}/>
        <div className={Home.btn2}>
            <button>About Imac2</button>
        </div>
        <div className={Home.navl1}>
        <NavLink to="#">Learn more</NavLink>
        </div>
        
       
        </div>
        

        <div className={Home.container3}>
            <img src={imac4}/>
        <div className={Home.btn2}>
            <button>About Imac3</button>
        </div>
        <div className={Home.navl1}>
        <NavLink to="#">Learn more</NavLink>
        </div>
        
        </div>
        

        
    </div>
);
    
}

export default Intro4;