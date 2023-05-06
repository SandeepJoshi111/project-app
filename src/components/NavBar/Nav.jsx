import { Box, Button, Link } from '@chakra-ui/react'
import React from 'react'
import LOGO from '../../assets/HCN-removebg-preview.png'
import './nav.css'

const Nav = () => {
  return (
    <div className='container nav-container'>
      <div className='nav-content'>
            <div className='nav-image'>
              <img src={LOGO} alt="logo" />
            </div>
            
            <div className='nav-links'>
              <Link href=''>Home</Link>
              <Link href='/emergency'>Emergency</Link>
              <Button colorScheme='teal' className='btn btn-primary'>Log In</Button>
            </div>
      </div>
    </div>

  )
}

export default Nav