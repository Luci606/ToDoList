const AddToDo = ({ task, setTask, history, setHistory }) => {
  const handleAdd = (event) => {
    var form = document.querySelector(".addForm");
    event.preventDefault();
    form.classList.add("was-validated");
   //console.log(form.classList);
    if (form.checkValidity()) {
      let val = document.querySelector("#todo").value;
      let preState = [];
      if (task != undefined) {
        preState = [...task, val];
        setTask(preState);
      } else {
        preState = [val];
        setTask([val]);
      }
      let newIndex = preState.length - 1;
      let newHistData = [];
      let newHist = [];

      if (history[history.length - 1][0].length == 0) {
        newHistData = [newIndex];
      } else {
        newHistData = [...history[history.length - 1][0], newIndex];
      }
      let undo = history.length - 1;
      let redo = null;

      newHist = [newHistData, undo, redo];
      let Hist = [...history, newHist];

      setHistory(Hist);

      form.reset();
      form.classList.remove("was-validated");
    }
  };

  const handleUndo = (e) => {
    let prevUndo = history[history.length - 1][1];
    if (prevUndo != undefined) {
      let newHistData = history[prevUndo][0];
      let undo = history[prevUndo][1];
      let redo = history.length - 1;
      let newHist = [newHistData, undo, redo];
      let Hist = [...history, newHist];
      setHistory(Hist);
    }
  };

  const handleRedo = (e) => {
    let prevRedo = history[history.length - 1][2];
    if (prevRedo != undefined) {
      let newHistData = history[prevRedo][0];
      let undo = history.length - 1;
      let redo = history[prevRedo][2];
      let newHist = [newHistData, undo, redo];
      let Hist = [...history, newHist];
      setHistory(Hist);
    }
  };

  return (
    <div className="addToDo">
      <form className="addForm" noValidate autoComplete="off">
          <input
            type="text"
            id="todo"
            placeholder="Dodaj zadanie"
            required
          />
      </form>
      <button className="btnAdd" type="submit" onClick={handleAdd}>Add</button>
      <button className="btnUndo" onClick={handleUndo}>Undo</button>
      <button className="btnRedo" onClick={handleRedo}>Redo</button>
    </div>
  );
};

export default AddToDo;
