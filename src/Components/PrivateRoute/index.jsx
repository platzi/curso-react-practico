import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export default function PrivateRoute({ element }) {
  const context = useContext(ShoppingCartContext);
  const { login } = context;
  const location = useLocation();

  return (
    <>
      {login ? (
        element
      ) : (
        <Navigate to="/sign-in" state={{ from: location }} replace />
      )}
    </>
  );
}
