import { css } from "@emotion/css";
import { prepareColorVar, prepareSizeVar } from "../../../utils/ui";

export const styles = {
  list: css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${prepareSizeVar("size-300")};
    height: 100%;
  `,
  emptyList: css`
    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      content: "This list is empty for now";

      font-size: ${prepareSizeVar("size-175")};
      color: ${prepareColorVar("gray-500")};
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
      text-align: center;
    }
  `,
};
