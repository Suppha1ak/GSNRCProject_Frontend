import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import PropTypes from 'prop-types';

const LandingPage = ({ onNavigate }) => {
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const videoRef = React.createRef();

  LandingPage.propTypes = {
    onNavigate: PropTypes.func.isRequired,
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      videoRef.current.removeAttribute("autoplay");
      videoRef.current.pause();
    }

    function updateCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      const timeString = `${hours}:${minutes}:${seconds}`;
      setCurrentTime(timeString);
    }

    // อัปเดตเวลาทันทีเมื่อ component ถูก render
    updateCurrentTime();

    // อัปเดตเวลาทุก ๆ 1 วินาที
    const interval = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [videoRef]);
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </head>
      <header>
        <video autoPlay playsInline muted loop preload>
          <source src="https://vod-progressive.akamaized.net/exp=1697141733~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3680%2F21%2F543403676%2F2577064908.mp4~hmac=0078ac89976af3ddb4bcc7f9cb4137c8ddddd4a22c2c6acc74c287404b12fdc1/vimeo-prod-skyfire-std-us/01/3680/21/543403676/2577064908.mp4?filename=file.mp4" />
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

export default LandingPage;
