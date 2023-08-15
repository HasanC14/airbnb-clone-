import { FaStar } from "react-icons/fa6";
import { User } from "../Context/UserContext";
const Reviews = () => {
  const { star, reviewCount, reviews } = User();
  if (!reviews) {
    return <p>Loading...</p>; // Show loading state while data is being fetched
  }
  return (
    <div>
      <div className="mt-5">
        {/* Title */}
        <div className="flex flex-row">
          <p className="text-2xl mt-1 mr-2 font-semibold">
            <FaStar />
          </p>
          <p className="text-2xl font-semibold">{star}</p>
          <p className="text-2xl font-semibold ml-5">{reviewCount} reviews</p>
        </div>
        {/* Progress Bar */}
        <div className="md:grid grid-cols-2 gap-4 mt-5 hidden">
          <div className="mr-10">
            <div className="flex justify-between items-center">
              <p>Cleanliness</p>
              <progress className="progress w-40" value="95" max="100" />
            </div>
            <div className="flex justify-between items-center">
              <p>Communication</p>
              <progress
                className="progress w-40"
                value="100"
                max="100"
              ></progress>
            </div>
            <div className="flex justify-between items-center">
              <p>Check-in</p>
              <progress
                className="progress w-40"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p>Accuracy</p>
              <progress
                className="progress w-40"
                value="90"
                max="100"
              ></progress>
            </div>
            <div className="flex justify-between items-center">
              <p>Location</p>
              <progress
                className="progress w-40"
                value="85"
                max="100"
              ></progress>
            </div>
            <div className="flex justify-between items-center">
              <p>Value</p>
              <progress
                className="progress w-40"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-5">
          {reviews.map((review) => (
            <div key={review.id}>
              {/* title */}
              <div className="flex">
                <img src={review.img} alt="" className="w-14 mr-3" />
                <div>
                  <p className="font-semibold text-lg">{review.name}</p>
                  <p className="text-gray-500">{review.formattedDate}</p>
                </div>
              </div>
              {/* comment */}
              <div className="mt-3">{review.review}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
