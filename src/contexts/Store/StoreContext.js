import { createContext } from "react";
import { useQuestionnaires } from "./hooks/useQuestionnaires";
import { useTasks } from "./hooks/useTasks";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  const [{ tasks }, { onCompleteTask }] = useTasks();
  const [{ questionnaires }, { onCompleteQuestionnaire }] = useQuestionnaires();

  return (
    <StoreContext.Provider
      value={{
        task: { tasks, callbacks: { onCompleteTask } },
        questionnaire: { questionnaires, callbacks: { onCompleteQuestionnaire } },
      }}
      {...props}
    />
  );
};
