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

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      {haveAccount ? <Logout /> : <Login />}
    </Layout>
  );
}

export default SignIn;
