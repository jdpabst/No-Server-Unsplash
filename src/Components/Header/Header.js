import React, {Component} from 'react'
import './Header.css';
import logo from '../../media/logo.png';
import search from '../../media/search_icon.png';
import following from '../../media/following_icon.png';
import notifications from '../../media/bell_icon.png';
import messages from '../../media/message_icon.png';
import saved from '../../media/profile_icon.png';

class Header extends Component{

    render(){
        return(
            <div>
                <div id="top-nav">

                    {/* SEARCH BAR REDIRECTS TO ANOTHER PAGE WHERE THERE IS AN INPUT */}
                    <div id='search'>
                        <img src={ search } alt='search' />
                        <p>SEARCH</p>
                        <img src={ messages } alt='search by image' />
                    </div>

                    <img src='' alt='messages'/>

                </div>



                <div id="bottom_nav">

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
        )
    }
}

export default Header;