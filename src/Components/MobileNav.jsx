import { FaStar } from "react-icons/fa6";
import { User } from "../Context/UserContext";

const MobileNav = () => {
  const { price, star } = User();

  return (
    <div className="border border-b-gray-200 flex justify-center align-middle">
      <div className="navbar bg-base-100 max-w-6xl ">
        <div className="navbar-start ml-3">
          <div className="grid grid-cols-1">
            <div className="text-xl font-bold">{price}</div>
            <div className="text-sm flex justify-between">
              <div className="flex justify-between">
                <div className="flex mr-3">
                  <FaStar className="text-l mt-0.5 mr-1" />
                  <p className="font-semibold">{star}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <button className="btn bg-rose-500  hover:bg-rose-400 w-full">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
