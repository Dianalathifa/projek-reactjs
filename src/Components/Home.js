import React from "react";
import BannerBackground from "../Assets/background.png";
import BannerImage from "../Assets/Saly.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      
      <Navbar />
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Halo !
          <br/>Selamat Datang<br/>
          diMelodyMasterClass          
          </h1>
          <p className="primary-text">
          Nikmati kursus musik bersama mentor kesukaan kamu
          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    
  );
};

export default Home;