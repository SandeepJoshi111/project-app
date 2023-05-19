import React, { memo, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { motion } from "framer-motion";
import Login from "../components/LoginPage/Login";
import LoginDoctor from "../components/LoginPage/LoginDoctor";
import Header from "../components/Header/Header";

const MainLayouts = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} userType={userType} />

      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>

    </div>
  );
};

export default MainLayouts;
