import React from "react";


const ThumbnailsView = (props) => {

     const {thumbnail,id,width,height,onClick} = props
     if(!thumbnail){
          return null
      }
     
     return (
          <div className="link" data-test="thumbnailViewComponent">
               <img src={`images/thumbnails/${thumbnail}`} id={id}
               alt={id} 
               width={width} 
               height={height} 
               onClick={onClick}
               />
               <span>{id}</span>
          </div>
     );
}
export default ThumbnailsView;

