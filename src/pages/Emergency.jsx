import React from "react";
import MainLayouts from "../layouts/MainLayouts";
import "../components/Emergency/emergency.css";
import { FaAmbulance } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const Emergency = () => {
  return (
    <MainLayouts>
      <div className="container emergency-container">
        <div className="img-grid">
          <div className="img-wrap">
            <FaAmbulance size={100} />
            <h2>24x7 Ambulance Service</h2>
            <div className="location">
              <MdLocationPin />
              <p>Basundhara, Kathmandu</p>
            </div>
            <div className="phone">
              <AiFillPhone />
              <p>9840186344</p>
            </div>
          </div>

          <div className="img-wrap">
            <FaAmbulance size={100} />
            <h2>Akhil Nepal Chiya Majdur Sangh</h2>
            <div className="location">
              <MdLocationPin />
              <p>basundhara, Kathmandu</p>
            </div>
            <div className="phone">
              <AiFillPhone />
              <p>9840186344</p>
            </div>
          </div>

          <div className="img-wrap">
            <FaAmbulance size={100} />
            <h2>Akhil Nepal Chiya Majdur Sangh</h2>
            <div className="location">
              <MdLocationPin />
              <p>basundhara, Kathmandu</p>
            </div>
            <div className="phone">
              <AiFillPhone />
              <p>9840186344</p>
            </div>
          </div>

          <div className="img-wrap">
            <FaAmbulance size={100} />
            <h2>Akhil Nepal Chiya Majdur Sangh</h2>
            <div className="location">
              <MdLocationPin />
              <p>basundhara, Kathmandu</p>
            </div>
            <div className="phone">
              <AiFillPhone />
              <p>9840186344</p>
            </div>
          </div>

          


        </div>
      </div>
    </MainLayouts>
  );
};

export default Emergency;
