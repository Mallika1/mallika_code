import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getThumbnailImages: function(offset, limit) {
    return axios.get("/api/thumbnailimages/" + offset + "/" +  limit);
   
  }
};
