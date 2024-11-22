import { cx } from "@emotion/css";
import { ListBox, ListBoxItem, useDragAndDrop } from "react-aria-components";
import { useListData } from "react-stately";
import { styles } from "./styles";

export const DroppableList = ({ data, Component }) => {
  let listTo = useListData({
    initialItems: data,
  });

  let { dragAndDropHooks } = useDragAndDrop({
    async onInsert(e) {
      let items = await Promise.all(
        e.items.map(async (item) => {
          let name = await item.getText("text/plain");
          return { id: name, name };
        })
      );

      if (e.target.dropPosition === "before") listTo.insertBefore(e.target.key, ...items);
      else if (e.target.dropPosition === "after") listTo.insertAfter(e.target.key, ...items);
    },
  });

  return (
    <ListBox
      className={cx("react-aria-ListBox", styles.list)}
      aria-label="Droppable list"
      items={listTo.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => <ListBoxItem>{Component(item)}</ListBoxItem>}
    </ListBox>
  );
};
