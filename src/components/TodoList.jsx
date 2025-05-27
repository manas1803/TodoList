import { useState } from "react";
import { Box, Collapse, IconButton, Typography } from "@mui/material";
import Todo from "./Todo";
import { KeyboardArrowDown } from "@mui/icons-material";

const TodoList = ({ todos, title }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {todos.length > 0 && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ cursor: "pointer", px: 2, py: 1 }}
          onClick={() => setOpen(!open)}
        >
          <Typography variant="h6">{title}</Typography>
          <IconButton size="small">
            <KeyboardArrowDown
              sx={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </IconButton>
        </Box>
      )}
      <Collapse in={open} timeout="auto" unmountOnExit>
        {todos.map(({ taskId, taskName, isComplete, isEditable }) => {
          return (
            <Todo
              taskId={taskId}
              taskName={taskName}
              isComplete={isComplete}
              isEditable={isEditable}
            />
          );
        })}
      </Collapse>
    </>
  );
};

export default TodoList;
