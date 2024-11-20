import { useContext } from "react";
import { StoreContext } from "../contexts/Store/StoreContext";

export const useStore = (func) => {
  const state = useContext(StoreContext);
  return func(state);
};
