import { StatusLight } from "@adobe/react-spectrum";
import { differenceInDays, isPast } from "date-fns";

export const Status = ({ dueAt, completed }) => {
  if (completed) return <StatusLight variant="positive">Ready</StatusLight>;
  else if (isPast(dueAt)) return <StatusLight variant="negative">Overdue</StatusLight>;
  else if (differenceInDays(new Date(), dueAt) < 7) return <StatusLight variant="notice">Urgent</StatusLight>;
  return <StatusLight variant="yellow">Pending</StatusLight>;
};
