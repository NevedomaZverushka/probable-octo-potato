import { useStore } from "../../hooks/useStore";

export const Tasks = () => {
  const tasks = useStore((state) => state.tasks);
  console.log(tasks);

  return null;
};
