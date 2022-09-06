import React from 'react';
import { NavLink } from 'react-router-dom';
import imac from '../img/imac.jpg';
import ipad from '../img/ipad.jpg';
import iphone from '../img/iphone.jpg';
import Home from './Home.module.css';

function Intro(){
    return (
        <div className={Home.intro}>
            <div className={Home.content}>
                <img src={iphone}/>
                <div className={Home.content1}>
                <button>Buy</button>
                <NavLink to="#" className={Home.navlink}>Learn more</NavLink>
                </div>
               
            </div>

            <div className={Home.content}>
                <img src={ipad}/>
                <div className={Home.content1}>
                <button>Buy</button>
                <NavLink to="#" className={Home.navlink}>Learn more</NavLink>
                </div>
               
            </div>
            
            <div className={Home.content}>
                <img src={imac}/>
                <div className={Home.content1}>
                <button>Buy</button>
                <NavLink to="#" className={Home.navlink}>Learn more</NavLink>
                </div>
               

            </div>

            
        </div>
    );
}

export default Intro;