import React from "react";


const ThumbnailsView = (props) => {
     return (
          <div className="link">
               <img src={`images/thumbnails/${props.thumbnail}`} id={props.id}
               alt={props.id} 
               width="145" 
               height="121" 
               onClick={props.onClick}
               />
               <span>{props.id}</span>
          </div>
     );
}
export default ThumbnailsView;

