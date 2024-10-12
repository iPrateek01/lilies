import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="navbar bg-customGreen te text-white p-5">
        <div className="flex-1">
          <a className="btn btn-ghost text-3xl">
            <img src="./assets/lilies.svg" alt="" className="size-9" />
            Lilies
          </a>
        </div>
        <div className="flex-none gap-7 text-xl">
          <div className="form-control">
            <Link to="/login">Login</Link>
          </div>
          <div className="form-control">
            <Link to="/signup">
              <button
                style={{ backgroundColor: "rgba(226, 184, 135, 1)" }}
                className="btn text-black">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
