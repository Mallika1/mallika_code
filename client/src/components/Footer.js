import React from "react"


const Footer = (props) => {
    return(  
        <footer>
		    <a href="instructions.pdf">{props.children}</a>
        </footer>
    ) 
}
export default Footer;


    