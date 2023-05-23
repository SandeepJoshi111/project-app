import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "../components/Doctor/doctor.css";
import MainLayouts from "../layouts/MainLayouts";
import { FaPrayingHands } from "react-icons/fa";

function Doctor() {
  return (
    <MainLayouts>
      <div className="container doctor-container">
        
      </div>
    </MainLayouts>
  );
}

export default Doctor;
