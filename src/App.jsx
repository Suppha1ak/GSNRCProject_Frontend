import { useState } from "react";
import { Routes, BrowserRouter , Route } from 'react-router-dom';
import Index from "./component/index";
import "./assets/css/style.css";

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
            <Route path='/product' element={<Index.ProductPage />} />
            <Route path='/create' element={<Index.CreatePage />} />
            <Route path='/update' element={<Index.UpdatePage />} />
            <Route path='/detail/:id' element={<Index.DetailPage />} />
            <Route path='/about' element={<Index.AboutPage />} />
            <Route path='/contact' element={<Index.ContactPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
  
};

export default App;
