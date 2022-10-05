import React, { useState } from 'react';

import Home from './Home.module.css';

function Intro9() {

    const[text1,setText1] = useState("")
    const[text2,setText2] = useState("")
    const[text3,setText3] = useState("")
    const[text4,setText4] = useState("")
    const[text5,setText5] = useState("")
    

    const handleChange =(e)=>{

        setText1(e.target.value)

    }

    
    const handleChange1 =(e)=>{

        setText2(e.target.value)

    }
    const handleChange2 =(e)=>{

        setText3(e.target.value)

    }
    const handleChange3 =(e)=>{

        setText4(e.target.value)

    }
    const handleChange4 =(e)=>{

        setText5(e.target.value)

    }


    const handleSubmit=(event)=>{

        event.preventDefault();
        alert((text1),(text2))
        


    }




    return (
        <div className={Home.main4}>
            <h3>Contact Us</h3>
            <h1>If You Have Any Qusetion Drop Message</h1>

            <div className={Home.container7}>
                <div className={Home.item8}>

                    <form  onSubmit={handleSubmit}>

                        <input type="text" placeholder='Name' value={text1} onChange={handleChange} id={Home.input1}/>
                        <input type="gmail" placeholder='Gmail' value={text2} onChange={handleChange1} id={Home.input2}/>
                        <input type="text" placeholder='Phone' value={text3} onChange={handleChange2} id={Home.input3}/>
                        <input type="text" placeholder='Subject' value={text4} onChange={handleChange3} id={Home.input4}/>
                        <input type="text" placeholder='Your message' value={text5} onChange={handleChange4} id={Home.input5} />
                        <input type="submit"  className={Home.btn4}disabled={!text1 || !text2 || !text3 || !text4 ||!text5}/>




                    </form>

                </div>

            </div>

        </div>

        
    );
}

export default Intro9;