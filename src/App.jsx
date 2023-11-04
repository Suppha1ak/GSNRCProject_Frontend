import { useState } from "react";
import { Routes, BrowserRouter , Route } from 'react-router-dom';
import Index from "./component/index";

const App = () => {
  const [showLandingPage, setShowLandingPage] = useState(() => {
    return !sessionStorage.getItem("visitedBefore");
  });

  if (showLandingPage) {
    return (
      <Index.LandingPage
        onNavigate={() => {
          sessionStorage.setItem("visitedBefore", "true");
          setShowLandingPage(false);
        }}
      />
    );
  }

  return (
    <BrowserRouter>
        <Index.Navbar />   
        <div className='App'>
          <Routes>
            <Route path='/' element={<Index.HomePage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
  
};

export default App;
