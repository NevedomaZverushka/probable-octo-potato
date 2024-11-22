import { css } from "@emotion/css";
import { prepareRadiusVar } from "../../../utils/ui";

export const styles = {
  modal: css`
    border-radius: ${prepareRadiusVar("medium")};
  `,
};
