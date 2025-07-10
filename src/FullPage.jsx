import { Outlet } from 'react-router-dom'
import { Provider } from './components/Provider'
import Header from './components/Header'
import Aside from './components/Aside'


function FullPage() {
  return (
    <>
        <Provider>
            <Header />
            <Aside />
            <Outlet />
        </Provider>
    </>
  )
}

export default FullPage