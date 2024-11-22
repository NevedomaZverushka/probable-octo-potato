import { css } from "@emotion/css";
import { prepareSizeVar } from "../../../../utils/ui";

export const styles = {
  list: css`
    display: flex;
    flex-direction: column;
    gap: ${prepareSizeVar("size-300")};
    height: 100%;
  `,
};
