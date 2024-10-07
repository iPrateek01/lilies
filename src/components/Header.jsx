function Header() {
  return (
    <>
      <div className="navbar bg-customGreen te text-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-3xl">
            <img src="./assets/lilies.svg" alt="" className="size-9" />
            Lilies
          </a>
        </div>
        <div className="flex-none gap-7 text-xl">
          <div className="form-control">
            <a href="/login">Login</a>
          </div>
          <div className="form-control">
            <a href="/signup">
              <button
                style={{ backgroundColor: "rgba(226, 184, 135, 1)" }}
                className="btn text-black"
              >
                Sign Up
              </button>
            </a>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
