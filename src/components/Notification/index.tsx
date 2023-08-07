import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";
import React from "react";

type NotificationProps = {
  open: boolean;
  msg: string;
  severity: AlertColor | undefined;
  handleClose: () => void;
};

export const Notification: React.FC<NotificationProps> = ({
  open,
  handleClose,
  msg,
  severity,
}) => {
  return (
    <Snackbar
      onClose={handleClose}
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={severity} onClose={handleClose}>
        <Typography>{msg}</Typography>
      </Alert>
    </Snackbar>
  );
};
