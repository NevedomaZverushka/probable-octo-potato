import { createContext } from "react";
import { useQuestionnaires } from "./hooks/useQuestionnaires";
import { useTasks } from "./hooks/useTasks";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  const [{ tasks, isLoading: isTasksLoading }, { onCompleteTask }] = useTasks();
  const [{ questionnaires, isLoading: isQuestionnairesLoading }, { onCompleteQuestionnaire }] = useQuestionnaires();

  return (
    <StoreContext.Provider
      value={{
        task: { tasks, status: isTasksLoading, callbacks: { onCompleteTask } },
        questionnaire: { questionnaires, status: isQuestionnairesLoading, callbacks: { onCompleteQuestionnaire } },
      }}
      {...props}
    />
  );
};
