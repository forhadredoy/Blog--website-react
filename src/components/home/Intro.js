import React from 'react';

import Home from './Home.module.css';

function Intro(){
    return (
        <div className={Home.container}>
            <div className={Home.items}>
                <h2>
                To the claims of duty or the obligations of business
                </h2>
                <div className={Home.btn}>
                <button id={Home.button1}>Click</button>
                <button id={Home.button2}>Click</button>
                </div>
                

            </div>
           

            
        </div>
    );
}

export default Intro;