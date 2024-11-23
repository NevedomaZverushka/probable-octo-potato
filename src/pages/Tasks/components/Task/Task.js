import ChevronRight from "@spectrum-icons/workflow/ChevronRight";
import { format } from "date-fns";
import { first } from "lodash";
import { useCallback } from "react";
import { useDispatch } from "../../../../hooks/useDispatch";
import { retrieveTaskById, useStore } from "../../../../hooks/useStore";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { Status } from "../../../../library/Atoms/Status";
import { Modal } from "../../../../library/Molecules/Modal";
import { TaskLayout } from "../../layouts/TaskLayout";

export const Task = ({ id, isPreview }) => {
  const task = useStore((state) => retrieveTaskById(state, id));

  const { onCompleteTask } = useDispatch();

  const handleCompleteTask = useCallback(() => onCompleteTask(task.taskId), [task.taskId, onCompleteTask]);

  return (
    <TaskLayout
      titleSection={task.title}
      idSection={first(task.taskId.split("-"))}
      descriptionSection={task.description}
      dueAtSection={format(new Date(task.dueOnDate), "MMM dd, yyyy HH:mm")}
      seeMoreBtnSection={
        <Modal
          triggerButtonSection={<PrimaryButton icon={<ChevronRight size="S" />}>See more</PrimaryButton>}
          titleSection={task.title}
          idSection={first(task.taskId.split("-"))}
          descriptionSection={task.description}
          dueAtSection={format(new Date(task.dueOnDate), "MMM dd, yyyy HH:mm")}
          statusSection={<Status dueAt={new Date(task.dueOnDate)} completed={task.isCompleted} />}
          buttonSection={task.isCompleted ? null : task.button}
          onSubmit={handleCompleteTask}
        />
      }
      statusSection={<Status dueAt={new Date(task.dueOnDate)} completed={task.isCompleted} />}
      type={task.iconType.toLowerCase().replace(/\s/g, "")}
      preview={isPreview}
      completed={task.isCompleted}
    />
  );
};
