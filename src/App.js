import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Page404 from "./pages/Page404/Page404";

export const CardContext = createContext({
  card: [],
  setCard: () => {}
});


function App() {
  const [card, setCard] = useState([])

  const value = {card, setCard}
  return (
    <CardContext.Provider value={value}>
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/laptops" element={<Page404 />} />
          <Route path="/desktop" element={<Page404 />} />
          <Route path="/network" element={<Page404 />} />
          <Route path="/printers" element={<Page404 />} />
          <Route path="/pc" element={<Page404 />} />
          <Route path="/allOthers" element={<Page404 />} />
          <Route path="/repairs" element={<Page404 />} />
          <Route path="/details" element={<Page404 />} />
        </Routes>

        <Footer />
      </Router>
    </div>
    </CardContext.Provider>
  );
}

export default App;
