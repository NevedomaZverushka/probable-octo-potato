import { css } from "@emotion/css";
import { prepareColorVar } from "../../../../utils/ui";

export const styles = {
  button: css`
    cursor: pointer;
  `,
  disabledText: css`
    color: ${prepareColorVar("gray-300")} !important;
  `,
};
