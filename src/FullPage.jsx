import { Outlet } from 'react-router-dom'
import { Provider } from './components/Provider'
import Header from './components/Header'
import Footer from './components/Footer'
import Aside from './components/Aside'


function FullPage() {
  return (
    <>
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