import { useContext } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider, UserProvider, UserContext } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import SignUp from '../Signup'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  const userContext = useContext(UserContext)
  const isEnabled = userContext.isLoggedIn && userContext.user
  let routes = useRoutes([
    { path: '/', element: isEnabled? <Home />:<SignIn/> },
    { path: '/clothes', element: isEnabled? <Home />:<SignIn/> },
    { path: '/electronics', element: isEnabled? <Home />:<SignIn/> },
    { path: '/furnitures', element: isEnabled? <Home />:<SignIn/> },
    { path: '/toys', element: isEnabled? <Home />:<SignIn/> },
    { path: '/others', element: isEnabled? <Home />:<SignIn/> },
    { path: '/my-account', element: isEnabled?<MyAccount />:<SignIn/> },
    { path: '/my-order', element: isEnabled?<MyOrder />:<SignIn/> },
    { path: '/my-orders', element: isEnabled?<MyOrders />:<SignIn/> },
    { path: '/my-orders/last', element: isEnabled?<MyOrder />:<SignIn/> },
    { path: '/my-orders/:id', element: isEnabled?<MyOrder />:<SignIn/> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  const userLocalStorage = localStorage.getItem("user")
  const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn")
  const registeredUsers = localStorage.getItem("registeredUsers")
  if (!userLocalStorage && !isLoggedInLocalStorage && !registeredUsers){
    localStorage.setItem("user", "null")
    localStorage.setItem("isLoggedIn", "false")
    localStorage.setItem("registeredUsers", "[]")
  } 

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <UserProvider>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </UserProvider>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
