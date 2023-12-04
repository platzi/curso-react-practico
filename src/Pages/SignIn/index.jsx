import { useEffect, useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import Logout from "./Logout";
import Login from "./Login";

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const { haveAccount, setHaveAccount } = context;

  useEffect(() => {
    // Check if there is account information in localStorage
    const storedAccountInfo = localStorage.getItem("account");

    if (storedAccountInfo) {
      // If account information exists, parse and set it in context/state
      const parsedAccountInfo = JSON.parse(storedAccountInfo);
      setHaveAccount(parsedAccountInfo);
    }
  }, [setHaveAccount]);

  return <Layout>{haveAccount ? <Logout /> : <Login />}</Layout>;
}

export default SignIn;
