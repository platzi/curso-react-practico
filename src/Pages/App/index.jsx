import { useRoutes, BrowserRouter, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext, ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import PrivateRoute from "../../Components/PrivateRoute";
import "./App.css";

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext);

  let routes = useRoutes([
    { path: "/", element: <PrivateRoute element={<Home />} /> },
    { path: "/clothes", element: <PrivateRoute element={<Home />} /> },
    { path: "/electronics", element: <PrivateRoute element={<Home />} /> },
    { path: "/furnitures", element: <PrivateRoute element={<Home />} /> },
    { path: "/toys", element: <PrivateRoute element={<Home />} /> },
    { path: "/others", element: <PrivateRoute element={<Home />} /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
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
