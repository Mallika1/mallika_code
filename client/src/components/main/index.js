import React, { useState, useEffect } from 'react';
import ThumbnailsView from "../thumbnailview"
import LargeImageView from "../largeview"
import ImageAttributeView from "../attrview"
import * as Constant  from "../../constants"
import API from "../../utils/API"

function Main() {
  // Declare a new state variable
  const [imageArr, setImageArr] = useState([]);
  const [error, setError] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [offset, setOffset] = useState(0);

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
  
  const  displayThumbnailImages = async (offset, count) =>{
    try { 
        const res = await API.getThumbnailImages(offset,count)
        if(res.status === Constant.SUCCESS_STATUS){
          setImageArr(res.data.images)
          setError(res.data.msg)
        }
    } catch (err) {
      console.log(err)
    }
  }

  const handleShowNext = () => {
    setImageArr([])
    setOffset(offset + Constant.LIMIT)
    displayThumbnailImages(offset+Constant.LIMIT, Constant.LIMIT)
  };

  const handleShowPrevious = () => {
    setOffset(offset-Constant.LIMIT)
    displayThumbnailImages(offset-Constant.LIMIT, Constant.LIMIT)
  };

  const handleImgClick = (e) => {
    e.preventDefault();
    let imgId = e.target.id
    //with this id find the image and meta data from the state array 
    let newArray = [...imageArr].filter(x => x.id === imgId)
    setSelectedImg(newArray[0])
  }

  return (
    <div id="main" role="main">
      <div id="large"> 
     		<div className="group">
          <LargeImageView image={selectedImg} />
          <ImageAttributeView image={selectedImg} />
     		</div>
     	</div> 
      <div className="thumbnails">
        <div className="group"> 
          {imageArr.map( img => 
          <ThumbnailsView
            key={img.id}
            title={img.title}
            thumbnail={img.thumbnail}
            id={img.id}
            onClick={handleImgClick}
          />
          )}
          <button  className={"previous " + (!offset? "disabled" : "enabled")} onClick={handleShowPrevious} disabled={!offset }></button>
          <button className={"next " + (error? "disabled" : "enabled")} title="Next" onClick={handleShowNext} disabled={error}>Next</button>
        </div>
      </div>
    </div>
  );
}
export default Main