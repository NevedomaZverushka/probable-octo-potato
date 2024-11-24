import { useCallback, useEffect, useState } from "react";
import { useOpenClose } from "../../../hooks/useOpenClose";
import { API } from "../../../requests";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const [isLoading, , stopLoading] = useOpenClose(true);

  useEffect(() => {
    const func = async () => {
      const res = await API.getTasks();
      setTasks(res.tasks);
      stopLoading();
    };

    func();
  }, [stopLoading]);

  const onCompleteTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.taskId === id) return { ...task, isCompleted: true };
        return task;
      })
    );
  }, []);

  return [{ tasks, isLoading }, { onCompleteTask }];
};
