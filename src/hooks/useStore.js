import { useContext } from "react";
import { StoreContext } from "../contexts/Store/StoreContext";

export const useStore = (func) => {
  const state = useContext(StoreContext);
  return func(state);
};

// Tasks
export const retrieveCompletedTasks = (state) => {
  return state.task.tasks.filter(({ isCompleted }) => isCompleted);
};
export const retrieveTodoTasks = (state) => {
  return state.task.tasks.filter(({ isCompleted }) => !isCompleted);
};

export const retrieveTaskById = (state, id) => {
  return state.task.tasks.find(({ taskId }) => taskId === id);
};

// Questionnaires
export const retrieveCompletedQuestionnaires = (state) => {
  return state.questionnaire.questionnaires.filter(({ isCompleted }) => isCompleted);
};
export const retrieveTodoQuestionnaires = (state) => {
  return state.questionnaire.questionnaires.filter(({ isCompleted }) => !isCompleted);
};

export const retrieveQuestionnaireById = (state, id) => {
  return state.questionnaire.questionnaires.find(({ questionnaireId }) => questionnaireId === id);
};
