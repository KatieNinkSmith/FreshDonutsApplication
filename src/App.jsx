import "./App.css";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Nav />
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
