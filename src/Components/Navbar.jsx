import {
  FaEarthAmericas,
  FaUser,
  FaMagnifyingGlassLocation,
} from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="border border-b-gray-200 flex justify-center align-middle">
      <div className="navbar bg-base-100 max-w-6xl ">
        <div className="navbar-start">
          <img
            src="/public/navlogo.png"
            className="md:btn md:btn-ghost hidden normal-case text-xl"
          />
        </div>
        <div className="navbar-center">
          <div className="form-control relative">
            <input
              type="text"
              placeholder="Start your search"
              className="input rounded-3xl input-bordered pr-20"
            />
            <button className="btn text-xl text-rose-600 btn-ghost btn-circle absolute right-2 top-1/2 transform -translate-y-1/2">
              <FaMagnifyingGlassLocation />
            </button>
          </div>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end flex justify-center items-center">
            <a
              href="/"
              className="hidden md:block hover:bg-slate-100 pt-2 pb-2 pl-5 pr-5 rounded-3xl"
            >
              Airbnb your home
            </a>
            <label className="md:btn md:btn-ghost md:btn-circle avatar hidden ">
              <FaEarthAmericas />
            </label>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <FaUser />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-40 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Sign up</a>
              </li>
              <li>
                <a>Log in</a>
              </li>
              <li>
                <a>Airbnb your home</a>
              </li>
              <li>
                <a>Help center</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
