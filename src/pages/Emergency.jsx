import React, { useState } from "react";
import MainLayouts from "../layouts/MainLayouts";
import "../components/Emergency/emergency.css";
import { FaAmbulance } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";

const Emergency = () => {
  const [selectedProvince, setSelectedProvince] = useState("default");

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };
  return (
    <MainLayouts>
      <div className="container emergency-container">
        <marquee> FOR EMERGENCY: CALL 102</marquee>
        <motion.h1
          className="emergency-title"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          List of Ambulance in 7 provience
        </motion.h1>
        <motion.div
          className="emergency-dropdown"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
        >
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
        </motion.div>
        {selectedProvince === "default" && (
          <svg
            className="ambulance"
            width="802"
            height="454"
            viewBox="0 0 802 454"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_iconCarrier">
              <g id="Group">
                <g id="left-wheel">
                  <path
                    id="Vector"
                    d="M667.191 360.984C652.508 360.926 640.497 372.841 640.439 387.525C640.38 402.226 652.296 414.219 666.98 414.278C681.68 414.336 693.674 402.437 693.732 387.737C693.79 373.053 681.892 361.043 667.191 360.984Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_2"
                    d="M722.01 352.956C710.551 334.842 690.373 322.765 667.344 322.674C631.472 322.531 602.271 351.501 602.128 387.373C602.123 388.8 602.167 390.21 602.244 391.604C604.3 425.51 632.383 452.451 666.827 452.588C701.272 452.725 729.568 426.008 731.893 392.12C731.982 390.726 732.037 389.316 732.043 387.889C732.094 375.047 728.408 363.053 722.01 352.956ZM640.439 387.525C640.497 372.841 652.508 360.926 667.191 360.984C681.892 361.043 693.79 373.053 693.732 387.737C693.674 402.437 681.68 414.336 666.98 414.278C652.296 414.219 640.38 402.225 640.439 387.525Z"
                    fill="#666666"
                  />
                </g>
                <g id="right-wheel">
                  <path
                    id="Vector_3"
                    d="M135.355 358.871C120.672 358.813 108.678 370.728 108.62 385.412C108.561 400.112 120.46 412.106 135.144 412.164C149.844 412.223 161.838 400.324 161.896 385.624C161.954 370.94 150.056 358.93 135.355 358.871Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_4"
                    d="M80.6019 350.407C74.1408 360.453 70.36 372.417 70.309 385.26C70.3034 386.67 70.3476 388.08 70.425 389.474C72.4638 423.397 100.53 450.338 134.992 450.475C169.453 450.612 197.749 423.895 200.057 389.99C200.146 388.596 200.201 387.186 200.207 385.776C200.349 349.904 171.379 320.703 135.508 320.56C112.478 320.469 92.205 332.384 80.6019 350.407ZM108.62 385.412C108.678 370.728 120.672 358.813 135.356 358.871C150.056 358.929 161.955 370.94 161.896 385.624C161.838 400.324 149.844 412.223 135.144 412.164C120.46 412.106 108.561 400.112 108.62 385.412Z"
                    fill="#666666"
                  />
                </g>
                <g id="light">
                  <path
                    id="Vector_5"
                    d="M210.68 11.9551L204.577 75.1552L257.671 75.3662L252.085 12.1213C251.777 8.63572 248.866 5.95945 245.367 5.94555L217.448 5.83461C213.95 5.82071 211.016 8.47375 210.68 11.9551Z"
                    fill="#F4581B"
                  />
                </g>
                <g id="body">
                  <path
                    id="Vector_6"
                    d="M746.975 387.948C746.97 389.309 746.931 390.686 746.859 392.179L780.673 392.313C791.474 392.356 800.27 383.631 800.313 372.829C800.334 367.437 798.163 362.534 794.644 358.969C791.107 355.421 786.221 353.211 780.829 353.19L739.084 353.024C744.317 363.863 747.024 375.77 746.975 387.948Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_7"
                    d="M0.319074 369.634L0.319008 369.65C0.276153 380.435 8.98526 389.23 19.7866 389.273L55.4757 389.415C55.3986 387.938 55.3709 386.561 55.3763 385.2C55.4246 373.038 58.2096 361.153 63.5122 350.339L19.942 350.166C9.14065 350.123 0.361929 358.849 0.319074 369.634Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_8"
                    d="M48.699 224.197L101.745 211.466L157.672 74.9688L309.106 75.5706L307.855 390.418L215.007 390.049C215.095 388.556 215.134 387.196 215.139 385.835C215.315 341.784 179.618 305.803 135.567 305.628C108.157 305.519 82.9159 319.24 68.0406 342.327C66.371 344.925 64.8506 347.59 63.5123 350.339L19.942 350.166L20.2999 260.089C20.3678 242.999 32.091 228.179 48.699 224.197ZM271.815 215.344L272.225 112.176L182.281 111.818L140.076 214.82L271.815 215.344Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_9"
                    d="M783.431 3.106L782.04 353.195L739.084 353.024C737.767 350.264 736.268 347.57 734.619 344.959C719.944 321.771 694.813 307.85 667.403 307.741C623.351 307.566 587.371 343.262 587.196 387.314C587.19 388.691 587.218 390.085 587.295 391.545L307.855 390.435L309.401 1.22236L783.431 3.106ZM459.48 167.574L511.097 167.779L510.892 219.38L580.229 219.656L580.434 168.055L632.035 168.26L632.311 98.9224L580.71 98.7174L580.915 47.1L511.578 46.8245L511.373 98.4418L459.755 98.2367L459.48 167.574Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_10"
                    d="M182.281 111.818L140.076 214.82L271.815 215.344L272.225 112.176L182.281 111.818Z"
                    fill="#76CDCE"
                  />
                  <path
                    id="Vector_11"
                    d="M459.755 98.2367L459.48 167.574L511.097 167.779L510.892 219.38L580.229 219.656L580.434 168.055L632.035 168.26L632.311 98.9224L580.71 98.7174L580.915 47.1001L511.578 46.8245L511.373 98.4419L459.755 98.2367Z"
                    fill="#F4581B"
                  />
                  <path
                    id="Vector_12"
                    d="M293.687 75.5093L309.106 75.5706L307.855 390.418L292.436 390.357L293.687 75.5093Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_13"
                    d="M20.2616 269.745L782.359 272.774L782.25 300.416L20.1517 297.387L20.2616 269.745Z"
                    fill="#F4581B"
                  />
                  <path
                    id="Vector_14"
                    d="M292.916 270.829L308.33 270.89L308.22 298.532L292.806 298.471L292.916 270.829Z"
                    fill="#DB481B"
                  />
                  <path
                    id="Vector_15"
                    d="M272.225 112.176L167.796 214.931L140.076 214.82L182.281 111.818L272.225 112.176Z"
                    fill="#96E0DE"
                  />
                  <path
                    id="Vector_16"
                    d="M46.0702 313.701L57.9333 313.748C65.1276 313.777 70.9811 307.968 71.0097 300.775L71.1301 270.495C71.1586 263.301 65.3498 257.447 58.1572 257.419L46.294 257.372L46.0702 313.701Z"
                    fill="#F7CF52"
                  />
                </g>
              </g>
            </g>
          </svg>
        )}
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
