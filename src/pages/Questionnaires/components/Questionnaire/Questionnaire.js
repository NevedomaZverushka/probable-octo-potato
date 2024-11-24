import ChevronRight from "@spectrum-icons/workflow/ChevronRight";
import { first } from "lodash";
import { useCallback } from "react";
import { useDispatch } from "../../../../hooks/useDispatch";
import { retrieveQuestionnaireById, useStore } from "../../../../hooks/useStore";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { Status } from "../../../../library/Atoms/Status";
import { QuestionnaireLayout } from "../../layouts/QuestionnaireLayout";

export const Questionnaire = ({ id }) => {
  const questionnaire = useStore((state) => retrieveQuestionnaireById(state, id));

  const { onCompleteQuestionnaire } = useDispatch();

  const handleCompleteQuestionnaire = useCallback(() => onCompleteQuestionnaire(id), [onCompleteQuestionnaire, id]);

  return (
    <QuestionnaireLayout
      titleSection={questionnaire.title}
      idSection={first(questionnaire.questionnaireId.split("-"))}
      seeMoreBtnSection={
        <PrimaryButton onClick={handleCompleteQuestionnaire} endIcon={<ChevronRight size="S" />}>
          Complete
        </PrimaryButton>
      }
      statusSection={<Status completed={questionnaire.isCompleted} />}
      completed={questionnaire.isCompleted}
    />
  );
};
