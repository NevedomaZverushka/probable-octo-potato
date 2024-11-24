import { useCallback, useEffect, useState } from "react";
import { API } from "../../../requests";

export const useQuestionnaires = () => {
  const [questionnaires, setQuestionnaires] = useState([]);

  useEffect(() => {
    const func = async () => {
      const res = await API.getQuestionnaires();
      setQuestionnaires(res.questionnaireResponses);
    };

    func();
  }, []);

  const onCompleteQuestionnaire = useCallback((id) => {
    setQuestionnaires((prev) =>
      prev.map((questionnaire) => {
        if (questionnaire.questionnaireId === id) return { ...questionnaire, isCompleted: true };
        return questionnaire;
      })
    );
  }, []);

  return [{ questionnaires }, { onCompleteQuestionnaire }];
};
