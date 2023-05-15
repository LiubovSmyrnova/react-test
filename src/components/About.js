import React, { useState } from 'react'; 
import Footer from "./Footer"; 
import Modal from './Modal';
import kaspiy from "../images/Kaspiy.jpg";
import bamon from "../images/Bamon.jpg"
import bamonTur from "../images/Bamon-tur.jpg"
import cutiepie from "../images/cutiepie.jpg"
//importing all that is important
//modal is set to false from the beginning
//popping up only by clicking on the button/turns to true and showing the message
const About = () => {
    const [Status, SetStatus] = useState(false)
    //a lot of text and pictures :)
    return (
        <>
        
        <h2>Liubov Smyrnova</h2>
        <p>My name is always difficult to read but don't worry. You can call me Luba if you find it easier.
        On this page you will get to know me a bit better. Lets get started!
        </p>

        { Status && <Modal close = {()=> SetStatus(false)}> 
        <p>Just wanted to wish you a good day!</p>
        </Modal>} 
        <button onClick={() => SetStatus(true)}>
            Click here!
        </button>
        
        <div style={{ marginTop: "10px"}} className="link__list">
            <ul>
                <li className='bamonlist'>
                    About thing I love most in this world - Horses!
                    From very early age I was crazy about animals, especially horses and luckily 
                    I could start at riding school when I was 10. Here is where everything started!
                    <img src={kaspiy} alt="first horse" height={400} width={300} />
                </li>
                
                <li>
                    After a few years I've become a much better rider despite my bad fall of the horse
                    and broken arm. So I started to compete in dressage and was a part of Junior Team representing
                    my region in Ukrainian Championship 2015. Here is some pictures from that time and my lovely
                    horse Bamon wich I lost a year after our big debut. 
                    <img src={bamon} alt="Bamonchik" height={400} width={280} />
                    <img src={bamonTur} alt="Bamonchik-tur" height={400} width={600} />
                    <img src={cutiepie} alt="bamonCute" height={500} width={350} />
                </li>
                <li>
                    Because of horses and animals generally I wanted to work with animals so
                    I went to the Agriculture University. And I've got a chance to have practice
                    abroad. That's how I ended up in Denmark and now in Sweden! I was working with
                    horses and pigs for last 5 years.
                </li>
            </ul>
        </div>
        <Footer />
        </>
    )
}
//i imported pictures direclty here, hope it's working fine 
export default About;