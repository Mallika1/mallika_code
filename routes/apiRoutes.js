/*
==================================================
 @<COPYRIGHT>@
==================================================
 File description:
    This file contains rest api to get the image data from the JSON file.

    File   : routes/apiRoutes.js
    Module : Rest API

=============================================================
 date            name                  description of change

 07/23/2019      Mallika Chakraborty    Initial cration
=============================================================*/

//import the JSON data file
const thumbnailImages = require('./data/templates.json')
//import express router for rest api router
const router = require("express").Router()

// =============================================================================
// Rest API to get the image data from JSON file.
// Input:takes two input parameters. Offset and Limit 
// Output: Provides the number of images based on limit data.
// Example: If offset is 0 and limit is 4, returns first four images from the JSON file
// If offset in 4 then return the images from 4 to 8 .
// =============================================================================
router.get("/thumbnailimages/:offset/:limit", (req, res) => {
  
    //Request parameters send from client. 
    let offset = req.params.offset
    let limit = req.params.limit 
    //Calculates limit. 
    limit = parseInt(offset) + parseInt(limit)
    //Length of the JSON array
    let nData = thumbnailImages.length
    //If limit is greater than the array then limit becomes the lenght of the array.
    if(limit > nData){
      limit = nData
    }
    //Error out if offset is greater than the array length or limit is 0.
    if(offset >= nData || limit===0)
    {
        res.status(422).send({ msg: "Invalid parameters " })
    }
    let images = []
    for(let i=offset; i<limit; i++){
        images.push(thumbnailImages[i])
    }
    //Limit equals to nData means there is no more image in the array.
    //this check has been provided for disabling the next button.
    if(limit < nData && images.length>0){
        res.status(200).send({ images: images, first:thumbnailImages[0], msg: false })
    }else{
        res.status(200).send({ images: images, first:thumbnailImages[0], msg: true })
    }
});

module.exports = router;
