import one from '../img/101.png';
import two from '../img/102.png';
import three from '../img/103.png';
import four from '../img/104.png';
import five from '../img/14.jpg';
import Home from './Home.module.css';

function Intro5() {
    return (

        <div className={Home.container4}>
            <div className={Home.item4}>

                <div className={Home.element1}>
                    <img src={one}/>
                    <h2>Activities</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat itaque</p>
                   
            
                </div>

                <div className={Home.element1}>
                    <img src={two}/>
                    <h2>Travel Arrangements</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat itaque</p>
                   
            
                </div>

                <div className={Home.element1}>
                    <img src={three}/>
                    <h2>Private Guide</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat itaque</p>
                   
            
                </div>


                
                <div className={Home.element1}>
                    <img src={four}/>
                    <h2>Location Manager</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat itaque</p>
                   
            
                </div>






            </div>

            <div className={Home.item5}>
                <img src={five}/>

            </div>

        </div>
       
       
    );
}

export default Intro5;