import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const navSign = () => {
    navigate("/sign-in");
  };
  const activeStyle = "underline underline-offset-4";

  return (
    <>
      {context.login ? (
        <nav className="bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
          <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
              <NavLink to="/">Shopi</NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={() => context.setSearchByCategory()}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clothes"
                onClick={() => context.setSearchByCategory("clothes")}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/electronics"
                onClick={() => context.setSearchByCategory("electronics")}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/furnitures"
                onClick={() => context.setSearchByCategory("furnitures")}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Furnitures
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/toys"
                onClick={() => context.setSearchByCategory("toys")}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/others"
                onClick={() => context.setSearchByCategory("others")}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Others
              </NavLink>
            </li>
          </ul>
          <ul className="flex items-center gap-3">
            <li className="text-black/60">{context.parseInfo.email}</li>
            <li>
              <NavLink
                to="/my-orders"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-account"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My Account
              </NavLink>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                context.signOut();
                navSign();
              }}
            >
              Sign out
            </li>
            <li className="flex items-center">
              <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
              <div>{context.cartProducts.length}</div>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
          <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
              <NavLink to="/sign-in">Shopi</NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-in"
                onClick={() => context.setSearchByCategory()}
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-in"
                onClick={() => context.setSearchByCategory("clothes")}
              >
                Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-in"
                onClick={() => context.setSearchByCategory("electronics")}
              >
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-in"
                onClick={() => context.setSearchByCategory("furnitures")}
              >
                Furnitures
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-in"
                onClick={() => context.setSearchByCategory("toys")}
              >
                Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-in"
                onClick={() => context.setSearchByCategory("others")}
              >
                Others
              </NavLink>
            </li>
          </ul>
          <ul className="flex items-center gap-3">
            <li>
              <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Sign in
              </NavLink>
            </li>
            <li className="flex items-center">
              <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
              <div>{context.cartProducts.length}</div>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
