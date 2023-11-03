import { useState } from "react";
import LandingPage from "./landingPage";

const LandingPage_controller = () => {
    const [showLandingPage, setShowLandingPage] = useState(() => {
        return !sessionStorage.getItem("visitedBefore");
      });
    
      if (showLandingPage) {
        return (
          <LandingPage
            onNavigate={() => {
              sessionStorage.setItem("visitedBefore", "true");
              setShowLandingPage(false);
            }}
          />
        );
      }
}

export default LandingPage_controller;