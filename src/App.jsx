import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useState} from "react";

const App = () => {
    const [task, setTask] = useState('')
    const taskHandler = (event) => {
        setTask(event.target.value)
    };

  return (
    <>
      <div className="m-4">
        <TextField
          className="m-4"
          name="task"
          id="standard-basic"
          label="Standard"
          variant="standard"
          onChange={taskHandler}
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Add
        </Button>
          <div className="mt-4">
              <p>
                  {task}
              </p>
          </div>
      </div>
    </>
  );
};

export default App;
