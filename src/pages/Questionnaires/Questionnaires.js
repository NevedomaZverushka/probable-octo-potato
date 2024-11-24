import { size } from "lodash";
import { useMemo } from "react";
import { retrieveCompletedQuestionnaires, retrieveTodoQuestionnaires, useStore } from "../../hooks/useStore";
import { DashboardLayout } from "../../library/Layouts/DashboardLayout";
import { List } from "../../library/Molecules/List";
import { Questionnaire } from "./components/Questionnaire/Questionnaire";

export const Questionnaires = () => {
  const todoQuestionnaires = useStore(retrieveTodoQuestionnaires);
  const completedQuestionnaires = useStore(retrieveCompletedQuestionnaires);

  const todoQuestionnairesList = useMemo(() => {
    return todoQuestionnaires.map(({ questionnaireId }) => ({ id: questionnaireId, name: questionnaireId }));
  }, [todoQuestionnaires]);

  const completedQuestionnairesList = useMemo(() => {
    return completedQuestionnaires.map(({ questionnaireId }) => ({ id: questionnaireId, name: questionnaireId }));
  }, [completedQuestionnaires]);

  return (
    <DashboardLayout
      headerSection={"Review your questionnaires"}
      todoSection={
        !!size(todoQuestionnaires) && (
          <List data={todoQuestionnairesList} Component={(props) => <Questionnaire {...props} />} />
        )
      }
      completedSection={
        !!size(completedQuestionnaires) && (
          <List data={completedQuestionnairesList} Component={(props) => <Questionnaire {...props} />} />
        )
      }
    />
  );
};
