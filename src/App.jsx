import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Service from "./components/Service";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import WhyHireMe from "./components/WhyHireMe";
import Coloboration from "./components/Coloboration";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out", // Jenis easing animasi
      once: true, // Animasi hanya terjadi satu kali (tidak akan animasi ulang saat scroll kembali)
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rute untuk halaman utama */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Coloboration />
              {/* <Contact /> */}
              <WhyHireMe />
            </>
          }
        />
        {/* Rute untuk halaman Test */}
        <Route path="/project/test" element={<Test />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
