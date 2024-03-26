import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyAccountEdit from '../MyAccountEdit'
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

  const context = useContext(ShoppingCartContext)

  let routes = useRoutes([
    { path: '/', element: context.logout === false ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/clothes', element: context.logout === false ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/electronics', element: context.logout === false ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/furnitures', element: context.logout === false ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/toys', element: context.logout === false ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/others', element: context.logout === false ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/my-account', element: context.logout === false ? <MyAccount/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/my-account-edit', element: context.logout === false ? <MyAccountEdit/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/my-order', element: context.logout === false ? <MyOrder/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/my-orders', element: context.logout === false ? <MyOrders/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/my-orders/last', element: context.logout === false ? <MyOrder/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/my-orders/:id', element: context.logout === false ? <MyOrder/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/sign-in', element: <SignIn/>},
    { path: '/sign-up', element: <SignUp/>},
    { path: '/*', element: context.logout === false ? <NotFound/> : <Navigate replace to={'/sign-in'}/> }
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
