import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="App">
  <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    
    <Footer/>
  </Router>

    </div>
  );
}

export default App;
