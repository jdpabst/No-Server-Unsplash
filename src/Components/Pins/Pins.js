import React, {Component} from 'react'
import axios from 'axios';
import { app_id } from '../../config.js';
import './Pins.css';




class Pins extends Component{
    constructor(){
        super();
        this.state = {
            response: [],
            image: '',
        }
    }

    componentDidMount(){
        axios.get( 'https://api.unsplash.com/photos?page=2&per_page=30&client_id=' + app_id ).then((res) => {
            console.log(res.data);
            this.setState({
                response: res.data,
                image: res.data[0].urls.small
            })
            console.log(this.state.response[0].urls.small)
        })
    }

    render(){
        let arr = this.state.response;

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
                
            </div>
        )
    }
}

export default Pins;