import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const context = useContext(ShoppingCartContext);
  var name, email, password;
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const sendData = () => {
    context.createAccount(name, email, password);
    context.register();
    navigateToHome();
  };

  return (
    <Layout>
      <form action="" className="w-80 flex flex-col mt-4">
        <label htmlFor="name" className="font-light">
          Your name:
        </label>
        <input
          type="text"
          className="border-2 h-10 rounded-lg border-slate-400 p-4 focus:outline-none"
          placeholder="Peter"
          id="name"
          onChange={(e) => (name = e.target.value)}
        />
        <label htmlFor="email" className="mt-4 font-light">
          Your email:
        </label>
        <input
          type="text"
          className="border-2 h-10 rounded-lg border-slate-400 p-4 focus:outline-none"
          placeholder="hi@helloworld.com"
          id="email"
          onChange={(e) => {
            email = e.target.value;
          }}
        />
        <label htmlFor="password" className="mt-4 font-light">
          Your password:
        </label>
        <input
          type="text"
          className="border-2 h-10 rounded-lg border-slate-400 p-4 focus:outline-none"
          placeholder="*******"
          id="password"
          onChange={(e) => {
            password = e.target.value;
          }}
        />
        <input
          type="button"
          value="Create"
          className="mt-5 text-white h-12 flex justify-center items-center rounded-lg text-lg  bg-black"
          onClick={() => sendData()}
        />
      </form>
    </Layout>
  );
}

export default SignUp;
