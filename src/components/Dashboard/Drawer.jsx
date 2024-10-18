import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Drawer() {
  const location = useLocation();

  const currentPage = () => {
    if (location.pathname.includes("/userprofile")) {
      return "Your Account";
    } else if (location.pathname.includes("/addresses")) {
      return "Addresses";
    } else if (location.pathname.includes("/cart")) {
      return "Cart";
    } else if (location.pathname.includes("/orders")) {
      return "Orders";
    } else {
      return "Menu"; // Default case for homepage or other paths
    }
  };

  return (
    <>
      <div>
        <div className="w-full flex flex-row justify-between p-2 sm:p-10 lg:hidden">
          <div className="text-black flex flex-row justify-center items-center gap-4">
            <img
              src="/assets/lilies.svg"
              alt=""
              className="object-cover w-8/12 sm:w-3/12 h-auto"
            />
            <h1 className="text-3xl hidden sm:block">Lilies</h1>
          </div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-ghost shadow-md"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <h1 className="text-black">{currentPage()}</h1>
          </button>
          <dialog id="my_modal_3" className="modal bg-white text-white">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg py-4">Navigation</h3>
              <p className="py-4">
                <NavLink >Menu</NavLink>
              </p>
              <p className="py-4">
                <NavLink to="userprofile">Your Account</NavLink>
              </p>
              <p className="py-4">
                <NavLink to="addresses">Addresses</NavLink>
              </p>
              <p className="py-4">
                <NavLink to="cart">Cart</NavLink>
              </p>
              <p className="py-4">
                <NavLink to="orders">Orders</NavLink>
              </p>
            </div>
          </dialog>
        </div>

        <div className="hidden w-full h-screen lg:flex items-center m-7 text-white">
          <ul className="menu bg-customGreen rounded-box w-56 gap-5">
            <li className="menu-title flex flex-row justify-center gap-3 text-customYellow text-3xl">
              <img src="/assets/lilies.svg" alt="" className=" w-2/12 h-auto" />
              Lilies
            </li>
            <li>
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  `flex flex-row justify-center ${
                    isActive
                      ? "bg-customYellow text-black hover:bg-customYellow"
                      : "text-white"
                  }`
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="userprofile"
                className={({ isActive }) =>
                  `flex flex-row justify-center ${
                    isActive
                      ? "bg-customYellow text-black hover:bg-customYellow"
                      : "text-white"
                  }`
                }
              >
                Your Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="addresses"
                className={({ isActive }) =>
                  `flex flex-row justify-center ${
                    isActive
                      ? "bg-customYellow text-black hover:bg-customYellow"
                      : "text-white"
                  }`
                }
              >
                Addresses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="cart"
                className={({ isActive }) =>
                  `flex flex-row justify-center ${
                    isActive
                      ? "bg-customYellow text-black hover:bg-customYellow"
                      : "text-white"
                  }`
                }
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="orders"
                className={({ isActive }) =>
                  `flex flex-row justify-center ${
                    isActive
                      ? "bg-customYellow text-black hover:bg-customYellow"
                      : "text-white"
                  }`
                }
              >
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Drawer;
