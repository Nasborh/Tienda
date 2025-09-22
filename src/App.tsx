import { HeaderUp, HeaderHalf, HeaderDown } from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import { Footer } from "./Components/Footer";
import { ThemeInit } from "../.flowbite-react/init";
import { Index } from "./Pages/Index";
import { Nosotros } from "./Pages/Nosotros";
import { Ayuda } from "./Pages/Ayuda";

export default function App() {
  return (
    <>
      <ThemeInit />
      <BrowserRouter>
        <HeaderUp />
        <HeaderHalf />
        <HeaderDown />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Ayuda" element={<Ayuda />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
