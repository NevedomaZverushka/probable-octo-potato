import { cx } from "@emotion/css";
import { ListBox, ListBoxItem } from "react-aria-components";
import { styles } from "./styles";

export const List = ({ Component, data, ...props }) => {
  return (
    <ListBox className={cx("react-aria-ListBox", styles.list)} items={data} {...props}>
      {(item) => <ListBoxItem>{Component(item)}</ListBoxItem>}
    </ListBox>
  );
};
