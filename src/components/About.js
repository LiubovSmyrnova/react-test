import React from 'react'; 
import Footer from "./Footer"; 
const About = () => {
    return (
        <>
        <h2>Liubov Smyrnova</h2>
        <p>My name is always difficult to read but don't worry. You can call me Luba if you find it easier.
        On this page you 
        </p>
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