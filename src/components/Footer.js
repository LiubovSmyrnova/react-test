import React from "react";
import ukraine from "../images/ukraine.png"; 
function Footer (){  
  return (
     //I made am extra button with link to the About page /added urkainian icon
         <footer>BE BRAVE LIKE UKRAINE!
       
          <img src={ukraine} alt="Ukrainian flag" height={80} width={60} />
      
         </footer>
     
  )
 }  
 export default Footer;  
