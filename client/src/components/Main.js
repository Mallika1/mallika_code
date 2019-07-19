import React, { Component } from "react";
import ThumbnailsView from "./ThumbnailsView"
import LargeImageView from "./LargeImageView"
import ImageAttributeView from './ImageAttributeView'
import API from "../utils/API";

class Main extends Component {
    
    state = {
        images: [],
        offset: 0,
        error: "",
        selectedImg: "",
        isInitLoad:false
    };
    
    displayThumbnailImages = async (offset,limit) => {

       try { 
            const res = await API.getThumbnailImages(offset,limit)
            if(res.status == 200){
               
                this.setState({images: res.data.images , error: res.data.msg}, () => {
                    if(!this.state.isInitLoad){
                        let tempImageArr = [...this.state.images]
                        this.setState({selectedImg: tempImageArr[0]} )
                        this.setState({isInitLoad: true} )
                    }
                });
               
            }
       } catch (err) {
           console.log({err})
       }
    };

    componentDidMount=()=> {
        this.displayThumbnailImages(this.state.offset, 4)

    }

    handleShowNext = ()=> {

        this.setState({offset: this.state.offset + 4 }, () => {
        console.log(this.state.offset)
        this.displayThumbnailImages(this.state.offset, 4)

        });
       
    };
    handleShowPrevious = () => {
        this.setState({offset: this.state.offset - 4 }, () => {
            console.log(this.state.offset)
            this.displayThumbnailImages(this.state.offset , 4)
        });
       
    };

    handleImgClick = (e) => {
        e.preventDefault();
        let imgId = e.target.id
        //with this id find the image and meta data from the state array 
        var newArray = [...this.state.images].filter(x => x.id === imgId)
        this.setState({selectedImg :newArray[0]})
    }
    
  render() {
         
        const thumbnails = this.state.images.map( img => 
            <ThumbnailsView
            key={img.id}
            title={img.title}
            thumbnail={img.thumbnail}
            id={img.id}
            onClick={this.handleImgClick}
          />
        )
        return(
            <div id="main" role="main">
                {/* {this.state.selectedImg && <div id="large"> */}
                <div id="large"> 
			        <div class="group">
                        <LargeImageView image={this.state.selectedImg} />
                        <ImageAttributeView image={this.state.selectedImg} />
			        </div>
		        </div> 
                 {/* } */}
                <div class="thumbnails">
                    <div class="group">
                        {thumbnails}
                        <button  className={"previous " + (!this.state.offset? 'disabled' : 'enabled')} onClick={this.handleShowPrevious} disabled={!this.state.offset }></button>
                        <button className={"next " + (this.state.error === "NoNext" ? 'disabled' : 'enabled')} title="Next" onClick={this.handleShowNext} disabled={this.state.error}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;


