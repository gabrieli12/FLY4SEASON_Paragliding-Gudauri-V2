import { Outlet } from 'react-router-dom'
import { Provider } from './components/Provider'
import Header from './components/Header'
import Footer from './components/Footer'
import Aside from './components/Aside'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top
  }, [pathname]); // run when path changes

  return null; // this component doesn’t render anything
}


function FullPage() {
  return (
    <>
      <ScrollToTop />
        <Provider>
            <Header />
            <Aside />
            <Outlet />
            <Footer />
        </Provider>
    </>
  )
}

export default FullPage