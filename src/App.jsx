import { useState } from "react";
import LandingPage from "./component/LandingPage";

const App = () => {
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

  return (
    <div>
      <h1>Welcome ยินดีต้อนรับ</h1>
    </div>
  );
};

export default App;
