import { createContext, useContext, useEffect, useState } from "react";

const USER_CONTEXT = createContext();
const UserContext = ({ children }) => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("../../User.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return <USER_CONTEXT.Provider value={Data}>{children}</USER_CONTEXT.Provider>;
};
export const User = () => {
  return useContext(USER_CONTEXT);
};
export default UserContext;
