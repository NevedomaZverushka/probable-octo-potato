import { size } from "lodash";
import { useCallback } from "react";
import { useDispatch } from "../../hooks/useDispatch";
import { retrieveCompletedTasks, retrieveTodoTasks, useStore } from "../../hooks/useStore";
import { DashboardLayout } from "../../library/Layouts/DashboardLayout";
import { DraggableFromList } from "../../library/Molecules/DraggableList/DraggableFromList";
import { DroppableList } from "../../library/Molecules/DraggableList/DroppableList";
import { Task } from "./components/Task/Task";

export const Tasks = () => {
  const todoTasks = useStore(retrieveTodoTasks);
  const completedTasks = useStore(retrieveCompletedTasks);

  const { onCompleteTask } = useDispatch();

  const handleCompleteTask = useCallback(
    (ids) => {
      ids.forEach((id) => onCompleteTask(id));
    },
    [onCompleteTask]
  );

  return (
    <DashboardLayout
      headerSection={"Review your tasks"}
      todoSection={
        !!size(todoTasks) && (
          <DraggableFromList
            key={todoTasks}
            data={[...todoTasks.map(({ taskId }) => ({ id: taskId, name: taskId }))]}
            Component={(props) => <Task {...props} />}
            onDragEnd={handleCompleteTask}
          />
        )
      }
      completedSection={
        !!size(completedTasks) && (
          <DroppableList
            key={completedTasks}
            data={[...completedTasks.map(({ taskId }) => ({ id: taskId, name: taskId }))]}
            Component={(props) => <Task {...props} />}
          />
        )
      }
    />
  );
};
