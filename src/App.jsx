import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Fleet from "./pages/Fleet.jsx";
import Projects from "./pages/Projects.jsx";
import Clients from "./pages/Clients.jsx";
import Certificates from "./pages/Certificates.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [lang, setLang] = useState("ar");

  return (
    <Routes>
      <Route path="/" element={<MainLayout lang={lang} setLang={setLang} />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="fleet" element={<Fleet />} />
        <Route path="projects" element={<Projects />} />
        <Route path="clients" element={<Clients />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="contact" element={<Contact />} />
        {/* 404 fallback */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
