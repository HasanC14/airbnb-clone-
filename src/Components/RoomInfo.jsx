import { User } from "../Context/UserContext";

const RoomInfo = () => {
  const { images2 } = User();
  return (
    <div>
      <img src={images2} alt="" />
      <img src={images2} alt="" />
      <img src={images2} alt="" />
    </div>
  );
};

export default RoomInfo;
