import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./pages/home";
import Backgrounds from "./pages/backgrounds";
import Fashion from "./pages/fashion";
import Nature from "./pages/nature";
import Search from "./pages/search";
import Sports from "./pages/sports";
import Errorpage from "./pages/errorpage";
import Download from "./pages/download";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Similar from "./pages/similar";




function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backgrounds" element={<Backgrounds />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/search" element={<Search />} />
        <Route path="/download" element={<Download />}>
          <Route path="/download/similar-images" element={<Similar />}></Route>
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
  