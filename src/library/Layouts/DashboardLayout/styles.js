import { css } from "@emotion/css";

export const styles = {
  dashboard: (isMobile) => css`
    overflow: ${isMobile ? "hidden" : "auto"};
  `,
  column: css`
    border-style: dashed !important;

    overflow: auto;
  `,
  opacity: css`
    opacity: 0.4;
  `,
};
