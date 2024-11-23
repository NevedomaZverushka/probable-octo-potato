import { useCallback, useState } from "react";

export const useOpenClose = (initValue) => {
  const [isOpen, setIsOpen] = useState(initValue);

  const open = useCallback(() => setIsOpen(true), []);

  const close = useCallback(() => setIsOpen(false), []);

  return [isOpen, open, close];
};
