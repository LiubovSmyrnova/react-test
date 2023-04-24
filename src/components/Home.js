import React from 'react';  
import Footer from "./Footer";
//import ReusableButton from "./ReusableButton";
//importing all the stuff I need to display on our Home page
import ImageDisplay from './ImageDisplay';
import ButtonLink from './ButtonLink';

const Home = () => {
    //displayed one image as we saw in the lesson
    return (
        <div className="container">
            <h1>Hello, my name is Liubov!</h1>
<p>I am an Ukrainian girl living in Sweden. If you want to know more about me check the About me page!</p>
            <ImageDisplay />

            <ButtonLink>About me Page</ButtonLink>
            <Footer />
        </div>
    )
}

export default Home;