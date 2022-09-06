import React from 'react';
import { NavLink } from "react-router-dom";
import iphone from '../Video/Iphone.mp4';
import Home from "./Home.module.css";

function Intro5() {
    return (

        
        <div className={Home.intro5}>
            <div className={Home.videos}>
            <video width="80%" height="auto" loop autoPlay muted preload="auto">
               <source src={iphone} type="video/mp4"/>
            </video>
            </div>
            
            <div className={Home.content3}>
            <NavLink to='#' className={Home.navl2}> The Fastest cheap a smart phone</NavLink>
                <h1 className={Home.head}>the best</h1>
                <h1 className={Home.head1}>Bettery life</h1>
                <h1 className={Home.head2}>Ever on</h1>
                <h1 className={Home.head3}>Iphone</h1>
            </div>

            
            </div>
            
       
    );
}

export default Intro5;