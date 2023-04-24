import React from "react";
import ukraine from "../images/ukraine.png"; 
function Footer (){  
  return (
     //added urkainian icon whicg needs some css fix :)
         <footer>BE BRAVE LIKE UKRAINE!
       
          <img className="ukrLogo" src={ukraine} alt="Ukrainian flag" height={80} width={60} />
      
         </footer>
     
  )
 }  
 //footer is showing on all pages by importing on each of them
 export default Footer;  
