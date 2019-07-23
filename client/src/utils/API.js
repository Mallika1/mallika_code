/*
==================================================
 @<COPYRIGHT>@
==================================================
 File description:
    This file contains rest api call to get the image data from the server.

    File   : src/API.js
    Module : Client 

=============================================================
 date            name                  description of change

 07/23/2019      Mallika Chakraborty    Initial cration
=============================================================*/
import axios from "axios";

// The getThumbnailImages method retrieves images from the server
// It accepts offset and limit parameters to get the images.
export default {
  getThumbnailImages: function(offset, limit) {
    return axios.get("/api/thumbnailimages/" + offset + "/" +  limit);
  }
};
