import { cx } from "@emotion/css";
import { first } from "lodash";
import { ListBox, ListBoxItem, useDragAndDrop } from "react-aria-components";
import { useListData } from "react-stately";
import { styles } from "./styles";

export const DraggableFromList = ({ data, Component, onDragEnd }) => {
  let listFrom = useListData({
    initialItems: data,
  });

  let { dragAndDropHooks } = useDragAndDrop({
    getItems(keys) {
      return [...keys].map((key) => ({ "text/plain": listFrom.getItem(key).name }));
    },
    renderDragPreview(items) {
      const name = first(items)["text/plain"];
      return <>{Component({ id: name, name, isPreview: true })}</>;
    },
    onDragEnd(e) {
      if (e.dropOperation === "move" && !e.isInternal) listFrom.remove(...e.keys);
      onDragEnd(e.keys);
    },
  });

  return (
    <ListBox
      className={cx("react-aria-ListBox", styles.list)}
      aria-label="Draggable list"
      items={listFrom.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => <ListBoxItem>{Component(item)}</ListBoxItem>}
    </ListBox>
  );
};
