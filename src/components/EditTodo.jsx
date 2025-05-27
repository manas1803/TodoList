import { Box,Drawer, Typography } from '@mui/material';

const EditTodo = ({todo,open,setOpen}) => {
  return (
    <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{ width: 250, p: 2 }}
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <Typography variant="h6">Sidebar Content</Typography>
          <Typography variant="body1">This is your aside bar.</Typography>
        </Box>
      </Drawer>
  );
};

export default EditTodo;
