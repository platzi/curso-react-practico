import { useContext, useRef } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";

function Edit() {
  const context = useContext(ShoppingCartContext);
  const form = useRef(null);
  const navigate = useNavigate();
  const navigateToAccount = () => {
    navigate("/my-account");
  };
  const sendData = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    context.createAccount(data.name, data.email, data.password);
    context.register();
    navigateToAccount();
  };
  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">My Account</h1>
      <form ref={form} className="w-80 flex flex-col mt-4">
        <label htmlFor="name" className="font-light">
          Your name:
        </label>
        <input
          type="text"
          name="name"
          className="border-2 h-10 rounded-lg border-slate-400 p-4 focus:outline-none"
          placeholder="Peter"
          id="name"
          defaultValue={context.parseInfo.name}
        />
        <label htmlFor="email" className="mt-4 font-light">
          Your email:
        </label>
        <input
          type="text"
          name="email"
          className="border-2 h-10 rounded-lg border-slate-400 p-4 focus:outline-none"
          placeholder="hi@helloworld.com"
          id="email"
          defaultValue={context.parseInfo.email}
        />
        <label htmlFor="password" className="mt-4 font-light">
          Your password:
        </label>
        <input
          type="text"
          name="password"
          className="border-2 h-10 rounded-lg border-slate-400 p-4 focus:outline-none"
          placeholder="*******"
          id="password"
          defaultValue={context.parseInfo.password}
        />
        <input
          type="button"
          value="Edit"
          className="mt-5 text-white h-12 flex justify-center items-center rounded-lg text-lg  bg-black"
          onClick={() => sendData()}
        />
      </form>
    </Layout>
  );
}

export default Edit;
