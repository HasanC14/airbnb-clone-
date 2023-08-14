import { User } from "../Context/UserContext";

const HostInfo = () => {
  const { images3 } = User();
  return (
    <div>
      <img src={images3} alt="" />
      <img src={images3} alt="" />
      <img src={images3} alt="" />
      <img src={images3} alt="" />
    </div>
  );
};

export default HostInfo;
