import { useEffect, useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChangeToDo = (event) => {
    setToDo(event.target.value);
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((current) => [toDo, ...current]);
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Write your to do..."
          value={toDo}
          onChange={onChangeToDo}
        />
        <button>Add To Do</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index + item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
