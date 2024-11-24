import { first } from "lodash";
import { useDragAndDrop } from "react-aria-components";
import { useListData } from "react-stately";
import { List } from "../../../Molecules/List";

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
    <List aria-label="Draggable list" data={listFrom.items} dragAndDropHooks={dragAndDropHooks} Component={Component} />
  );
};
