import { size } from "lodash";
import { useCallback, useMemo } from "react";
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

  const todoTasksList = useMemo(() => {
    return todoTasks
      .sort(({ dueOnDate: prev }, { dueOnDate: curr }) => new Date(prev) - new Date(curr))
      .map(({ taskId }) => ({ id: taskId, name: taskId }));
  }, [todoTasks]);

  const completedTasksList = useMemo(() => {
    return completedTasks.map(({ taskId }) => ({ id: taskId, name: taskId }));
  }, [completedTasks]);

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
            key={todoTasksList}
            data={todoTasksList}
            Component={(props) => <Task {...props} />}
            onDragEnd={handleCompleteTask}
          />
        )
      }
      completedSection={
        !!size(completedTasks) && (
          <DroppableList
            key={completedTasksList}
            data={completedTasksList}
            Component={(props) => <Task {...props} />}
          />
        )
      }
    />
  );
};
