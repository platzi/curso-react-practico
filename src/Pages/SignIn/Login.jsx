import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div className="w-80 flex flex-col mt-4">
      <p className="font-light">Email:</p>
      <p className="font-light">Password:</p>
      <span className="mt-5 text-white h-14 flex justify-center items-center rounded-lg text-lg  bg-zinc-400">
        Log in
      </span>
      <p className=" my-5 font-light underline underline-offset-4 text-sm text-center">
        Forgot my password
      </p>

      <span
        onClick={navigateToSignUp}
        className="cursor-pointer border border-black h-14 flex justify-center items-center rounded-lg text-lg"
      >
        Sign Up
      </span>
    </div>
  );
}

export default Login;
