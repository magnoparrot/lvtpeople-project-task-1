import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/layout/Header";

import Footer from "./components/layout/Footer";
import Body from "./components/layout/Nav";


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
      <BrowserRouter>
      <Routes>
      <Route path="Body" element={<Body/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
