import Home from './Home.module.css';
import Intro10 from './Intro10';

function Intro11() {

    let box = document.querySelector('.container8')

    const handlePrev = () => {
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft - width


    }

   
    const handleNext = () => {
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft + width


    }


    return (

    

        <div className={Home.main5}>

            <h3>Destination</h3>
            <h1>Travel most popular place</h1>
             <div className={Home.container9} >
            <button className={Home.prev} onClick={handlePrev}><p> {"<"} </p></button>
            <button className={Home.nxt}  onClick={handleNext}><p> {">"} </p></button>

            <div className={Home.container8}>
                <Intro10/>
            </div>
            
           

           
            
        </div>
        </div>
       
    );
}

export default Intro11;