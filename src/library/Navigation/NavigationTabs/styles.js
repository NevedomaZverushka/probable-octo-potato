import { css } from "@emotion/css";
import { prepareColorVar } from "../../../utils/ui";

export const styles = {
  menuLabel: css`
    font-size: 11px;
    font-weight: 600;
    color: ${prepareColorVar("gray-700")};
    letter-spacing: 2px;
    text-transform: uppercase;
  `,
};
