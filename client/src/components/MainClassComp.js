import React, { Component } from "react";
import ThumbnailsView from "./ThumbnailsView"
import LargeImageView from "./LargeImageView"
import ImageAttributeView from "./ImageAttributeView"
import * as Constant  from "../constants"
import API from "../utils/API"


class Main extends Component {
    
    state = {
        images: [],
        offset: 0,
        error: "",
        selectedImg: "",
        isInitLoad:false
    };
    
    displayThumbnailImages = async (offset,count) => {
        try { 
            const res = await API.getThumbnailImages(offset,count)
            if(res.status === Constant.SUCCESS_STATUS){
                this.setState({images: res.data.images , error: res.data.msg}, () => {
                    if(!this.state.isInitLoad){
                        let tempImageArr = [...this.state.images]
                        this.setState({selectedImg: tempImageArr[0]} )
                        this.setState({isInitLoad: true} )
                    }
                });
            }
        } catch (err) {
           console.log(err)
        }
    };

    componentDidMount = () => {
        this.displayThumbnailImages(this.state.offset, Constant.LIMIT)
    }

    handleShowNext = () => {
        this.setState({offset: this.state.offset + Constant.LIMIT }, () => {
            this.displayThumbnailImages(this.state.offset, Constant.LIMIT)
        });
    };

    handleShowPrevious = () => {
        this.setState({offset: this.state.offset - Constant.LIMIT }, () => {
            this.displayThumbnailImages(this.state.offset , Constant.LIMIT)
        });
    };

    handleImgClick = (e) => {
        e.preventDefault();
        let imgId = e.target.id
        //with this id find the image and meta data from the state array 
        let newArray = [...this.state.images].filter(x => x.id === imgId)
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
                <div id="large"> 
			        <div className="group">
                        <LargeImageView image={this.state.selectedImg} />
                        <ImageAttributeView image={this.state.selectedImg} />
			        </div>
		        </div> 
                <div className="thumbnails">
                    <div className="group">
                        {thumbnails}
                        <button  className={"previous " + (!this.state.offset? "disabled" : "enabled")} onClick={this.handleShowPrevious} disabled={!this.state.offset }></button>
                        <button className={"next " + (this.state.error === "NoNext" ? "disabled" : "enabled")} title="Next" onClick={this.handleShowNext} disabled={this.state.error}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;


