import React, {Component} from 'react'
import axios from 'axios';
import { app_id } from '../../config.js';
import './Pins.css';




class Pins extends Component{
    constructor(){
        super();
        this.state = {
            response: '',
            image: '',
        }
    }

    componentDidMount(){
        axios.get( 'https://api.unsplash.com/photos?page=1&client_id=' + app_id ).then((res) => {
            console.log(res.data);
            console.log(res.data[0].urls.regular)
            this.setState({
                image: res.data[0].urls.small
            })
        })
    }

    render(){
        return(
            <div>
                <div id='pin-test'>
                    <img src= { this.state.image } />
                </div>
            </div>
        )
    }
}

export default Pins;