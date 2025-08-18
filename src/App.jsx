import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// pages
import FullPage from "./FullPage";
const Home = React.lazy(() => import("./pages/Home"));
const Fly = React.lazy(() => import("./pages/Fly"));
const About = React.lazy(() => import("./pages/About"));
const Gallery = React.lazy(() => import("./pages/Gallery"));

// import Home from "./pages/Home";
// import Fly from "./pages/Fly"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Gallery from "./pages/Gallery"

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="absolute w-full h-full flex flex-col text-white justify-center items-center gap-16 bg-[#0a3351] max-sm:gap-12">
            <h2 className="text-4xl font-winky max-sm:text-3xl">FLY4SEASON</h2>
            <div className="flex gap-3">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white  "
                role="status"
              ></div>

              <span className="text-2xl font-jersey max-sm:text-xl">
                Loading...
              </span>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<FullPage />}>
            <Route index element={<Home />} />
            <Route path="fly" element={<Fly />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Suspense>

      {/* <Hero /> */}
    </BrowserRouter>
  );
}

export default App;
