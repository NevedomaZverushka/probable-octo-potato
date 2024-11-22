import { useCallback, useEffect, useState } from "react";
import { API } from "../../../requests";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const func = async () => {
      const res = await API.getTasks();
      setTasks(res.tasks);
    };

    func();
  }, []);

  const onCompleteTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.taskId === id) return { ...task, isCompleted: true };
        return task;
      })
    );
  }, []);

  return [{ tasks }, { onCompleteTask }];
};
