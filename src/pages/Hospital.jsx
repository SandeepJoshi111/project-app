import React, { useEffect } from "react";
import MainLayouts from "../layouts/MainLayouts";
import "../components/Hospitals/hospitals.css";
import { FaHospitalAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
const Hospital = () => {
  useEffect(() => {
    AOS.init({ duraction: 1000 });
  }, []);
  return (
    <MainLayouts>
      <div className="container hospital-container">
        <motion.div
          className="hospital-title"
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          List Of Government Hospitals
        </motion.div>
        <div className="hospital-grid">
          <a href="https://www.bbhospital.com.np/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1> B & B Hospital Pvt. Ltd</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/B%26B+Hospital,+Gwarko+(Baidya+%26+Banskota)/@27.664921,85.3266835,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19b2a948623f:0x646f266e0a6d9797!8m2!3d27.664921!4d85.3292584!16s%2Fg%2F11p0gsfm90?entry=ttu"
                  target="_blank"
                >
                  Gwarko, Kathmandu{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="https://birendrahospital.nepalarmy.mil.np/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>Shree Birendra Hospital </h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/Birendra+Army+Hospital/@27.7112877,85.2886924,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb18f4c9195273:0xeda2dd1bae0487a1!8m2!3d27.7112877!4d85.2912673!16s%2Fg%2F11jp2rcm01?entry=ttu"
                  target="_blank"
                >
                  Chhauni, Kathmandu
                </a>
              </div>
            </div>
          </a>

          <a href="https://birhospital.org.np/np" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>Bir Hospital</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/Bir+Hospital/@27.7048249,85.3110765,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb18fffc37200b:0xfcc471d3e99106bc!8m2!3d27.7048249!4d85.3136514!16s%2Fm%2F02vkpjc?entry=ttu"
                  target="_blank"
                >
                  Tundikhel, Kathmandu
                </a>
              </div>
            </div>
          </a>

          <a href="https://nph.nepalpolice.gov.np/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>Nepal Police Hospital</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/Nepal+Police+Hospital/@27.7311856,85.3207738,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb193d3538bc1f:0x1d2b5b72d22e1bd4!8m2!3d27.7311856!4d85.3233487!16s%2Fg%2F1234bmch?entry=ttu"
                  target="_blank"
                >
                  Maharajgunj, Kathmandu{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="https://csh.gov.np/ne" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>Civil Service Hospital</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/Civil+Service+Hospital+of+Nepal/@27.6863031,85.3362289,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1994769ac19f:0xd15dddabb04dbed!8m2!3d27.6863031!4d85.3388038!16s%2Fg%2F1tf63x5y?entry=ttu"
                  target="_blank"
                >
                  Minbhawan, Kathmandu{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="https://dhulikhelhospital.org/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>Dhulikhel Hospital</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/JG8X%2BP54+Dhulikhel+Hospital,+Dhulikhel+45200/@27.6166418,85.5456447,18z/data=!3m1!4b1!4m6!3m5!1s0x39eb091dca29b4b5:0x467038bac14d6cf3!8m2!3d27.616654!4d85.5473776!16s%2Fg%2F11b8vc9tqb?entry=ttu"
                  target="_blank"
                >
                  Kavre, Nepal{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="https://kmc.edu.np/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>KMC Hospital</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/Kathmandu+Medical+College/@27.6955443,85.3529736,17.26z/data=!4m6!3m5!1s0x39eb1987e98b0f89:0xced0875ae11510dc!8m2!3d27.6958593!4d85.3533626!16s%2Fm%2F0cr5b56?entry=ttu"
                  target="_blank"
                >
                  Sinamangal, Kathmandu{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="https://birendrahospital.nepalarmy.mil.np/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>KIST Medical College</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/KIST+Medical+College+Teaching+Hospital/@27.6629355,85.3325241,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19e09bdd2863:0x137a6a4d392584cf!8m2!3d27.6629355!4d85.335099!16s%2Fg%2F1tf41c8y?entry=ttu"
                  target="_blank"
                >
                  Imadol, Lalitpur{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="http://www.omhospitalnepal.com/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>Om Hospital & Research Centre (P.) Ltd</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/Om+Hospital+%26+Research+Centre+Pvt.+Ltd./@27.7214203,85.3422295,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1965869815e1:0x61a8a608eeb02b85!8m2!3d27.7214203!4d85.3448044!16s%2Fg%2F11c5sw2__r?entry=ttu"
                  target="_blank"
                >
                  Chabahil, Kathmandu{" "}
                </a>
              </div>
            </div>
          </a>

          <a
            href="https://www.pahs.edu.np/pahs-community/hospital/"
            target="_blank"
          >
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>Patan Hospital</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/Patan+Hospital/@27.668302,85.3179934,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19d1be9baf71:0x48893d580864792f!8m2!3d27.668302!4d85.3205683!16s%2Fm%2F0495y0w?entry=ttu"
                  target="_blank"
                >
                  Lagankhel, Lalitpur{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="http://www.tuth.org.np/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>T. U. Teaching Hospital</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/T.U.+Teaching+Hospital/@27.7359917,85.3276846,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1939433ddad7:0x7bde63fadb2efc24!8m2!3d27.7359917!4d85.3302595!16s%2Fm%2F0495y1r?entry=ttu"
                  target="_blank"
                >
                  Maharajgunj, Kathmandu{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="https://www.bpkihs.edu/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>B.P. Koirala Institute of Health Sciences</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/B.+P.+Koirala+Institute+of+Health+Sciences+College+of+Dental+Surgery/@26.8129065,87.2725582,17z/data=!3m1!4b1!4m6!3m5!1s0x39ef41a61120aaab:0x9c8fb03ebdc219d7!8m2!3d26.8129065!4d87.2725582!16s%2Fg%2F11bw8dyqhd?entry=ttu"
                  target="_blank"
                >
                  Dharan{" "}
                </a>
              </div>
            </div>
          </a>

          <a
            href="https://www.pahs.gov.np/?fbclid=IwAR0mjB_OtnEgJO-Y7bZ9crCX92NpwuiFerOQP6U5UDFNxcQpYoxuPcMnkTw"
            target="_blank"
          >
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>Western Regional Hospital</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/Western+Regional+Hospital+Helipad/@28.2125332,83.9989764,17z/data=!3m1!4b1!4m6!3m5!1s0x3995953255f1e03f:0xf755f36dd927e3f6!8m2!3d28.2125332!4d83.9989764!16s%2Fg%2F11g1mwc9mv?entry=ttu"
                  target="_blank"
                >
                  Pokhara{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="http://rahs.edu.np/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>Rapti Academy of Health Sciences</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/Rapti+Academy+of+Health+Sciences+Ghorahi/@28.0375078,82.4921895,17z/data=!3m1!4b1!4m6!3m5!1s0x399794667277ba21:0x15217e658f5110d3!8m2!3d28.0375078!4d82.4921895!16s%2Fg%2F11byypy0qc?entry=ttu"
                  target="_blank"
                >
                  Dang{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="https://www.lphospital.gov.np/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>Lumbini Provincial Hospital</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/Lumbini+Province+Hospital/@27.6978265,83.4641515,17z/data=!3m1!4b1!4m6!3m5!1s0x3996868a80185519:0xbad4eeb3b7798ee5!8m2!3d27.6978265!4d83.4641515!16s%2Fm%2F0124x_hc?entry=ttu"
                  target="_blank"
                >
                  Butwal{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="https://kahs.edu.np/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>Karnali Academy of Health Sciences</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/Karnali+Academy+of+Health+Sciences/@29.2834778,82.1828536,17z/data=!3m1!4b1!4m6!3m5!1s0x39a32c9d4392cbb3:0x7c18ccab0c0c274b!8m2!3d29.2834778!4d82.1828536!16s%2Fg%2F1thhhxx6?entry=ttu"
                  target="_blank"
                >
                  Jumla{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="https://www.baitadihospital.gov.np/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>Baitadi District Hospital</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/place/District+Hospital+Baitadi/@29.5580158,80.4003168,14z/data=!4m10!1m2!2m1!1sBaitadi+District+Hospital!3m6!1s0x39a138e70d96b11b:0x3f1273a1aae6e3bb!8m2!3d29.5595206!4d80.4179866!15sChlCYWl0YWRpIERpc3RyaWN0IEhvc3BpdGFskgEIaG9zcGl0YWzgAQA!16s%2Fg%2F11bx2l8d37?entry=ttu"
                  target="_blank"
                >
                  Baitadi{" "}
                </a>
              </div>
            </div>
          </a>

          <a href="https://www.nartc.gov.np/" target="_blank">
            <div className="hospital-wrap" data-aos="zoom-in-up">
              <div className="hospital-logo">
                <FaHospitalAlt />
              </div>
              <div className="hospital-content">
                <h1>National Ayurveda Research and Training Center</h1>
                <MdLocationPin />
                <a
                  href="https://www.google.com/maps/search/National+Ayurveda+Research+and+Training+Center/@27.6767561,85.288667,17z/data=!3m1!4b1?entry=ttu"
                  target="_blank"
                >
                  Kirtipur{" "}
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="hospital-note">
          Please note that this list includes a mix of central, regional,
          provincial, and district level governmental hospitals. There are many
          more governmental hospitals in Nepal, but these are some notable ones
          across different regions of the country.
        </div>
      </div>
    </MainLayouts>
  );
};

export default Hospital;
