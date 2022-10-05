import React from 'react';
import ten from '../img/02.jpg';
import one from "../img/18.jpg";
import two from '../img/19.jpg';
import three from '../img/20.jpg';
import five from '../img/22.jpg';
import six from '../img/23.jpg';
import four from '../img/24.jpg';
import seven from '../img/25.jpg';
import eight from '../img/26.jpg';
import nine from '../img/27.jpg';
import './Card.css';
import Intro12 from './Intro12';

function Intro14() {
    let box =document.querySelector('.product-container')

    const handleClick = () =>{
        let width = box.clientWidth;
        box.scrollLeft =box.scrollLeft - width/2


    }

    const handleClick1 =()=>{
        let width = box.clientWidth;
        box.scrollLeft =box.scrollLeft + width/2


    }

    
    return (
        <div className='product-carousel'>
             <button className="prev" onClick={handleClick}><p> {"<"} </p></button>
            <button className="next" onClick={handleClick1}><p> {">"} </p></button>
          

           <div className='product-container'>
          <Intro12 cardno ="1"   src={one}
      width="auto"
      height="465" inf="verline, Germany"/>
             <Intro12 cardno ="1"   src={two}
      width="auto"
      height="465" inf ="Teta, France"/>
         <Intro12 cardno ="1"   src={three}
      width="auto"
      height="465" inf="rel, Netherland"/>
         <Intro12 cardno ="1"   src={four}
      width="auto"
      height="265" inf="mef, Spain"/>
         <Intro12 cardno ="1"   src={five}
      width="auto"
      height="265" inf="hera, mongolia"/>
         <Intro12 cardno ="1"   src={six}
      width="auto"
      height="265" inf= "yangcu,Chaina"/>
         <Intro12 cardno ="1"   src={seven}
      width="auto"
      height="265"
      inf="herf ,Lahor"/>
         <Intro12 cardno ="1"   src={eight}
      width="auto"
      height="265" inf = "Fera, UK"/>
         <Intro12 cardno ="1"   src={nine}
      width="auto"
      height="265" inf= "Semera, USA"/>
         <Intro12 cardno ="1"   src={ten}
      width="auto"
      height="265" inf = "herki, Japan"/>
        

           </div>
            
        </div>
    );
}

export default Intro14;