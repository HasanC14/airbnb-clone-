import { FaBed } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <p className="text-2xl font-semibold">About this place</p>
      <p className="text-lg">
        Open and communicative, with donation of people and happy to welcome
        friends from the world at home...
      </p>
      <button
        className="btn-sm mt-2 -ml-3 text-lg underline font-semibold"
        onClick={() => window.my_modal_2.showModal()}
      >
        Show More
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">About this place</h3>
          <p className="py-4">
            Nice and spacious room in the heart of Valencia, with double bed and
            a balcony. Silent because there is no traffic. Surrounded by all the
            landmarks , museums , cathedral , leisure, and close to the beach
            where you can go by bike, bus , tram or car if your means of
            transportation. I would love to receive people wanting to enjoy my
            city and help in what I can .
          </p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
      <hr className="mt-8 mb-8" />
      <p className="text-2xl mb-5 font-semibold">Where you'll sleep </p>
      <div className="grid grid-cols-3 gap-3">
        <div className="border border-gray-300 flex flex-col justify-around items-center pl-5 pr-5 pt-7 pb-7 rounded-xl">
          <FaBed className="text-2xl" />
          <p className="font-semibold">Bedroom</p>
          <p>1 double bed</p>
        </div>
        <div></div>
      </div>
      <hr className="mt-8 mb-8" />
    </div>
  );
};

export default About;
