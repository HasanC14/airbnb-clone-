import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import HostInfo from "./Components/HostInfo";
import Map from "./Components/Map";
import Navbar from "./Components/Navbar";
import OrderCard from "./Components/OrderCard";
import Reviews from "./Components/Reviews";
import RoomInfo from "./Components/RoomInfo";
import UserContext from "./Context/UserContext";

function App() {
  return (
    <UserContext>
      <Navbar />
      <div className="max-w-6xl mx-auto py-8 px-4">
        <Hero />
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-2/3">
            <div className="space-y-8">
              <div className="space-y-4">
                <RoomInfo />
              </div>
              <div className="space-y-4">
                <HostInfo />
              </div>
              <div className="space-y-4">
                <About />
              </div>
            </div>
          </div>
          <div className="md:w-1/3 hidden md:block">
            <div className="stick top-8 ">
              <OrderCard />
            </div>
          </div>
        </div>
        <Reviews />
        <Map />
        <Footer />
      </div>
    </UserContext>
  );
}

export default App;
