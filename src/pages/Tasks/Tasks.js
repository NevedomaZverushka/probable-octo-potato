import { useCallback, useMemo } from "react";
import { useDispatch } from "../../hooks/useDispatch";
import { retrieveCompletedTasks, retrieveTasksStatus, retrieveTodoTasks, useStore } from "../../hooks/useStore";
import { DashboardLayout } from "../../library/Layouts/DashboardLayout";
import { DraggableFromList } from "../../library/Organisms/DraggableList/DraggableFromList";
import { DroppableList } from "../../library/Organisms/DraggableList/DroppableList";
import { Task } from "./components/Task/Task";

export const Tasks = () => {
  const todoTasks = useStore(retrieveTodoTasks);
  const completedTasks = useStore(retrieveCompletedTasks);

  const isTaskListLoading = useStore(retrieveTasksStatus);

  const { onCompleteTask } = useDispatch();

  const todoTasksList = useMemo(() => {
    return todoTasks
      .sort(({ dueOnDate: prev }, { dueOnDate: curr }) => new Date(prev) - new Date(curr))
      .map(({ taskId }) => ({ id: taskId, name: taskId }));
  }, [todoTasks]);

  const completedTasksList = useMemo(() => {
    return completedTasks.map(({ taskId }) => ({ id: taskId, name: taskId }));
  }, [completedTasks]);

  const handleCompleteTask = useCallback((ids) => ids.forEach((id) => onCompleteTask(id)), [onCompleteTask]);

  return (
    <DashboardLayout
      headerSection={"Review your tasks"}
      todoSection={
        <DraggableFromList
          key={todoTasksList}
          data={todoTasksList}
          Component={(props) => <Task {...props} />}
          onDragEnd={handleCompleteTask}
        />
      }
      completedSection={
        <DroppableList key={completedTasksList} data={completedTasksList} Component={(props) => <Task {...props} />} />
      }
      loading={isTaskListLoading}
    />
  );
};
