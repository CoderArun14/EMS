import React from 'react'
import "./Navbar.css"
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import micro from '../../assets/micro.png'

const Navbar = () => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' src={menu_icon} alt="" />
        <img className='logo' src={logo} alt="" />
      </div>

      <div className='middle-nav flex-div'>
        <div className='search-box flex-div'>
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="" />
        </div>
        <img src={micro}  className='micro' alt="" />
      </div>

      <div className='right-nav flex-div'>
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='user-icon' alt="" />
      </div>
    </nav>
  )
}

export default Navbar