import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import SignUp from "../SignIn/SignUp";
import PrivateRoute from "../../Components/PrivateRoute";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <PrivateRoute element={<Home />} /> },
    { path: "/clothes", element: <PrivateRoute element={<Home />} /> },
    { path: "/electronics", element: <PrivateRoute element={<Home />} /> },
    { path: "/furnitures", element: <PrivateRoute element={<Home />} /> },
    { path: "/toys", element: <PrivateRoute element={<Home />} /> },
    { path: "/others", element: <PrivateRoute element={<Home />} /> },
    { path: "/my-account", element: <PrivateRoute element={<MyAccount />} /> },
    { path: "/my-order", element: <PrivateRoute element={<MyOrder />} /> },
    { path: "/my-orders", element: <PrivateRoute element={<MyOrders />} /> },
    {
      path: "/my-orders/last",
      element: <PrivateRoute element={<MyOrder />} />,
    },
    { path: "/my-orders/:id", element: <PrivateRoute element={<MyOrder />} /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
