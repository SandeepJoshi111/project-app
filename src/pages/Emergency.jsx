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
        {selectedProvince === "default" && (
          <svg className="ambulance"
            width="800"
            height="800"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="ambulance-svgrepo-com (1) 1" clip-path="url(#clip0_2_2)">
              <g id="SVGRepo_iconCarrier">
                <g id="Group">
                  <g id="left-wheel">
                    <path
                      id="Vector"
                      d="M133.699 534.397C148.383 534.338 160.394 546.254 160.452 560.937C160.51 575.638 148.595 587.632 133.911 587.69C119.211 587.748 107.217 575.85 107.159 561.149C107.1 546.465 118.999 534.455 133.699 534.397Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_2"
                      d="M78.8803 526.368C90.3399 508.254 110.518 496.178 133.547 496.086C169.419 495.944 198.62 524.914 198.763 560.785C198.768 562.212 198.724 563.623 198.647 565.017C196.591 598.923 168.508 625.864 134.063 626.001C99.6188 626.137 71.3225 599.42 68.9977 565.532C68.9092 564.138 68.8538 562.728 68.8482 561.301C68.7971 548.459 72.4827 536.465 78.8803 526.368ZM160.452 560.937C160.394 546.254 148.383 534.338 133.699 534.397C118.999 534.455 107.1 546.465 107.159 561.149C107.217 575.85 119.211 587.748 133.911 587.69C148.595 587.631 160.51 575.638 160.452 560.937Z"
                      fill="#666666"
                    />
                  </g>
                  <g id="right-wheel">
                    <path
                      id="Vector_3"
                      d="M665.535 532.283C680.219 532.225 692.213 544.14 692.271 558.824C692.33 573.525 680.431 585.518 665.747 585.576C651.047 585.635 639.053 573.736 638.995 559.036C638.936 544.352 650.835 532.342 665.535 532.283Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_4"
                      d="M720.289 523.82C726.75 533.865 730.531 545.83 730.582 558.672C730.587 560.082 730.543 561.493 730.466 562.887C728.427 596.809 700.361 623.75 665.899 623.887C631.438 624.024 603.142 597.307 600.834 563.402C600.745 562.008 600.69 560.598 600.684 559.188C600.541 523.316 629.511 494.115 665.383 493.973C688.413 493.881 708.686 505.797 720.289 523.82ZM692.271 558.824C692.213 544.14 680.219 532.225 665.535 532.283C650.835 532.342 638.936 544.352 638.995 559.036C639.053 573.736 651.047 585.635 665.747 585.576C680.431 585.518 692.33 573.525 692.271 558.824Z"
                      fill="#666666"
                    />
                  </g>
                  <g id="light">
                    <path
                      id="Vector_5"
                      d="M590.211 185.367L596.314 248.567L543.22 248.778L548.806 185.534C549.114 182.048 552.025 179.372 555.524 179.358L583.443 179.247C586.941 179.233 589.875 181.886 590.211 185.367Z"
                      fill="#F4581B"
                    />
                  </g>
                  <g id="body">
                    <path
                      id="Vector_6"
                      d="M53.9155 561.361C53.9209 562.721 53.9596 564.098 54.0319 565.591L20.2176 565.726C9.41631 565.769 0.620989 557.043 0.578068 546.242C0.556641 540.849 2.72732 535.946 6.24728 532.381C9.7839 528.833 14.6698 526.623 20.0622 526.602L61.8073 526.436C56.5741 537.275 53.8671 549.182 53.9155 561.361Z"
                      fill="#CCCCCC"
                    />
                    <path
                      id="Vector_7"
                      d="M800.572 543.046L800.572 543.063C800.615 553.847 791.906 562.643 781.104 562.686L745.415 562.827C745.492 561.35 745.52 559.973 745.515 558.613C745.466 546.451 742.681 534.565 737.379 523.752L780.949 523.579C791.75 523.536 800.529 532.261 800.572 543.046Z"
                      fill="#CCCCCC"
                    />
                    <path
                      id="Vector_8"
                      d="M752.192 397.609L699.146 384.878L643.219 248.381L491.785 248.983L493.036 563.83L585.884 563.461C585.795 561.968 585.757 560.608 585.751 559.247C585.576 515.196 621.272 479.215 665.324 479.04C692.734 478.931 717.975 492.652 732.85 515.739C734.52 518.337 736.04 521.003 737.379 523.752L780.949 523.579L780.591 433.501C780.523 416.412 768.8 401.592 752.192 397.609ZM529.075 388.756L528.665 285.588L618.61 285.23L660.815 388.233L529.075 388.756Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_9"
                      d="M17.4598 176.518L18.8509 526.607L61.8073 526.436C63.1237 523.677 64.6229 520.983 66.2717 518.371C80.9466 495.183 106.078 481.262 133.488 481.153C177.539 480.978 213.52 516.674 213.695 560.726C213.701 562.103 213.673 563.497 213.596 564.957L493.036 563.847L491.49 174.635L17.4598 176.518ZM341.411 340.986L289.794 341.192L289.999 392.792L220.661 393.068L220.456 341.467L168.856 341.672L168.58 272.335L220.181 272.13L219.976 220.512L289.313 220.237L289.518 271.854L341.136 271.649L341.411 340.986Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_10"
                      d="M618.61 285.23L660.815 388.233L529.075 388.756L528.665 285.588L618.61 285.23Z"
                      fill="#76CDCE"
                    />
                    <path
                      id="Vector_11"
                      d="M341.136 271.649L341.411 340.986L289.794 341.192L289.999 392.792L220.661 393.068L220.456 341.467L168.856 341.672L168.58 272.335L220.181 272.13L219.976 220.512L289.313 220.237L289.518 271.854L341.136 271.649Z"
                      fill="#F4581B"
                    />
                    <path
                      id="Vector_12"
                      d="M507.204 248.922L491.785 248.983L493.036 563.83L508.455 563.769L507.204 248.922Z"
                      fill="#CCCCCC"
                    />
                    <path
                      id="Vector_13"
                      d="M780.629 443.158L18.5314 446.186L18.6412 473.828L780.739 470.8L780.629 443.158Z"
                      fill="#F4581B"
                    />
                    <path
                      id="Vector_14"
                      d="M507.975 444.241L492.561 444.302L492.671 471.944L508.085 471.883L507.975 444.241Z"
                      fill="#DB481B"
                    />
                    <path
                      id="Vector_15"
                      d="M528.665 285.588L633.095 388.343L660.815 388.233L618.61 285.23L528.665 285.588Z"
                      fill="#96E0DE"
                    />
                    <path
                      id="Vector_16"
                      d="M754.821 487.113L742.957 487.16C735.763 487.189 729.91 481.38 729.881 474.188L729.761 443.907C729.732 436.713 735.541 430.86 742.734 430.831L754.597 430.784L754.821 487.113Z"
                      fill="#F7CF52"
                    />
                  </g>
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_2_2">
                <rect width="800" height="800" fill="white" />
              </clipPath>
            </defs>
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
