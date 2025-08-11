import React from 'react'
import Logo from '../../assets/Netflixlogo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Header.css'
function Header(){
    return(

       <div className="header_outer_contaier">

    <div className="header-container">
        <div className="header-left">
            <ul>
                <img src={Logo} alt="Netflix Logo" style={{width:'200px',height:'35px'}}/>
                <li>Netflix</li>
                <li>Home</li>
                <li>TvShow</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>Browser by Language</li>
            </ul>
        </div>
        <div className="header-right">
            <ul>
                <li><SearchIcon/></li>
                <li><NotificationsNoneIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropDownIcon/></li>
                
              
            </ul>
        </div>
    </div>


</div>
    )
}


export default Header;