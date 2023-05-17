import React, { memo } from 'react';
import NavBar from '../components/NavBar/NavBar'
import {motion} from 'framer-motion';
const MemoizedNavBar = memo(NavBar);

const MainLayouts = ({children}) => {

  return (
    <>
    <MemoizedNavBar/>
    <div>
        <motion.div
      
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
          {children}
        </motion.div>
    </div>
  </>
  )
}

export default MainLayouts