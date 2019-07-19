var thumbnailImages = require('./data/templates.json');
const router = require("express").Router();


router.get("/thumbnailimages/:offset/:limit", (req, res) => {

   
    let offset = req.params.offset
    let limit = req.params.limit 

    console.log("In offset******" + offset)
    console.log("In limit******" + limit)
    console.log("length" + thumbnailImages.length)

    let images = []
    limit = parseInt(offset) + parseInt(limit)
    let nData = thumbnailImages.length
    if(limit > nData){
      limit = nData
    }
    if(offset >= nData)
    {
        res.status(422).send({ msg: "Invalid offset parameter " });
    }
      
      for(let i=offset; i<limit; i++){
        images.push(thumbnailImages[i])
      }
    
      if(limit < nData && images.length>0){
        res.status(200).send({ images: images, msg: "" })
      }else{
        res.status(200).send({ images: images, msg: "NoNext" })
      }
});

module.exports = router;
