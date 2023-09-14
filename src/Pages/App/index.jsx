import { useContext } from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ShoppingCartContext, ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import './App.css'

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)
  const isLoggedUser = context.user && !context.signOutStatus;

  const authRoute = <Navigate to='/sign-in' replace />;
  const homeRoute = <Navigate to='/' replace />;

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/othes', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: !isLoggedUser ? <SignIn /> : homeRoute },
    { path: '/sign-up', element: !isLoggedUser ? <SignUp /> : homeRoute },
    { path: '/*', element: <NotFound /> },
  ])

  return(
    <RouterProvider router={router} />
  )
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <AppRoutes />
    </ShoppingCartProvider>
  )
}

export default App
