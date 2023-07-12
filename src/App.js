import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Nav from "./header/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Stack from "./pages/stack";
import Contect from "./pages/contect";
// import Another from "./pages/another";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/contect" element={<Contect />} />
          {/* <Route path="/another" element={<Another />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}