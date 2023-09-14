import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import './App.css'

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
  { path: '/sign-in', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
  { path: '/*', element: <NotFound /> },
])

const App = () => {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  )
}

export default App
