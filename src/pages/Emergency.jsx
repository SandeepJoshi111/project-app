import React from "react";
import MainLayouts from "../layouts/MainLayouts";
import "../components/Emergency/emergency.css";
import { FaAmbulance } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";
import KOSHI from "../assets/1. koshi.png";
import MADHESH from "../assets/2. madhesh.png";
import BAGMATI from "../assets/3. bagmati.png";
import GANDAKI from "../assets/4. gandaki.png";
import LUMBINI from "../assets/5. lumbini.png";
import KARNALI from "../assets/6. karnali.png";
import SUDURPASHCHIM from "../assets/7. Sudurpashchim.png";
const Emergency = () => {
  return (
    <MainLayouts>
      <div className="container emergency-container">
        <marquee>FOR EMERGENCY: CALL 102</marquee>
        <h1 className="emergency-title">List of Ambulance in 7 provience</h1>
        <div className="emergency-province">
          <li>
            <a href="#bagmati"> Bagmati</a>
          </li>
          <li>
            <a href="#gandaki"> Gandaki</a>
          </li>
          <li>
            <a href="#karnali"> Karnali</a>
          </li>
          <li>
            <a href="#koshi"> Koshi</a>
          </li>
          <li>
            <a href="#lumbini"> Lumbini</a>
          </li>
          <li>
            <a href="#madhesh"> Madhesh</a>
          </li>
          <li>
            <a href="#sudurpashchim"> Sudurpashchim</a>
          </li>
        </div>

        <div className="province-container">
          <div className="provinve-with-image">
          <div className="province" id="bagmati">
            Bagmati 
            <p>Province 3</p>
            </div>
            {/* <div children="province-image">
              <img src={BAGMATI} alt="" />
            </div> */}
          </div>

          <div className="img-grid">
            <motion.div
              className="img-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="emergency-logo">
                <FaAmbulance size={100} />
              </div>
              <div className="emergency-content">
                <h1>24x7 Ambulance Service</h1>
                <div className="location">
                  <MdLocationPin />
                  <p>Basundhara, Kathmandu</p>
                </div>
                <div className="phone">
                  <AiFillPhone />
                  <p>9840186344</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="img-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="emergency-logo">
                <FaAmbulance size={100} />
              </div>
              <div className="emergency-content">
                <h1>24x7 Ambulance Service</h1>
                <div className="location">
                  <MdLocationPin />
                  <p>Basundhara, Kathmandu</p>
                </div>
                <div className="phone">
                  <AiFillPhone />
                  <p>9840186344</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="img-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="emergency-logo">
                <FaAmbulance size={100} />
              </div>
              <div className="emergency-content">
                <h1>24x7 Ambulance Service</h1>
                <div className="location">
                  <MdLocationPin />
                  <p>Basundhara, Kathmandu</p>
                </div>
                <div className="phone">
                  <AiFillPhone />
                  <p>9840186344</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="img-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="emergency-logo">
                <FaAmbulance size={100} />
              </div>
              <div className="emergency-content">
                <h1>24x7 Ambulance Service</h1>
                <div className="location">
                  <MdLocationPin />
                  <p>Basundhara, Kathmandu</p>
                </div>
                <div className="phone">
                  <AiFillPhone />
                  <p>9840186344</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="provinve-with-image">
          <div className="province" id="gandaki">
            Gandaki 
            <p>Province 4</p>
            </div>
            {/* <div children="province-image">
              <img src={GANDAKI} alt="" />
            </div> */}
          </div>

          <div className="img-grid">
            <motion.div
              className="img-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="emergency-logo">
                <FaAmbulance size={100} />
              </div>
              <div className="emergency-content">
                <h1>24x7 Ambulance Service</h1>
                <div className="location">
                  <MdLocationPin />
                  <p>Basundhara, Kathmandu</p>
                </div>
                <div className="phone">
                  <AiFillPhone />
                  <p>9840186344</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="provinve-with-image">
          <div className="province" id="karnali">
            Karnali 
            <p>Province 6</p>
            </div>
            {/* <div children="province-image">
              <img src={KARNALI} alt="" />
            </div> */}
          </div>


          <div className="img-grid">
            <motion.div
              className="img-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="emergency-logo">
                <FaAmbulance size={100} />
              </div>
              <div className="emergency-content">
                <h1>24x7 Ambulance Service</h1>
                <div className="location">
                  <MdLocationPin />
                  <p>Basundhara, Kathmandu</p>
                </div>
                <div className="phone">
                  <AiFillPhone />
                  <p>9840186344</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="provinve-with-image">
          <div className="province" id="koshi">
            Koshi 
            <p>Province 1</p>
            </div>
            {/* <div children="province-image">
              <img src={KOSHI} alt="" />
            </div> */}
          </div>


          <div className="img-grid">
            <motion.div
              className="img-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="emergency-logo">
                <FaAmbulance size={100} />
              </div>
              <div className="emergency-content">
                <h1>24x7 Ambulance Service</h1>
                <div className="location">
                  <MdLocationPin />
                  <p>Basundhara, Kathmandu</p>
                </div>
                <div className="phone">
                  <AiFillPhone />
                  <p>9840186344</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="provinve-with-image">
          <div className="province" id="lumbini">
            Lumbini 
            <p>Province 5</p>
            </div>
            {/* <div children="province-image">
              <img src={LUMBINI} alt="" />
            </div> */}
          </div>


          <div className="img-grid">
            <motion.div
              className="img-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="emergency-logo">
                <FaAmbulance size={100} />
              </div>
              <div className="emergency-content">
                <h1>24x7 Ambulance Service</h1>
                <div className="location">
                  <MdLocationPin />
                  <p>Basundhara, Kathmandu</p>
                </div>
                <div className="phone">
                  <AiFillPhone />
                  <p>9840186344</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="provinve-with-image">
          <div className="province" id="madhesh">
            Madhesh 
            <p>Province 2</p>
            </div>
            {/* <div children="province-image">
              <img src={MADHESH} alt="" />
            </div> */}
          </div>


          <div className="img-grid">
            <motion.div
              className="img-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="emergency-logo">
                <FaAmbulance size={100} />
              </div>
              <div className="emergency-content">
                <h1>24x7 Ambulance Service</h1>
                <div className="location">
                  <MdLocationPin />
                  <p>Basundhara, Kathmandu</p>
                </div>
                <div className="phone">
                  <AiFillPhone />
                  <p>9840186344</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="provinve-with-image">
          <div className="province" id="sudurpashchim">
            Sudurpashchim 
            <p>Province 7</p>
            </div>
            {/* <div children="province-image">
              <img src={SUDURPASHCHIM} alt="" />
            </div> */}
          </div>

          <div className="img-grid">
            <motion.div
              className="img-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="emergency-logo">
                <FaAmbulance size={100} />
              </div>
              <div className="emergency-content">
                <h1>24x7 Ambulance Service</h1>
                <div className="location">
                  <MdLocationPin />
                  <p>Basundhara, Kathmandu</p>
                </div>
                <div className="phone">
                  <AiFillPhone />
                  <p>9840186344</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Emergency;
