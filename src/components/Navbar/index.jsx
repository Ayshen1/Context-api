import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='navbar_container'>
     <div className='navbar_left'>
       <Link to='/'><img src='https://stmatthewsplumbing.com/wp-content/uploads/2020/01/starbucks-logo-png-transparent.png'/></Link>
     </div>
     <div className='navbar_right'>
       <Link to={'/'}>Home</Link>
       <Link className='busket_body' to={'/basket'}>Basket <span className='busket_count'>0</span></Link>
     </div>
     </div>
    </div>
  )
}

export default Navbar