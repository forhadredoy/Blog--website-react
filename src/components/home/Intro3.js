import React from 'react';
import six from '../img/06.jpg';
import seven from '../img/07.jpg';
import nine from '../img/09.jpg';
import Home from './Home.module.css';

function Intro3() {
    return (

        <div className={Home.main2}>
            <h3>Tour gellary</h3>
            <h1>Best Tourist Place</h1>
            <div className={Home.container2}>

<div className={Home.item2} id={Home.one}>
<img src={six}/>
<div className={Home.overlay}>
<div className={Home.text}>ebla, Germany</div>
</div>


</div>

<div className={Home.item2} id={Home.two}>
<img src={seven}/>   <div className={Home.overlay}>
<div className={Home.text}>Excute, Netherland</div>
</div>
</div>



<div className={Home.item2} id={Home.three}>
<img src={nine}/>
<div className={Home.overlay}>
<div className={Home.text}>Apm, Swizerland</div>
</div>
</div>


</div>
        </div>

        
       

          
    );
}

export default Intro3;