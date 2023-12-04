import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";

function MyAccount() {
  const context = useContext(ShoppingCartContext);
  const { parseInfo } = context;
  const navigate = useNavigate();
  const navigateEdit = () => {
    navigate("/my-account/edit");
  };
  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">My Account</h1>
      <div className="w-80 flex flex-col mt-4">
        <p className="font-light">
          Name: <span className="font-medium">{parseInfo.name}</span>
        </p>
        <p className="font-light">
          Email: <span className="font-medium">{parseInfo.email}</span>
        </p>
        <span
          onClick={() => {
            // context.register();
            navigateEdit();
          }}
          className="mt-5  h-14 flex justify-center items-center rounded-lg text-lg border-black border cursor-pointer"
        >
          Edit
        </span>
      </div>
    </Layout>
  );
}

export default MyAccount;
