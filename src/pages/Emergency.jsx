import React, { useState } from "react";
import MainLayouts from "../layouts/MainLayouts";
import "../components/Emergency/emergency.css";
import { FaAmbulance } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
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
  const [selectedProvince, setSelectedProvince] = useState("default");

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };
  return (
    <MainLayouts>
      <div className="container emergency-container">
        <marquee>FOR EMERGENCY: CALL 102</marquee>
        <h1 className="emergency-title">List of Ambulance in 7 provience</h1>
        <div className="emergency-dropdown">
          <select id="emergency-province" onChange={handleProvinceChange}>
            <option value="default">Select Province</option>
            <option value="province-1">Province 1 (Koshi)</option>
            <option value="province-2">Province 2 (Madhesh)</option>
            <option value="province-3">Province 3 (Bagmati)</option>
            <option value="province-4">Province 4 (Gandaki)</option>
            <option value="province-5">Province 5 (Lumbini)</option>
            <option value="province-6">Province 6 (Karnali)</option>
            <option value="province-7">Province 7 (Sudurpashchim)</option>
          </select>
        </div>

        {selectedProvince === "province-1" && (
          <div className="province-container">
            <h1>Province 1</h1>
            <span>Koshi</span>
            <div className="img-grid">
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>Akhil Nepal Chiya Majdur Sangh</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Jhapa</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p>9814952000</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>B and C Medical Collage Teaching Hospital</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Jhapa</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p>9843714977</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>Bhagawati Samaj</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Jhapa</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p></p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>Dhankuta, Jitpur Amulance</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Jitpur, Dhankuta</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p></p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>Chetansheel</h2>
                  <div className="emergency-footer">
                    <div className="location">
                      <MdLocationPin />
                      <p>Morang</p>
                    </div>
                    <div className="phone">
                      <BsFillTelephoneFill />
                      <p></p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
        {selectedProvince === "province-2" && (
          <div className="province-container">
            <h1>Province 2</h1>
            <span>Madhesh</span>
            <div className="img-grid">
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>Unique College of Medical Science & Hospital</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Saptari</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p></p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
        {selectedProvince === "province-3" && (
          <div className="province-container">
            <h1>Province 3</h1>
            <span>Bagmati</span>
            <div className="img-grid">
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>24x7 Ambulance Service</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Basundhara, Kathmandu</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
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
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>Kedar Bhadur Simriti Sewa</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Dhading</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p>9840186344</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
        {selectedProvince === "province-4" && (
          <div className="province-container">
            <h1>Province 4</h1>
            <span>Gandaki</span>
            <div className="img-grid">
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>Sewa Hospital</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Kaski</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p></p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>Siddhartha Club</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Kaski</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p></p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>Ambulance Service Ramghat</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Kaski</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p></p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
        {selectedProvince === "province-5" && (
          <div className="province-container">
            <h1>Province 5</h1>
            <span>Lumbini</span>
            <div className="img-grid">
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>Kohalpur Bahu-Udyeshiya Sahakari Ambulance</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Kohalpur, Banke</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p></p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>Reiyukai Ambulance</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Kohalpur, Banke</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p></p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
        {selectedProvince === "province-6" && (
          <div className="province-container">
            <h1>Province 6</h1>
            <span>Karnali</span>
            <div className="img-grid">
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>24x7 Ambulance Service</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Basundhara, Kathmandu</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p>9840186344</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
        {selectedProvince === "province-7" && (
          <div className="province-container">
            <h1>Province 7</h1>
            <span>Sudurpashchim</span>
            <div className="img-grid">
              <motion.div
                className="img-wrap"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              >
                <div className="emergency-logo">
                  <FaAmbulance />
                </div>
                <div className="emergency-content">
                  <h2>24x7 Ambulance Service</h2>
                </div>
                <div className="emergency-footer">
                  <div className="location">
                    <MdLocationPin />
                    <p>Basundhara, Kathmandu</p>
                  </div>
                  <div className="phone">
                    <BsFillTelephoneFill />
                    <p>9840186344</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </MainLayouts>
  );
};

export default Emergency;
