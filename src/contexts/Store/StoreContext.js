import { createContext } from "react";
import { useTasks } from "./hooks/useTasks";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  const [{ tasks }] = useTasks();

  return <StoreContext.Provider value={{ tasks }} {...props} />;
};
