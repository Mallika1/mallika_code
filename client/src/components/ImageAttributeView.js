import React from 'react'


function ImageAttributeView(props){
    return(
            <div class="details">
					<p><strong>Title</strong>{props.image.title}</p>
					<p><strong>Description</strong>{props.image.description}</p>
					<p><strong>Cost</strong>{props.image.cost}</p>
					<p><strong>ID #</strong>{props.image.id}</p>
					<p><strong>Thumbnail File</strong> {props.image.thumbnail}</p>
					<p><strong>Large Image File</strong> {props.image.image}</p>
		    </div> 
  
    )
}
export default ImageAttributeView;