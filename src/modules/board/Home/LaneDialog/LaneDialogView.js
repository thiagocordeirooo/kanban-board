import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React from "react";

const LaneDialogView = ({ handleClose, formLane }) => {
  return (
    <Dialog fullWidth maxWidth="xs" open onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{formLane.values.id ? "Editar" : "Adicionar"} Raia</DialogTitle>
      <form onSubmit={formLane.handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Nome da raia"
            fullWidth
            variant="outlined"
            onChange={formLane.handleChange}
            value={formLane.values.name}
            error={!!formLane.errors.name}
            helperText={formLane.errors.name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} size="small" color="default" variant="contained">
            Cancelar
          </Button>
          <Button type="submit" size="small" color="primary" variant="contained">
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
export default LaneDialogView;
