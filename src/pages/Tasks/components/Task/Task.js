import { format } from "date-fns";
import { first } from "lodash";
import { retrieveTaskById, useStore } from "../../../../hooks/useStore";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { TaskLayout } from "../../layouts/TaskLayout";

export const Task = ({ id, isPreview }) => {
  const task = useStore((state) => retrieveTaskById(state, id));

  return (
    <TaskLayout
      titleSection={task.title}
      idSection={first(task.taskId.split("-"))}
      descriptionSection={task.description}
      dueAtSection={format(new Date(task.dueOnDate), "MMM dd, yyyy HH:mm")}
      seeMoreBtnSection={<PrimaryButton>See more</PrimaryButton>}
      type={task.iconType.toLowerCase().replace(/\s/g, "")}
      preview={isPreview}
    />
  );
};
