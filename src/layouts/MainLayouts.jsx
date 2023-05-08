import React from 'react'
import NavBar from '../components/NavBar/NavBar'
const MainLayouts = ({children}) => {
  return (
    <div>
        <NavBar/>
        <div>{children}</div>
        <p>Sidebar</p>
    </div>
  )
}

export default MainLayouts