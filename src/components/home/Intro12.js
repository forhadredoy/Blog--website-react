import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Card.css';


function Intro12({src,inf }) {
    
    return (

       
             <div className='mycard'>
               
            
            <img
            src={src}
           
      
      className="image"
    />
        
            <FontAwesomeIcon icon={faClock} className="font30"/><span className='span22'>10 Days ago</span>
            <h3> {inf}</h3>
            
        </div>
    )

    }

export default Intro12;