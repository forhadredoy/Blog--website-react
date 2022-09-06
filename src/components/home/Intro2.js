import React from 'react';
import iphone11 from '../img/iphone11.jpeg';
import iphone12 from '../img/iphone12.jpg';
import iphone13 from '../img/iphone13.jpg';
import Home from './Home.module.css';

function Intro2() {
    return (
        <div className={Home.products}>
            <div className={Home.btn}>
            <button>Our products</button>
            </div>
            
    
        <div className={Home.intro2}>
            
            <div className={Home.container}>
             <img src={iphone13}/>
             <h3>Information</h3>
             <li>Iphone 13</li>
             <li>Released 2021, September 24</li>
             <li>174g, 7.7mm thickness</li>
             <li>iOS 15, up to iOS 15.6</li>
             <li>B/256GB/512GB storage, no card slot</li>
             <li>height : 6.1 inchi 1170x2532 pixels</li>
             <li>Camera:12MP 2160p</li>
             <li> Ram : 4GB RAM Apple A15 Bionic</li>
             <li>Battery: 3240mAh Li-Ion</li>
            </div>
 
 
            <div className={Home.container}>
             <img src={iphone12}/>
             <h3>Information</h3>
             <li>Iphone 12</li>
             <li>Released 2019, September 24</li>
             <li>154g, 7.7mm thickness</li>
             <li>iOS 15, up to iOS 15.6</li>
             <li>B/256GB/512GB storage, no card slot</li>
             <li>height : 5.9 inchi 1170x2532 pixels</li>
             <li>Camera:11MP 2160p</li>
             <li> Ram : 3GB RAM Apple A15 Bionic</li>
             <li>Battery: 3000mAh Li-Ion</li>
            </div>
 
            <div className={Home.container}>
             <img src={iphone11}/>
             <h3>Information</h3>
             <li>Iphone 11</li>
             <li>Released 2018, September 24</li>
             <li>154g, 7.7mm thickness</li>
             <li>iOS 15, up to iOS 15.6</li>
             <li>B/256GB/512GB storage, no card slot</li>
             <li>height : 5.6 inchi 1170x2532 pixels</li>
             <li>Camera:10MP 2160p</li>
             <li> Ram : 3GB RAM Apple A15 Bionic</li>
             <li>Battery: 3000mAh Li-Ion</li>
            </div>
 
         </div>

        </div>
      
    );
}

export default Intro2;