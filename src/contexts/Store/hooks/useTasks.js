import { useEffect, useState } from "react";
import { API } from "../../../requests";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const func = async () => {
      const res = await API.getTasks();
      setTasks(res);
    };

    func();
  }, []);

  return [{ tasks }, {}];
};
