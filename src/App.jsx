import { Button, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, storeTask } from "./utilities/state/taskSlice.js";
import DeleteIcon from "@mui/icons-material/Delete";

const App = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const taskHandler = (event) => {
    setTask(event.target.value);
  };
  const addNewTasks = () => {
    dispatch(storeTask(task));
    setTask("");
  };
  const alreadyAddedTasks = useSelector((state) => state.todo.task);

  return (
    <>
      <div className="m-4">
        <TextField
          name="task"
          id="standard-basic"
          label="Task"
          variant="standard"
          value={task}
          onChange={taskHandler}
        />
        <Button
          variant="contained"
          onClick={addNewTasks}
          endIcon={<SendIcon />}
        >
          Add
        </Button>
        <div className="mt-4">
          {alreadyAddedTasks.length > 0 &&
            alreadyAddedTasks.map((task) => (
              <div key={task.id} className="mt-4">
                <span className="mr-4">{task.task}</span>
                <span>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => dispatch(removeTask(task.id))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
