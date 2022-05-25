import { useEffect } from "react";
const Hello = () => {
  useEffect(() => {
    console.log("created :)");
    return () => {
      console.log("destroyed :(");
    };
  }, []);

  return <h1>hello</h1>;
};
export default Hello;
