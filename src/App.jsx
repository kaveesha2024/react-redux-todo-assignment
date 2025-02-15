import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeTask } from "./utilities/state/taskSlice.js";

const App = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const taskHandler = (event) => {
    setTask(event.target.value);
  };
  const addNewTasks = () => {
    dispatch(storeTask(task));
  };

  return (
    <>
      <div className="m-4">
        <TextField
          name="task"
          id="standard-basic"
          label="Task"
          variant="standard"
          onChange={taskHandler}
        />
          <Button
            variant="contained"
            onClick={addNewTasks}
            endIcon={<SendIcon />}
          >
            Add
          </Button>
        <div className="mt-4">{/*<p>{task}</p>*/}</div>
      </div>
    </>
  );
};

export default App;
