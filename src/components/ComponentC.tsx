import ComponentD from "./ComponentD";
import { useContext } from "react";
import { UserContext } from "./ComponentA";
function componentC() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>{`You did it agin ${user}`}</h2>
      <ComponentD />
    </div>
  );
}

export default componentC;
