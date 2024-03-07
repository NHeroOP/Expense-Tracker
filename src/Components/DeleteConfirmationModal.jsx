import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteConfirmationModal({ id, onClose, onDelete }) {
  const [open, setOpen] = React.useState(false); // State for modal visibility

  React.useEffect(() => {
    setOpen(true); // Open modal when props change
  }, [id]); // Re-open modal when id changes

  const handleClose = () => {
    setOpen(false);
    onClose(); // Call provided onClose function
  };

  const handleDelete = () => {
    setOpen(false);
    onDelete(id); // Call provided onDelete function
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this expense?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
