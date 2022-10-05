import React from 'react';
import one from '../img/11.jpg';
import two from '../img/12.jpg';
import three from '../img/13.jpg';
import Home from './Home.module.css';

function Intro4() {
    return (

        <div className={Home.container3}>

            <div className={Home.item3} id={Home.four}>
            <img src={one}/>
            <div className={Home.overlay1}>
            <div className={Home.text1}>Kashmir, India</div>
         </div>

            
            </div>
            
            <div className={Home.item3} id={Home.five}>
            <img src={two}/>   <div className={Home.overlay1}>
            <div className={Home.text1}>Zedux, Russia</div>
          </div>
            </div>


            
            <div className={Home.item3} id={Home.six}>
            <img src={three}/>
            <div className={Home.overlay1}>
            <div className={Home.text1}>textic, Spain</div>
         </div>
            </div>
           

        </div>
       

          
    );
}

export default Intro4;