import { useCallback, useEffect, useState } from "react";

export const useNotification = (cancelable: boolean = false) => {
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("");
  const [notificationType, setNotificationType] = useState(0);

  // If it's a a non cancelable notification it will trigger automatically 
  useEffect(() => {
    if (active && !cancelable) {
      setTimeout(() => {
        setActive(false);
      }, 4000)
    }
  }, [active, cancelable]);

  // Closes the notification
  const closeNotification = useCallback(() => {
    setActive(false);
  }, [])

  // Triggers a notification
  const triggerNotification = useCallback((message: string, notificationType: number): void => {
    setActive(true);
    setMessage(message);
    setNotificationType(notificationType);
  }, []);

  const payload = { active, message, notificationType, cancelable, closeNotification };

  return { payload, closeNotification, triggerNotification };
};