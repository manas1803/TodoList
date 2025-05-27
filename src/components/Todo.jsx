import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Delete,TaskAlt } from "@mui/icons-material";

const Todo = ({ taskId, taskName, isComplete, isEditable }) => {
  const [editedTask, setEditedTask] = useState(taskName);
  const { removeTodos, completeTodo } = useContext(TodoContext);
  return (
    <Container
      className="todoItem"
      task-complete={isComplete ? "complete" : ""}
    >
      <Box
        sx={{
          width: "100%",
          p: 2,
          display: "grid",
          alignItems: "center",
          gap: 1,
          gridTemplateColumns: "19fr 1fr",
        }}
      >
        <label className="radio-option">
          <TextField
            fullWidth
            variant="outlined"
            value={editedTask}
            onChange={(e) => setEditedTask(e.currentTarget.value)}
            InputProps={{
              readOnly: true,
              sx: {
                "& input": {
                  cursor: "pointer",
                },
              },
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
        <IconButton onClick={() => removeTodos(taskId)}>
          <Delete />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Todo;
