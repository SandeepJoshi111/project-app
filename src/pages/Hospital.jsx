import React from "react";
import MainLayouts from "../layouts/MainLayouts";
import "../components/Hospitals/hospitals.css";
import { FaHospitalAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const Hospital = () => {
  return (
    <MainLayouts>
      <div className="container hospital-container">
        <div className="hospital-title">List Of Government Hospitals</div>
        <div className="hospital-grid">
          <a href="https://www.bbhospital.com.np/" target="_blank">
            <motion.div
              className="hospital-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="hospital-logo">
                <FaHospitalAlt size={70} />
              </div>
              <div className="hospital-content">
                <h1> B & B Hospital Pvt. Ltd</h1>
                <p>Gwarko, Kathmandu </p>
              </div>
            </motion.div>
          </a>

          <a href="https://birendrahospital.nepalarmy.mil.np/" target="_blank">
            <motion.div
              className="hospital-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="hospital-logo">
                <FaHospitalAlt size={70} />
              </div>
              <div className="hospital-content">
                <h1>Shree Birendra Hospital </h1>
                <p>Chhauni, Kathmandu </p>
                <p>Phone</p>
              </div>
            </motion.div>
          </a>

          <a href="https://birhospital.org.np/np" target="_blank">
            <motion.div
              className="hospital-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="hospital-logo">
                <FaHospitalAlt size={70} />
              </div>
              <div className="hospital-content">
                <h1>Bir Hospital</h1>
                <p>Tundikhel, Kathmandu </p>
                <p>Phone</p>
              </div>
            </motion.div>
          </a>

          <a href="https://nph.nepalpolice.gov.np/" target="_blank">
            <motion.div
              className="hospital-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="hospital-logo">
                <FaHospitalAlt size={70} />
              </div>
              <div className="hospital-content">
                <h1>Nepal Police Hospital</h1>
                <p>Maharajgunj, Kathmandu </p>
                <p>Phone</p>
              </div>
            </motion.div>
          </a>

          <a href="https://csh.gov.np/ne" target="_blank">
            <motion.div
              className="hospital-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="hospital-logo">
                <FaHospitalAlt size={70} />
              </div>
              <div className="hospital-content">
                <h1>Civil Service Hospital</h1>
                <p>Minbhawan, Kathmandu </p>
                <p>Phone</p>
              </div>
            </motion.div>
          </a>

          <a href="https://dhulikhelhospital.org/" target="_blank">
            <motion.div
              className="hospital-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="hospital-logo">
                <FaHospitalAlt size={70} />
              </div>
              <div className="hospital-content">
                <h1>Dhulikhel Hospital</h1>
                <p>Kavre, Nepal </p>
                <p>Phone</p>
              </div>
            </motion.div>
          </a>

          <a href="https://kmc.edu.np/" target="_blank">
            <motion.div
              className="hospital-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="hospital-logo">
                <FaHospitalAlt size={70} />
              </div>
              <div className="hospital-content">
                <h1>KMC Hospital</h1>
                <p>Sinamangal, Kathmandu </p>
                <p>Phone</p>
              </div>
            </motion.div>
          </a>

          <a href="https://birendrahospital.nepalarmy.mil.np/" target="_blank">
            <motion.div
              className="hospital-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="hospital-logo">
                <FaHospitalAlt size={70} />
              </div>
              <div className="hospital-content">
                <h1>KIST Medical College</h1>
                <p>Imadol, Lalitpur </p>
                <p>Phone</p>
              </div>
            </motion.div>
          </a>

          <a href="http://www.omhospitalnepal.com/" target="_blank">
            <motion.div
              className="hospital-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="hospital-logo">
                <FaHospitalAlt size={70} />
              </div>
              <div className="hospital-content">
                <h1>Om Hospital & Research Centre (P.) Ltd</h1>
                <p>Chabahil, Kathmandu </p>
                <p>Phone</p>
              </div>
            </motion.div>
          </a>

          <a
            href="https://www.pahs.edu.np/pahs-community/hospital/"
            target="_blank"
          >
            <motion.div
              className="hospital-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="hospital-logo">
                <FaHospitalAlt size={70} />
              </div>
              <div className="hospital-content">
                <h1>Patan Hospital</h1>
                <p>Lagankhel, Lalitpur </p>
                <p>Phone</p>
              </div>
            </motion.div>
          </a>

          <a href="http://www.tuth.org.np/" target="_blank">
            <motion.div
              className="hospital-wrap"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
            >
              <div className="hospital-logo">
                <FaHospitalAlt size={70} />
              </div>
              <div className="hospital-content">
                <h1>T. U. Teaching Hospital</h1>
                <p>Maharajgunj, Kathmandu </p>
                <p>Phone</p>
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Hospital;
