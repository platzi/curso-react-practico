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
    { path: '/', element: isLoggedUser ? <Home /> : authRoute, children: [
      { path: 'clothes', element: null },
      { path: 'electronics', element: null },
      { path: 'furnitures', element: null },
      { path: 'toys', element: null },
      { path: 'others', element: null },
    ]},
    { path: '/my-account', element: isLoggedUser ? <MyAccount /> : authRoute },
    { path: '/my-account/edit', element: isLoggedUser ? <SignUp edit={true} /> : authRoute },
    { path: '/my-order', element: isLoggedUser ? <MyOrder /> : authRoute },
    { path: '/my-orders', element: isLoggedUser ? <MyOrders /> : authRoute },
    { path: '/my-orders/last', element: isLoggedUser ? <MyOrder /> : authRoute },
    { path: '/my-orders/:id', element: isLoggedUser ? <MyOrder /> : authRoute },
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
