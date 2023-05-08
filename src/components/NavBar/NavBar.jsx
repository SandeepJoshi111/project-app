import { Box, Button, background } from '@chakra-ui/react'
import React from 'react'
import LOGO from '../../assets/HCN-removebg-preview.png'
import { Link } from 'react-router-dom'
import './nav.css'



const Nav = () => {

  return (
    <div className='container nav-container'>
      <div className='nav-content'>
            <div className='nav-image'>
              <img src={LOGO} alt="logo" />
            </div>
            
            <div className='nav-links'>
              <Link to='/'>Home</Link>
              <Link to='/emergency'>Emergency</Link>
              <button  className='btn' ><Link to='/login'>Log In</Link></button>
            </div>
      </div>
    </div>

  )
}

export default Nav