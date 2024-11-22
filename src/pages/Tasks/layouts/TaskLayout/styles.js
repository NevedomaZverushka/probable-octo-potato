import { css } from "@emotion/css";

export const styles = {
  layout: css`
    cursor: pointer;
  `,
  preview: css`
    transform: scale(0.5);
    opacity: 1;
  `,
  description: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};
