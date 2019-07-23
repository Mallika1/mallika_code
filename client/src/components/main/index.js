/*
==================================================
 @<COPYRIGHT>@
==================================================
 File description:
    This file contains main component which is written using react hooks.
    Three of the react hooks has been used (useState, useEffect, useCallback)

    File   : main/index.js
    Component : Main

=============================================================
 date            name                  description of change

 07/23/2019      Mallika Chakraborty    Initial cration
=============================================================*/

//Import for React module , react hooks and custom function components
import React, { useState, useEffect, useCallback } from "react";
import ThumbnailsView from "../thumbnailview"
import LargeImageView from "../largeview"
import ImageAttributeView from "../attrview"
import * as Constant  from "../../constants"
import API from "../../utils/API"

function Main() {
  // =============================================================================
  // useState is a React Hook returns a pair: the current state value and a function  
  // to update it
  // React will preserve this state between re-renders.
  // it doesn’t merge the old and new state together.
  // =============================================================================
  const [imageArr, setImageArr] = useState([]);
  const [error, setError] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [offset, setOffset] = useState(0);
  
  // =============================================================================
  // This a generic function calls when offset state variable changes on previous and next 
  // button click. Indside it calls a rest API and gets the image data from server
  // Output: No of image data based on Limit. 
  // Example: If Limit is 4 and offset is 0,then first four Thumbnail images display.
  // =============================================================================
  const  displayThumbnailImages = async (offset, count) =>{
    try { 
        const res = await API.getThumbnailImages(offset,count)
        if(res.status === Constant.SUCCESS_STATUS){
          setImageArr(res.data.images)
          setError(res.data.msg)
        }
    } catch (err) {
      console.log(Constant.INVALID_PARAMS_TEXT)
    }
  }
  // =============================================================================
  // react useEffect() hook calls web page on load. Same as componentDidMount() lifecycle 
  // method. Essentially fetches data from server using a rest api call. 
  // Defaul gets four thumbnail images and offset starts at 0
  // Output: thumbnail images, error msg(if any) and default large image
  // =============================================================================
  useEffect(() => {
    const displayImagesOnload = async () => {
    const res = await API.getThumbnailImages(0,Constant.LIMIT)
    let tempImageArr = res.data.images
    setImageArr(tempImageArr)
    setError(res.data.msg)
    setSelectedImg(tempImageArr[0])
    };

    displayImagesOnload(0,4)
  }, [])

  // =============================================================================
  // React hook calls when offset state variable changes.
  // =============================================================================
  useEffect(() => {
    displayThumbnailImages(offset, Constant.LIMIT)
  }, [offset])

  // =============================================================================
  // react useCallBack() hook calls when a thumbnail image is selected. 
  // It gets the id of the selected image and then find that image from the imageArr. 
  // and then updates the selectedImg state variable 
  // Output: sets the new value to selectedImg state variable
  // =============================================================================
  const handleImgClick = useCallback((e) => {
    e.preventDefault();
    let imgId = e.target.id
    let newArray = [...imageArr].filter(x => x.id === imgId)
    setSelectedImg(newArray[0])
  }, [imageArr])

  //return react element
  return (
    <div id="main" role="main">
      <div id="large"> 
     		<div className="group">
          {/* renders when selected image changes */}
          <LargeImageView image={selectedImg.image} 
                          altText="Large"
                          width="430"
                          height="360"
                          />
          <ImageAttributeView title={selectedImg.title}
                              description={selectedImg.description}
                              cost={selectedImg.cost}
                              id={selectedImg.id}
                              thumbnail={selectedImg.thumbnail}
                              image={selectedImg.image} 
                            />
     		</div>
     	</div> 
       {/* renders the thumbnail views based on the image value in inagArr */}
      <div className="thumbnails">
        <div className="group"> 
          {imageArr.map( img => 
          <ThumbnailsView
            key={img.id}
            thumbnail={img.thumbnail}
            id={img.id}
            width="145"
            height="121"
            onClick={handleImgClick}
          />
          )}
          {/* offset value changes on previous and next button click 
          If no image left then next button gets disabled. same with previous*/}
          <button  className={"previous " + (!offset? "disabled" : "enabled")} onClick={() => setOffset(offset - Constant.LIMIT)} disabled={!offset }></button>
          <button className={"next " + (error? "disabled" : "enabled")}  onClick={() => setOffset(offset + Constant.LIMIT)} disabled={error}>Next</button>
        </div>
      </div>
    </div>
  );
}
export default Main