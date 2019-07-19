import React from "react";


function ThumbnailsView(props) {

  return (
      
       <a href="#" title={props.title} id={props.id}>
          <img src={`images/thumbnails/${props.thumbnail}`} id={props.id}
               alt={props.id} 
               width="145" 
               height="121" 
               onClick={props.onClick}
           />
          <span>{props.id}</span>
       </a> 
                 
    
  );
}

export default ThumbnailsView;

