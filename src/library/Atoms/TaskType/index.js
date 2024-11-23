import { Avatar } from "@adobe/react-spectrum";
import { useMemo } from "react";
import bag from "../../../sources/icons/bag.png";
import bloodpressure from "../../../sources/icons/bloodpresure.png";
import brain from "../../../sources/icons/brain.png";
import calendar from "../../../sources/icons/calendar.png";
import fasting from "../../../sources/icons/fasting.png";
import feces from "../../../sources/icons/feces.png";
import glucosetest from "../../../sources/icons/glukosetest.png";
import mealtest from "../../../sources/icons/mealtest.png";
import urine from "../../../sources/icons/urin.png";

export const TaskType = ({ type }) => {
  const src = useMemo(() => {
    return { bag, urine, mealtest, glucosetest, feces, fasting, calendar, brain, bloodpressure }[type];
  }, [type]);

  return <Avatar size={50} src={src} alt={type} />;
};
