import React from 'react';
import { NavLink } from 'react-router-dom';
import iphn from '../img/Iphn.jpg';
import iphn1 from '../img/iphn1.jpg';
import iphn2 from '../img/iphn2.jpg';
import iphn3 from '../img/iphn3.jpg';
import Home from './Home.module.css';

function Intro6() {
    return (
        <div className={Home.intro6} >
            <div className={Home.container4}> 
            <img src={iphn} className={Home.img3}/>
            <img src={iphn1} className={Home.img4}/>
            </div>

            <div className={Home.container4}> 
            <h1>Why Apple is the best place to buy iPhone.</h1>
            <p>You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly.
           You can also chat with a Specialist anytime.
           You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly.
           You can also chat with a Specialist anytime.
           You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly.
           You can also chat with a Specialist anytime.
           You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly.
           You can also chat with a Specialist anytime.
           You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly.
           You can also chat with a Specialist anytime.
           You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly.
           You can also chat with a Specialist anytime.
           You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly.
           You can also chat with a Specialist anytime.</p>
           <NavLink to='#'
           className={Home.navl5}>
           </NavLink>
            
            </div>

            <div className={Home.container4}> 
            <img src={iphn2} className={Home.img5}/>
            <img src={iphn3} className={Home.img6}/>
            </div>
            
        </div>
    );
}

export default Intro6;