import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Hero from './components/Hero'
import Aside from './components/Aside'

// pages
import FullPage from "./FullPage";
import Home from "./pages/Home";
import Fly from "./pages/Fly"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullPage />}>
          <Route index element={<Home />} />
          <Route path="fly" element={<Fly />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>

      </Routes>
        {/* <Hero /> */}
    </BrowserRouter>
  )
}

export default App
