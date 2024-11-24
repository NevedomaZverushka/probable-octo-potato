import { cx } from "@emotion/css";
import { size } from "lodash";
import { ListBox, ListBoxItem } from "react-aria-components";
import { styles } from "./styles";

export const List = ({ Component, data, ...props }) => {
  return (
    <ListBox
      className={cx("react-aria-ListBox", styles.list, !size(data) && styles.emptyList)}
      items={data}
      {...props}
      children
    >
      {(item) => <ListBoxItem>{Component(item)}</ListBoxItem>}
    </ListBox>
  );
};
