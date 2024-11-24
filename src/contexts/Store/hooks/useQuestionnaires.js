import { useCallback, useEffect, useState } from "react";
import { useOpenClose } from "../../../hooks/useOpenClose";
import { API } from "../../../requests";

export const useQuestionnaires = () => {
  const [questionnaires, setQuestionnaires] = useState([]);

  const [isLoading, , stopLoading] = useOpenClose(true);

  useEffect(() => {
    const func = async () => {
      const res = await API.getQuestionnaires();
      setQuestionnaires(res.questionnaireResponses);
      stopLoading();
    };

    func();
  }, [stopLoading]);

  const onCompleteQuestionnaire = useCallback((id) => {
    setQuestionnaires((prev) =>
      prev.map((questionnaire) => {
        if (questionnaire.questionnaireId === id) return { ...questionnaire, isCompleted: true };
        return questionnaire;
      })
    );
  }, []);

  return [{ questionnaires, isLoading }, { onCompleteQuestionnaire }];
};
