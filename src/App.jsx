import { Routes, BrowserRouter , Route } from 'react-router-dom';
import Index from "./component/index";

const App = () => {

  return (
    <BrowserRouter>
      <Index.LandingPage />
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
