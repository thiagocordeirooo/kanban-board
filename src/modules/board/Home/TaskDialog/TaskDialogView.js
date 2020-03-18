import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import React from "react";

const TaskDialogView = ({ open, handleClose, taskForm }) => {
  return (
    <Dialog open={open} maxWidth="sm" fullWidth onBackdropClick={handleClose}>
      <DialogTitle>Nova Tarefa</DialogTitle>
      <form onSubmit={taskForm.handleSubmit}>
        <DialogContent>
          <TextField
            fullWidth
            label="Nome"
            name="name"
            variant="outlined"
            value={taskForm.values.name}
            onChange={taskForm.handleChange}
            onBlur={taskForm.handleBlur}
            error={!!taskForm.errors.name}
            helperText={taskForm.errors.name}
          />

          <TextField
            fullWidth
            label="Descrição"
            name="description"
            variant="outlined"
            value={taskForm.values.description}
            onChange={taskForm.handleChange}
            onBlur={taskForm.handleBlur}
            error={!!taskForm.errors.description}
            helperText={taskForm.errors.description}
            multiline
            rows={4}
            rowsMax={4}
          />
        </DialogContent>

        <DialogActions>
          <Button color="default" variant="contained" onClick={taskForm.handleReset}>
            Limpar
          </Button>
          <Button type="submit" color="primary" variant="contained" autoFocus>
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TaskDialogView;
