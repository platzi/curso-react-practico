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
  const userContext = useContext(UserContext)
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
