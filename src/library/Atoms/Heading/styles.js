import { css } from "@emotion/css";
import { prepareColorVar } from "../../../utils/ui";

export const styles = {
  heading: css`
    color: ${prepareColorVar("gray-700")};
  `,
  subheading: css`
    color: ${prepareColorVar("gray-700")};
    letter-spacing: 2px;
    text-transform: uppercase;
  `,
};
