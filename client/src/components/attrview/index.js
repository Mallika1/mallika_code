import React from "react"


const ImageAttributeView = (props) => {
	const {title,description,cost,id,thumbnail,image} = props.image
    return(
		<div className="details">
				<p><strong>Title</strong>{title}</p>
				<p><strong>Description</strong>{description}</p>
				<p><strong>Cost</strong>{cost}</p>
				<p><strong>ID #</strong>{id}</p>
				<p><strong>Thumbnail File</strong> {thumbnail}</p>
				<p><strong>Large Image File</strong> {image}</p>
		</div> 
    )
}
export default ImageAttributeView;