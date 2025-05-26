import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { TextField, InputAdornment, Box,IconButton } from '@mui/material';
import { AddTask } from "@mui/icons-material";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const { addTodos } = useContext(TodoContext);

  const handleTodolist = () => {
    addTodos(task);
    setTask("");
  };
  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <TextField
        fullWidth
        placeholder="Enter task..."
        variant="outlined"
        value={task}
        onChange={(e)=>setTask(e.currentTarget.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleTodolist} edge="end">
                <AddTask />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default AddTodo;
