import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import '../../assets/css/style.css'

const videoSrc = new URL("../../assets/video/BlackCar.mp4", import.meta.url).href;
const LandingPage = ({ onNavigate }) => {
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const videoRef = React.useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
          // หากเกิดข้อผิดพลาดในการเล่นวิดีโอ แสดง error ใน console
          console.error("Video play failed:", error);
      });
  }

    function updateCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      const timeString = `${hours}:${minutes}:${seconds}`;
      setCurrentTime(timeString);
    }

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <video className="background-video" autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <header>
        <video ref={videoRef} autoPlay playsInline muted loop preload="auto">
          <source src={videoSrc} />
        </video>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 285 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              <rect x="0" y="0" width="100%" height="100%" />
              <text className="big-text" x="142.5" y="40">
                GSNRC
              </text>
              <text id="currentTime" className="small-text" x="142.5" y="60">
                {currentTime}
              </text>
            </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" />
        </svg>
      </header>
      <div className="chat-container">
        <br />
        <div className="message message-right">Hello and welcome to GSNRC.</div>
        <div className="message message-left">
          I would like to book a car with you.
        </div>
        <div className="message message-right">
          Please click to enter our page first.
        </div>
      </div>
      <button id="navigateButton" onClick={onNavigate}>Go to Home Page</button>
      <div className="social-icons">
        <a href="#" className="social-icon facebook">
          <div className="social-icon-content">
            <i className="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </div>
        </a>
        <a href="#" className="social-icon youtube">
          <div className="social-icon-content">
            <i className="fab fa-youtube"></i>
            <span>YouTube</span>
          </div>
        </a>
        <a href="#" className="social-icon instagram">
          <div className="social-icon-content">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </div>
        </a>
      </div>
    </>
  );
};

LandingPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default LandingPage;
