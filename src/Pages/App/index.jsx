import { useRoutes, BrowserRouter } from 'react-router-dom'
import { useContext } from 'react'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import { ShoppingCartContext, ShoppingCartProvider } from '../../Context'
import { ResponsiveNavbarLeft } from '../../Components/ResponsiveNavbarLeft'
import { ResponsiveNavbarRight } from '../../Components/ResponsiveNavbarRight'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <Modals/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

const Modals = () => {
  const context = useContext(ShoppingCartContext)
  return (
  <>
    { context.openResponsiveNavbarLeft && <ResponsiveNavbarLeft /> }
    { context.openResponsiveNavbarRight && <ResponsiveNavbarRight /> }
  </>
  )
}

export default App
