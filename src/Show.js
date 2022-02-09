const Show = ({task, history, setHistory}) => {
  let data = history[history.length - 1][0];

  const handleDelete = (toDoIndex) => {
    let prevData = history[history.length - 1][0];
    let newHistData = prevData.filter((ind) => ind !== toDoIndex);
    let undo = history.length - 1;
    let redo = null;
    let newHist = [newHistData, undo, redo];
    let Hist = [...history, newHist];
    setHistory(Hist);
  };

  return (
      <div className="showToDo">
        {task != undefined && (
          <>
            {data.map((d) => (
              <div className="toDoList" key={d}>
                <button className="btnDel" onClick={(e) => handleDelete(d)}>Delete</button>
                <span>{task[d]}</span>
              </div>
            ))}
          </>
        )}
      </div>
  );
};

export default Show;
