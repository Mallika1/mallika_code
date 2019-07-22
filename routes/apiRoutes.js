const thumbnailImages = require('./data/templates.json');
const router = require("express").Router();


router.get("/thumbnailimages/:offset/:limit", (req, res) => {

   
    let offset = req.params.offset
    let limit = req.params.limit 
    limit = parseInt(offset) + parseInt(limit)
    console.log( "offset"+ offset) 
    let nData = thumbnailImages.length
    console.log("length" + nData)
    
    if(limit > nData){
      limit = nData
      console.log( "limit" + limit)
    }
    if(offset >= nData || limit===0)
    {
        res.status(422).send({ msg: "Invalid parameters " });
    }
    let images = []
   

    for(let i=offset; i<limit; i++){
        images.push(thumbnailImages[i])
        console.log(thumbnailImages[i])
    }
    
    if(limit < nData && images.length>0){
        res.status(200).send({ images: images, msg: false })
    }else{
        res.status(200).send({ images: images, msg: true })
    }
});

module.exports = router;
