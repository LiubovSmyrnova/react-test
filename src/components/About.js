import React, { useState } from 'react'; 
import Footer from "./Footer"; 
import Modal from './Modal';
const About = () => {
    const [Status, SetStatus] = useState(false)
    return (
        <>
        <h2>Liubov Smyrnova</h2>
        <p>My name is always difficult to read but don't worry. You can call me Luba if you find it easier.
        On this page you 
        </p>

        { Status && <Modal close = {()=> SetStatus(false)}> 
        <p>Hello</p>
        </Modal>} 
        <button onClick={() => SetStatus(true)}>
            Modal

        </button>
        <div style={{ marginTop: "10px"}} className="link__list">
            <ul>
                <li>
                    Page 1
                </li>
                <li>
                    Page 2
                </li>
                <li>
                    Page 3
                </li>
            </ul>
        </div>
        <Footer />
        </>
    )
}

export default About;