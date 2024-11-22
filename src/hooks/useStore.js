import { useContext } from "react";
import { StoreContext } from "../contexts/Store/StoreContext";

export const useStore = (func) => {
  const state = useContext(StoreContext);
  return func(state);
};

export const retrieveCompletedTasks = (state) => {
  return state.tasks.filter(({ isCompleted }) => isCompleted);
};
export const retrieveTodoTasks = (state) => {
  return state.tasks.filter(({ isCompleted }) => !isCompleted);
};

export const retrieveTaskById = (state, id) => {
  return state.tasks.find(({ taskId }) => taskId === id);
};
