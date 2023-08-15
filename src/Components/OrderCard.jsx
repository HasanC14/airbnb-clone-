import { FaMinus, FaPlus, FaStar, FaAngleDown } from "react-icons/fa6";
import { User } from "../Context/UserContext";
import { useState } from "react";

const OrderCard = () => {
  const { price, reviewCount, star } = User();
  const [Guest, setGuest] = useState(0);
  const handlePlus = () => {
    setGuest(Guest + 1);
  };
  const handleMinus = () => {
    if (Guest != 0) return setGuest(Guest - 1);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-2xl p-5 border border-gray-300 mt-10">
      {/* Head */}
      <div className="flex justify-between">
        <div className="text-2xl font-bold">{price}</div>
        <div className="text-sm flex justify-between mt-3">
          <div className="flex justify-between">
            <div className="flex mr-3">
              <FaStar className="text-l mt-0.5 mr-1" />
              <p className="font-semibold">{star}</p>
            </div>
            <div className="flex mr-3  text-gray-400">
              <a href="/">{reviewCount} reviews</a>
            </div>
          </div>
        </div>
      </div>
      {/* Date */}
      <div className="flex justify-around border border-black rounded-lg mt-4">
        <div className="flex flex-col border-r-black p-3">
          <label className="text-xs ml-3 font-semibold">CHECK-IN</label>
          <input type="date" className="border-none text-sm" />
        </div>
        <div className="flex flex-col border-l border-l-black p-3">
          <label className="text-xs ml-3 font-semibold">CHECKOUT</label>
          <input type="date" className="border-none text-sm" />
        </div>
      </div>
      {/* Dropdown */}
      <div className="border border-b-black border-l-black border-r-black rounded-lg pt-3 pb-3">
        <div className="flex justify-around items-center">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            GUESTS({Guest} guest)
          </button>
          <FaAngleDown />
        </div>

        <div id="dropdown" className="hidden w-full bg-white rounded-lg shadow">
          <ul className="py-2 text-sm " aria-labelledby="dropdownDefaultButton">
            <li className="flex justify-between items-center ml-4 mr-4 mb-5">
              <p className="text-lg font-bold">Children</p>
              <div className="flex">
                <button className="btn btn-circle mr-5" onClick={handlePlus}>
                  <FaPlus />
                </button>
                <button className="btn btn-circle ml-5" onClick={handleMinus}>
                  <FaMinus />
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center ml-4 mr-4">
              <p className="text-lg font-bold">Adults</p>
              <div className="flex">
                <button className="btn btn-circle mr-5" onClick={handlePlus}>
                  <FaPlus />
                </button>
                <button className="btn btn-circle ml-5" onClick={handleMinus}>
                  <FaMinus />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Button */}
      <div className="mt-3">
        <button className="btn bg-rose-500  hover:bg-rose-400 w-full">
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
