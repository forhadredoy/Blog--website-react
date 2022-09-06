import React from 'react';
import iphone2 from '../Video/fif.mp4';
import iphone1 from '../Video/for.mp4';
import Home from './Home.module.css';

function Intro9() {
    return (
        <div className={Home.intro9}>

            <div className={Home.container7}>
            <video width="95%" height="auto" loop autoPlay muted preload="auto">
               <source src={iphone1} type="video/mp4"/>
            </video>
            

            </div>

            <div className={Home.container7}>
            <video width="95%" height="auto" loop autoPlay muted preload="auto">
               <source src={iphone2} type="video/mp4"/>
            </video>
            

            </div>
            
            
        </div>
    );
}

export default Intro9;