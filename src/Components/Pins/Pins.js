import React, {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { app_id } from '../../config.js';
import loader from '../../media/loader_gif.gif'
import './Pins.css';




class Pins extends Component{
    constructor(){
        super();
        this.state = {
            response: [],
            images: [],
            loaded: false
        }

        this.fetchImages = this.fetchImages.bind(this);
    }

    componentDidMount(){
        axios.get( `https://api.unsplash.com/photos?page=2&per_page=20&client_id=${ app_id }`).then((res) => {
            console.log(res.data);
            this.setState({
                response: res.data,
                image: res.data[0].urls.small
            })
        })
 }

    fetchImages(count){
        count = 10;
        axios.get(`https://api.unsplash.com/photos/random?client_id=${ app_id }&count=${ count }`)
        .then(res => {
            this.setState({
                images: [...this.state.images, ...res.data],
                loaded: true
            })})
    }

    render(){
        let arr = this.state.response;
        let loading = this.state.images;

        return(
            <div id='pins'>
                {/* map has 3 parameters: object on the array, the index, and the full array */}
                {arr.map( (img, id) => {
                    return <div key = { id } id='pin-container'>
                        {/* img is already the object on the array */}
                        <img id="img" src={img.urls.small} />
                        <div id='desc-box'>
                            <p>{img.alt_description} by: {img.user.first_name}</p>
                            <div id='three-dots-option'> ... </div>
                        </div>
                    </div>
                })}
                <InfiniteScroll
                    dataLength={this.state.images}
                    next={() => this.fetchImages(1)}
                    hasMore={true}
                    loader={
                        <img src={ loader } alt='loading' style={{height: '120px'}}/>
                    }
                >
                    {loading.map( (img, id) => {
                        return  <div key = { id } id='pin-container'>
                        {/* img is already the object on the array */}
                            <img id="img" src={img.urls.small} />
                            <div id='desc-box'>
                                <p>{img.alt_description} by: {img.user.first_name}</p>
                                <div id='three-dots-option'> ... </div>
                            </div>
                        </div>
                        })}
                </InfiniteScroll>
            </div>
        )
    }
}

export default Pins;