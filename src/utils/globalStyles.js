import { injectGlobal } from "@emotion/css";
import { prepareColorVar } from "./ui";

injectGlobal`
  .react-aria-ListBoxItem {
    &[data-dragging] {
      opacity: 0.6;
    }
  }

  .react-aria-DropIndicator[data-drop-target] {
    outline: 1px solid ${prepareColorVar("gray-400")};
  }
`;
