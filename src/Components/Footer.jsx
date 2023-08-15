import {
  FaDollarSign,
  FaEarthAmericas,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";
import { User } from "../Context/UserContext";

const Footer = () => {
  const { location } = User();
  return (
    <div className="bg-gray-200 w-full p-10">
      <div className="max-w-6xl  ml-auto mr-auto ">
        <div className="md:block hidden">
          <p className="text-2xl font-semibold mt-5 mb-5">
            Explore other options in and around {location}
          </p>
          <div className="grid grid-cols-4">
            <div className="flex flex-col">
              <a href="/" className="mb-3 text-sm text-gray-500">
                Dénia
              </a>
              <a href="/" className="mb-3 text-sm text-gray-500">
                Ibiza
              </a>
              <a href="/" className="mb-3 text-sm text-gray-500">
                Tarragona
              </a>
            </div>
            <div className="flex flex-col">
              <a href="/" className="mb-3 text-sm text-gray-500">
                Calp
              </a>
              <a href="/" className="mb-3 text-sm text-gray-500">
                Torrevieja
              </a>
              <a href="/" className="mb-3 text-sm text-gray-500">
                Palma
              </a>
            </div>
            <div className="flex flex-col">
              <a href="/" className="mb-3 text-sm text-gray-500">
                Calp
              </a>
              <a href="/" className="mb-3 text-sm text-gray-500">
                Torrevieja
              </a>
              <a href="/" className="mb-3 text-sm text-gray-500">
                Palma
              </a>
            </div>
            <div className="flex flex-col">
              <a href="/" className="mb-3 text-sm text-gray-500">
                Calp
              </a>
              <a href="/" className="mb-3 text-sm text-gray-500">
                Torrevieja
              </a>
              <a href="/" className="mb-3 text-sm text-gray-500">
                Palma
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-20">
            <div className="grid md:grid-cols-4 grid-cols-1">
              <div className="flex flex-col">
                <p className="text-sm mb-3 font-semibold">Support</p>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Help Center
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  AirCover
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Supporting people with disabilities
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Cancellation options
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Our COVID-19 Response
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Report a neighborhood concern
                </a>
              </div>
              <div className="flex flex-col">
                <p className="text-sm mb-3 font-semibold">Community</p>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Airbnb.org: disaster relief housing
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Combating discrimination
                </a>
              </div>
              <div className="flex flex-col">
                <p className="text-sm mb-3 font-semibold">Hosting</p>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Airbnb your home
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  AirCover for Hosts
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Explore hosting resources
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Visit our community forum
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  How to host responsibly
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Airbnb-friendly apartments
                </a>
              </div>
              <div className="flex flex-col">
                <p className="text-sm mb-3 font-semibold">Airbnb</p>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Newsroom
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Learn about new features
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Letter from our founders
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Careers
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Investors
                </a>
                <a
                  href="/"
                  className="hover:underline text-sm mb-3 text-gray-500 "
                >
                  Gift cards
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-10 flex-col-reverse md:flex-row">
          <div className="flex justify-start md:justify-between mt-5 md:m-0">
            <div className="text-sm mr-5">© 2023 Airbnb, Inc.</div>
            <a href="/" className="hover:underline text-sm mr-5">
              Terms
            </a>
            <a href="/" className="hover:underline text-sm mr-5">
              Sitemap
            </a>
            <a href="/" className="hover:underline text-sm mr-5">
              Privacy
            </a>
            <a href="/" className="hover:underline text-sm mr-5">
              Your Privacy Choices
            </a>
          </div>
          <div className="flex justify-start md:justify-between">
            <FaEarthAmericas />
            <a href="/" className="text-sm mr-3 hover:underline">
              English (US)
            </a>
            <FaDollarSign />
            <a href="/" className="text-sm mr-3 hover:underline">
              USD
            </a>
            <div className="hidden md:flex">
              <a href="https://www.facebook.com/hasan.chowdhuryD">
                <FaSquareFacebook />
              </a>
              <a href="https://twitter.com/HasanCh38413037">
                <FaSquareTwitter />
              </a>
              <a href="https://www.instagram.com/hasan_d14/"></a>
              <FaSquareInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
