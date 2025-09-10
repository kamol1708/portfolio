import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm, type FieldValues } from 'react-hook-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '10px',
  padding: '20px',
  color: '#333',
  boxShadow: 24,
  p: 4,
};

export default function AddModalTodo({open, handleClose, addNewTodo} : {open: boolean, handleClose: () => void, addNewTodo: (title: string, status: string) => void}) {
  const { register, handleSubmit } = useForm();

    const submit = (data: FieldValues) => {
        addNewTodo(data.title, data.status);
        handleClose();
    }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a new task...
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit(submit)} className="add-todo-form">
                <input 
                  type="text" 
                  {...register("title")} 
                  placeholder="Task title" 
                  className="todo-input"
                />
                <select {...register("status")} id="status" className="todo-select">
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="verified">Verified</option>
                </select>
                <button className='btn btn-outline-success'>Add</button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
