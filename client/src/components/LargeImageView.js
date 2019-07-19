import React from 'react'


function LargeImageView(props)
{
    
    return(  
                   <img  src={`images/large/${props.image.image}`} 
                    alt="Large" 
                    width="430" 
                    height="360" />
    ) 
}
export default LargeImageView;

