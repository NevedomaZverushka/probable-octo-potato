import { css } from "@emotion/css";
import { prepareColorVar } from "../../../utils/ui";

export const styles = {
  separator: css`
    background: ${prepareColorVar("gray-300")};
    width: 100%;
    height: 1px;
  `,
};
