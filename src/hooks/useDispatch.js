import { useContext } from "react";
import { StoreContext } from "../contexts/Store/StoreContext";

export const useDispatch = () => {
  const state = useContext(StoreContext);
  return state.callbacks;
};
