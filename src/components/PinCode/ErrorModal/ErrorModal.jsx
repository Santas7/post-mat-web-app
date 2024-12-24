import React from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from "@mui/material"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"

export default function ErrorModal({ message, onClose }) {
  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="error-dialog-title"
      aria-describedby="error-dialog-description"
    >
      <DialogTitle id="error-dialog-title" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <ErrorOutlineIcon color="error" />
        Ошибка
      </DialogTitle>
      <DialogContent>
        <Typography id="error-dialog-description" variant="body1">
          {message}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={onClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
