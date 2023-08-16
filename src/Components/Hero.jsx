import { User } from "../Context/UserContext";
import { FaHeart, FaShareFromSquare, FaMedal, FaStar } from "react-icons/fa6";
const Hero = () => {
  const {
    reviewCount,
    star,
    roomTitle,
    images1,
    images2,
    images3,
    images4,
    location,
    tags,
  } = User();
  if (!images1) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col-reverse md:flex-col">
      <div className="mt-5 mb-5">
        <div className="text-3xl">{roomTitle}</div>
        <div className="text-sm flex justify-between mt-3">
          <div className="flex justify-between">
            <div className="flex mr-3">
              <FaStar className="text-l mt-0.5 mr-1" />
              <p className="font-semibold">{star}</p>
            </div>
            <div className="flex mr-3  underline">
              <a href="/" className="font-semibold">
                {reviewCount} reviews
              </a>
            </div>
            <div className="flex mr-3">
              <FaMedal className="text-l mt-0.5 mr-1" />
              <p>{tags}</p>
            </div>
            <div className="flex mr-3 underline">
              <a href="/" className="font-semibold">
                {location}
              </a>
            </div>
          </div>
          <div className="md:flex hidden">
            <div className="flex mr-10">
              <FaShareFromSquare className="text-l mt-1 mr-2" />
              <p className="text-l underline">Share</p>
            </div>
            <div className="flex">
              <FaHeart className="text-l mt-1 mr-2" />
              <p className="text-l underline">Save</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4 sm:grid-cols-1 sm:grid-rows-1">
        <img
          src={images1}
          alt=""
          className="col-span-2 row-span-2 md:rounded-l-xl rounded-none"
        />
        <img src={images2} alt="" className="md:block hidden " />
        <img src={images3} alt="" className="rounded-r-xl md:block hidden" />
        <img src={images4} alt="" className="md:block hidden" />
        <img src={images1} alt="" className="rounded-r-xl md:block hidden" />
      </div>
      <button className="absolute bottom-[530px] right-5 md:hidden block  text-sm font-semibold text-white bg-black bg-opacity-50 p-1 rounded">
        1/4
      </button>
    </div>
  );
};

export default Hero;
