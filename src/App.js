import './App.css';
import Homepage from './components/Homepage/Homepage';
import Footer from "./components/Footer/Footer";
import About from "./components/About/About"
import Prediction from "./components/Prediction/Prediction"
import Faq from "./components/FAQ/Faq"
import News from "./components/News/News"
import Login from "./components/Login/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/prediction' element={<Prediction />} />
          <Route path='/login' element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
