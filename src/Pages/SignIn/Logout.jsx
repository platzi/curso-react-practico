import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";

function Logout() {
  const context = useContext(ShoppingCartContext);
  const { parseInfo } = context;
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div className="w-80 flex flex-col mt-4">
      <p className="font-light">
        Email: <span className="font-medium">{parseInfo.email}</span>
      </p>
      <p className="font-light">
        Password: <span className="font-medium">******</span>
      </p>
      <span
        onClick={() => {
          context.register();
          navigateHome();
        }}
        className="mt-5 text-white h-14 flex justify-center items-center rounded-lg text-lg  bg-black cursor-pointer"
      >
        Log in
      </span>
      <p className=" my-5 font-light underline underline-offset-4 text-sm text-center">
        Forgot my password
      </p>
      <span className=" border border-zinc-400 text-zinc-400 h-14 flex justify-center items-center rounded-lg text-lg">
        Sign up
      </span>
    </div>
  );
}

export default Logout;
