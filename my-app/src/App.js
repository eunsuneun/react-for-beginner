import { useState, useEffect } from "react";
import Button from "./Button";
import Hello from "./Hello";
import appStyles from "./App.module.css";
import buttonStyles from "./Button.module.css";

function App() {
  const [keyword, setKeyword] = useState("");
  const [counter, setCounter] = useState(0);
  const [showing, setShowing] = useState(false);
  const onChangeIpt = (event) => {
    setKeyword(event.target.value);
  };
  const onClickCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const onClickShowing = () => {
    setShowing((prev) => !prev);
  };
  useEffect(() => {
    // 변화있을 때 항상 렌더링
    console.log("i run all the time");
  });
  useEffect(() => {
    // 처음에만 렌더링
    console.log("Call thie API...");
  }, []);
  useEffect(() => {
    // keyword가 변할 때만 렌더링, keyword가 3글자 이상일 때
    if (keyword !== "" && keyword.length > 2) {
      console.log("Search for ", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        value={keyword}
        onChange={onChangeIpt}
      />
      <h1 className={appStyles.title}>{counter}</h1>
      <Button text="plus" onClick={onClickCounter} />
      <button className={buttonStyles.btn} onClick={onClickShowing}>
        {showing ? "hide" : "show"}
      </button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
