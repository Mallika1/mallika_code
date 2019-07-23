/*
==================================================
 @<COPYRIGHT>@
==================================================
 File description:
    This file contains LargeImageView functional component.
    This component diplays the large image of the selected image 

    File   : largeview/index.js
    Component : LargeImageView

=============================================================
 date            name                  description of change

 07/23/2019      Mallika Chakraborty    Initial cration
=============================================================*/
import React from "react"


const LargeImageView = (props) =>{

    const {image,altText,width,height} = props
    if(!image){
        return null
    }
    return(  
        <img src={`images/large/${image}`}  data-test="largeViewComponent"
             alt={altText}
             width={width} 
             height={height} 
        />
    ) 
}
export default LargeImageView;

