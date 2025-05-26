import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Delete, Edit, Save, TaskAlt } from "@mui/icons-material";

const Todo = ({ taskId, taskName, isComplete, isEditable }) => {
  const [editedTask, setEditedTask] = useState(taskName);
  const { editTodos, removeTodos, completeTodo } = useContext(TodoContext);
  return (
    <Container
      className="todoItem"
      task-complete={isComplete ? "complete" : ""}
    >
      {/* <input
          type="radio"
          name="task"
          value={taskId}
          onChange={() => completeTodo(taskId)}
          disabled={isComplete}
        />
        <input
          type="text"
          disabled={!isEditable || isComplete}
          value={editedTask}
          onChange={(e) => setEditedTask(e.currentTarget.value)}
        /> */}
      <Box
        sx={{
          width: "100%",
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <label className="radio-option">
          <TextField
            fullWidth
            variant="outlined"
            value={editedTask}
            onChange={(e) => setEditedTask(e.currentTarget.value)}
            disabled={!isEditable || isComplete}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={() => completeTodo(taskId)}
                    edge="end"
                    disabled={isComplete}
                  >
                    <TaskAlt />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </label>
        <IconButton
          onClick={() => editTodos(taskId, editedTask, isEditable)}
          edge="end"
          disabled={isComplete}
        >
          {isEditable ? <Save /> : <Edit />}
        </IconButton>
        <IconButton onClick={() => removeTodos(taskId)}>
          <Delete />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Todo;
