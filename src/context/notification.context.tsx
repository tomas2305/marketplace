import React from "react";
import { Notification } from "../components";
import { AlertColor } from "@mui/material";

type ContextProps = {
  getError: (msg: string) => void;
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

  const getError = (msg: string) => {
    setSeverity("error");
    setOpen(true);
    setMsg(msg);
  };

  const value = {
    getError
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
