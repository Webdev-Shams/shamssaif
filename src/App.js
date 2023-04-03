import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import MobileMenu from './components/MobileMenu/MobileMenu';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <MobileMenu></MobileMenu>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/skills" element={<Skills></Skills>} ></Route>
        <Route path="/works" element={<Works></Works>} ></Route>
        <Route path="/contact" element={<Contact></Contact>} ></Route>
        <Route path="/mbl" element={<MobileMenu></MobileMenu>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
