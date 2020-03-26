import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import React from "react";

const TaskDialogView = ({ open, handleClose, taskForm }) => {
  return (
    <Dialog open={open} maxWidth="sm" fullWidth onBackdropClick={handleClose}>
      <DialogTitle>Nova Tarefa</DialogTitle>
      <form onSubmit={taskForm.handleSubmit}>
        <DialogContent>
          <TextField
            id="name"
            fullWidth
            label="Nome"
            name="name"
            variant="outlined"
            autoFocus
            value={taskForm.values.name}
            onChange={taskForm.handleChange}
            onBlur={taskForm.handleBlur}
            error={taskForm.touched.name && !!taskForm.errors.name}
            helperText={taskForm.touched.name && taskForm.errors.name}
          />

          <TextField
            id="description"
            fullWidth
            label="Descrição"
            name="description"
            variant="outlined"
            value={taskForm.values.description}
            onChange={taskForm.handleChange}
            onBlur={taskForm.handleBlur}
            error={taskForm.touched.description && !!taskForm.errors.description}
            helperText={taskForm.touched.description && taskForm.errors.description}
            multiline
            rows={4}
            rowsMax={4}
          />
        </DialogContent>

        <DialogActions>
          <Button color="default" size="small" variant="contained" onClick={taskForm.handleReset}>
            Limpar
          </Button>
          <Button type="submit" size="small" color="primary" variant="contained">
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TaskDialogView;
