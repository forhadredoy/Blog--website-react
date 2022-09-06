import React from 'react';
import { NavLink } from 'react-router-dom';
import ipad1 from '../img/ipad1.jpg';
import ipad2 from '../img/ipad3.jpg';
import ipad3 from '../img/ipad5.jpg';
import Home from './Home.module.css';
function Intro3() {
    return (
        <div className={Home.intro3}>

            <div className={Home.container2}>
                <img src={ipad1}/>
            <div className={Home.btn1}>
                <button>ABout Ipad1</button>
            </div>
            <div className={Home.navl}>
            <NavLink to="#" className={Home.navlink1}>Learn more</NavLink>

            </div>
          
            </div>


            <div className={Home.container2}>
                <img src={ipad2}/>
            <div className={Home.btn1}>
                <button>About Ipad2</button>
            </div>
            <div className={Home.navl}>
            <NavLink to="#" className={Home.navlink1}>Learn more</NavLink>

            </div>
            </div>
            

            <div className={Home.container2}>
                <img src={ipad3}/>
            <div className={Home.btn1}>
                <button>About Ipad3</button>
            </div>
            <div className={Home.navl}>
            <NavLink to="#" className={Home.navlink1}>Learn more</NavLink>

            </div>
            </div>
            

            
        </div>
    );
}

export default Intro3;