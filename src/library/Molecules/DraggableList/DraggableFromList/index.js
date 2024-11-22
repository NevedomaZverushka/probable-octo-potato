import { ListBox, ListBoxItem, useDragAndDrop } from "react-aria-components";
import { useListData } from "react-stately";

export const DraggableFromList = ({ data, Component, onDragEnd }) => {
  let listFrom = useListData({
    initialItems: data,
  });

  let { dragAndDropHooks } = useDragAndDrop({
    getItems(keys) {
      return [...keys].map((key) => ({ "text/plain": listFrom.getItem(key).name }));
    },
    onDragEnd(e) {
      if (e.dropOperation === "move" && !e.isInternal) listFrom.remove(...e.keys);
      onDragEnd(e.keys);
    },
  });

  return (
    <ListBox aria-label="Draggable list" items={listFrom.items} dragAndDropHooks={dragAndDropHooks}>
      {(item) => <ListBoxItem>{Component(item)}</ListBoxItem>}
    </ListBox>
  );
};
