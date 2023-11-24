import { useContext } from "react";
import Layout from "../../Components/Layout";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { ShoppingCartContext } from "../../Context";
import Logout from "./Logout";

function SignIn() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const context = useContext(ShoppingCartContext);
  const { login } = context;
  return (
    <Layout>
      {login && <Logout />}
      {!login && <Login />}
    </Layout>
  );
}

export default SignIn;
