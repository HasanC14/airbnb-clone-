import {
  FaBriefcase,
  FaGalacticSenate,
  FaRegLightbulb,
  FaUserGraduate,
} from "react-icons/fa6";
import { User } from "../Context/UserContext";

const HostInfo = () => {
  const {
    hostImage,
    hostName,
    years,
    reviewCount,
    star,
    tags,
    university,
    work,
  } = User();
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-300 rounded-xl">
      <p className="text-3xl font-semibold mt-5">Meet Your Host </p>
      {/* Profile Card */}
      <div className="card md:w-[450px] w-96 bg-base-100 shadow-2xl p-10 border border-gray-300 mt-10">
        <div className=" flex justify-around">
          <div className="flex flex-col justify-center items-center">
            <img src={hostImage} alt="profile" className="rounded-full w-28" />
            <p className="text-2xl font-bold">{hostName}</p>
            <p className="text-lg">{tags}</p>
          </div>
          <div className="flex flex-col">
            <div className="mt-5">
              <p className="text-2xl font-semibold">{reviewCount}</p>
              <p className="text-sm">Reviews</p>
            </div>
            <div className="mt-5">
              <p className="text-2xl font-semibold">{star}</p>
              <p className="text-sm">Rating</p>
            </div>
            <div className="mt-5">
              <p className="text-2xl font-semibold">{years}</p>
              <p className="text-sm">Years of hosting</p>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="mt-5 md:w-[450px] w-96">
        <div className="flex items-center mb-5">
          <div className="mr-3">
            <FaUserGraduate className="text-xl" />
          </div>
          <div>
            <p className="text-lg">My University: {university}</p>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <div className="mr-3">
            <FaBriefcase className="text-xl" />
          </div>
          <div>
            <p className="text-lg">Work: {work}</p>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <div className="mr-3">
            <FaRegLightbulb className="text-xl" />
          </div>
          <div>
            <p className="text-lg">Fun fact: No one believes my age</p>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <div className="mr-3">
            <FaGalacticSenate className="text-xl" />
          </div>
          <div>
            <p className="text-lg">
              What makes my home unique: Good energy and feeling at home
            </p>
          </div>
        </div>
        <p className="text-lg">
          Open and communicative, with donation of people and happy to welcome
          friends from the world at home
        </p>
        <button
          className="btn-sm mt-2 -ml-3 text-lg underline font-semibold"
          onClick={() => window.my_modal_1.showModal()}
        >
          Show More
        </button>
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">About this place</h3>
            <p className="py-4">
              Nice and spacious room in the heart of Valencia, with double bed
              and a balcony. Silent because there is no traffic. Surrounded by
              all the landmarks , museums , cathedral , leisure, and close to
              the beach where you can go by bike, bus , tram or car if your
              means of transportation. I would love to receive people wanting to
              enjoy my city and help in what I can .
            </p>
            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
        <div>
          <button className="btn bg-black text-white mt-5 -ml-1">
            Message Host
          </button>
        </div>
        <hr className="mt-8 mb-8" />
        <p className="text-xs mb-8">
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </p>
      </div>
    </div>
  );
};

export default HostInfo;
