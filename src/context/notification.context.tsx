import React from "react";
import { Notification } from "../components";
import { AlertColor } from "@mui/material";

type ContextProps = {
  getError: (msg: string) => void;
  getSuccess: (msg: string) => void;
};

const NotificationContext = React.createContext<ContextProps | null>(null);

export const useNotificationContext = () => {
    const context = React.useContext(NotificationContext);
    if(!context) throw new Error("No existe contexto");
    return context;
}

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [msg, setMsg] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState<AlertColor | undefined>(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const sendNotification = (msg: string, severity : AlertColor | undefined) => {
    setSeverity(severity);
    setOpen(true);
    setMsg(msg);
  }

  const getError = (msg: string) => {
    sendNotification(msg, "error");
  };

  const getSuccess = (msg: string) => {
    sendNotification(msg, "success");
  };

  const value = {
    getError,
    getSuccess
  };

  return (
    <NotificationContext.Provider value={value}>
      <Notification
        msg={msg}
        handleClose={handleClose}
        severity={severity}
        open={open}
      />
        {children}
    </NotificationContext.Provider>
  );
};
