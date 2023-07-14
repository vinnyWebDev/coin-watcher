import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Fiat from './components/Fiat';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path ="/fiat" element={<Fiat/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
