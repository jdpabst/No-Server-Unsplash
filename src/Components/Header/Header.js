import React, {Component} from 'react'
import logo from '../../media/logo.png';
import search from '../../media/search_icon.png';
import following from '../../media/following_icon.png';
import notifications from '../../media/bell_icon.png';
import messages from '../../media/message_icon.ico';
import saved from '../../media/profile_icon.png';
import camera from '../../media/camera-icon.png'
import './Header.css';

class Header extends Component{

    render(){
        return(
            <div>
                <div id="top-nav">

                    {/* SEARCH BAR REDIRECTS TO ANOTHER PAGE WHERE THERE IS AN INPUT */}
                    <div id='search'>
                        <img src={ search } alt='search' id='search-icon' className='search-img'/>
                        <p>SEARCH</p>
                        <img src= { camera } alt='search by image' id='camera-icon' className='search-img'/>
                    </div>

                    <img src={ messages } alt='messages' id='message-icon' className='search-img' />

                </div>



                <div id="bottom_nav">

                    <div id='bottom_nav_elements'>

                        <div id='home' class='bottom-nav-element'>
                            <img src={ logo } alt='home' />
                            <p>HOME</p>
                        </div>
                        
                        <div id='following' class='bottom-nav-element'>
                            <img src= { following } alt='following' />
                            <p>FOLLOWING</p>
                        </div>

                        <div id='notifications' className='bottom-nav-element'>
                            <img src={ notifications } alt='notifications' />
                            <p>NOTIFICATIONS</p>
                        </div>

                        <div id='saved' className='bottom-nav-element'>
                            <img src={ saved } alt='saved' />
                            <p>SAVED</p>
                        </div>

                    </div>

                </div>
                
            </div>
        )
    }
}

export default Header;