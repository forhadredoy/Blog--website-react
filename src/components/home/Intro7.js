import React from 'react';
import { NavLink } from 'react-router-dom';
import back from '../img/back.jpg';
import font from '../img/font.jpg';
import Home from './Home.module.css';

function Intro7() {
    return (
        <div className={Home.intro7}>
            <div className={Home.container5}>
                <h1> Trade in your smartphone for credit.</h1>
                <p>With Apple Trade In, you can get credit toward a new iPhone when you trade in an eligible smartphone.6 It’s good for you and the planet.</p>
                <NavLink to="#" className={Home.navl3}>Learn more</NavLink>
                <img src={back}/>

            </div>

           
            <div className={Home.container5}>
                <h1> Get 3% Daily Cashback with Apple Card.</h1>
                <p>And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments.*</p>
                <NavLink to="#" className={Home.navl3}>Learn more</NavLink>
                <img src={font}/>

            </div>


            
        </div>
    );
}

export default Intro7;