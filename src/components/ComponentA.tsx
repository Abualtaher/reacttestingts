import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<string>("");
function ComponentA() {
  const [user] = useState("Wisam");
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hej, ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
