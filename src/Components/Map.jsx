import { User } from "../Context/UserContext";

const Map = () => {
  const { locationFullDetails, location } = User();
  return (
    <div>
      <p className="text-2xl font-semibold mt-5 mb-5">Where you’ll be </p>
      <div className="w-full flex justify-center items-center">
        <iframe
          width="1200"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Dhaka%20Bangladesh+(Hasan)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="mt-5">
        <p className="font-semibold mb-3">{location}</p>
        <p>{locationFullDetails}</p>
      </div>
      <hr className="mt-8 mb-8" />
      <div>
        <p className="text-2xl font-semibold mt-5 mb-5">Things to know </p>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="flex flex-col">
            <p className="font-semibold">House rules</p>
            <p>Check-in after 2:00 PM</p>
            <p>Checkout before 11:00 AM</p>
            <p>2 guests maximum</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Safety & property</p>
            <p>Security camera/recording device</p>
            <p>Carbon monoxide alarm</p>
            <p>Smoke alarm</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Cancellation policy</p>
            <p>
              Add your trip dates to get the cancellation details for this stay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
