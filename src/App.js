import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Menu from "./Components/Menu";
import Contact from "./Pages/Contact";
import ListadoAdmin from "./Pages/ListadoAdmin";
import AddTema from "./Pages/AddTema";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<ListadoAdmin />} />
          <Route path="/addTema" element={<AddTema />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
