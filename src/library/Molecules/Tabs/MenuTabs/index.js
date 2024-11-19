import { Flex } from "@adobe/react-spectrum";
import { useRef } from "react";
import { mergeProps, useFocusRing, useTab, useTabList } from "react-aria";
import { useTabListState } from "react-stately";
import { RowLayout } from "../../../Layouts/RowLayout";
import { styles } from "./styles";

const Tab = ({ item, state }) => {
  let ref = useRef();
  let { tabProps, isSelected } = useTab(item, state, ref);

  return (
    <RowLayout {...tabProps} elementRef={ref} style={styles.tab(isSelected)}>
      {item.rendered}
    </RowLayout>
  );
};

export const MenuTabs = (props) => {
  let ref = useRef();

  let state = useTabListState(props);
  let { tabListProps } = useTabList(props, state, ref);

  let { focusProps } = useFocusRing({
    within: true,
  });

  return (
    <div {...mergeProps(tabListProps, focusProps)} ref={ref}>
      <Flex direction="column" width="auto" gap="size-100" marginY="size-200">
        {[...state.collection].map((item) => (
          <Tab key={item.key} item={item} state={state} />
        ))}
      </Flex>
    </div>
  );
};
