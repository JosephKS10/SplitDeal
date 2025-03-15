import React, { useEffect, useState } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

type AlertType = {
  id: number;
  message: string;
};

const ALERT_TTL = 5000;

const Alert: React.FC<AlertType & { removeAlert: (id: number) => void }> = ({ message, id, removeAlert }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeAlert(id);
    }, ALERT_TTL);
    return () => clearTimeout(timeoutRef);
  }, [id, removeAlert]);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-4 flex items-center gap-2 text-sm text-white bg-green-500 rounded shadow-md pointer-events-auto"
    >
      <FiCheckSquare className="mt-0.5" />
      <span>{message}</span>
      <button onClick={() => removeAlert(id)} className="ml-auto">
        <FiX />
      </button>
    </motion.div>
  );
};

const generateRandomAlert = (): AlertType => {
  const messages = [
    "Operation completed successfully.",
    "Your changes have been saved.",
    "New update available!",
    "Action was successful.",
    "Data loaded successfully."
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return {
    id: Math.random(),
    message: messages[randomIndex],
  };
};

const AlertComponent = () => {
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  const removeAlert = (id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  return (
    <div className="bg-white min-h-[200px] flex flex-col items-center justify-center p-4">
      <button
        onClick={() => setAlerts(prev => [generateRandomAlert(), ...prev])}
        className="mb-4 text-sm text-white bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all font-medium px-4 py-2 rounded"
      >
        Show Alert
      </button>
      <div className="flex flex-col gap-2 w-72 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {alerts.map(alert => (
            <Alert key={alert.id} {...alert} removeAlert={removeAlert} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AlertComponent;
