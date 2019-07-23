/*
==================================================
 @<COPYRIGHT>@
==================================================
 File description:
    This file contains ImageAttributeView functional component.
    This component diplays the attribute list of the selected image 

    File   : attrview/index.js
    Component : ImageAttributeView

=============================================================
 date            name                  description of change

 07/23/2019      Mallika Chakraborty    Initial cration
=============================================================*/
import React from "react"


const ImageAttributeView = (props) => {
	
	const {title,description,cost,id,thumbnail,image} = props
	if(!title){
		return null
	}
    return(
		<div className="details" data-test="attrViewComponent">
				<p><strong>Title</strong> {title} </p>
				<p><strong>Description</strong> {description} </p>
				<p><strong>Cost</strong> {cost} </p>
				<p><strong>ID #</strong> {id} </p>
				<p><strong>Thumbnail File</strong> {thumbnail} </p>
				<p><strong>Large Image File</strong> {image} </p>
		</div> 
    )
}
export default ImageAttributeView;