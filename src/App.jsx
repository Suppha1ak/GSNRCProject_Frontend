import { useState } from "react";
import { Routes, BrowserRouter , Route } from 'react-router-dom';
import LandingPage from "./component/page/landingPage";
import HomePage from "./component/page/homePage"
import ProductPage from "./component/page/productPage"
import Navbar from "./component/page/navbar"
import CreatePage from "./component/page/createProduct";
import UpdatePage from "./component/page/updatePage";
import DetailPage from "./component/page/detailPage"
import AboutPage from "./component/page/aboutPage"
import ContactPage from "./component/page/contactPage"
import "./assets/css/style.css";

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
    <BrowserRouter>
      <Navbar />
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/create' element={ <CreatePage /> } />
            <Route path='/update/:id' element={<UpdatePage />} />
            <Route path='/detail/:id' element={<DetailPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
  
};

export default App;
