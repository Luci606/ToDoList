import { useState } from "react";
import "./App.css";
import AddToDo from "./AddToDo";
import Show from "./Show";

function App() {
  const [task, setTask] = useState();
  let [history, setHistory] = useState([[[], null, null]]);

  return (
    <div className="container">
        <h1>Lista ToDo</h1>
        <div className="addToDo">
          <AddToDo
            task={task}
            setTask={setTask}
            history={history}
            setHistory={setHistory}
          />
        </div>
        <div className="showList">
          <Show
            task={task}
            setTask={setTask}
            history={history}
            setHistory={setHistory}
          />
        </div>
    </div>
  );
}

export default App;
