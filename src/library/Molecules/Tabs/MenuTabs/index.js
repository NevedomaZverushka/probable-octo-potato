import { Flex, View } from "@adobe/react-spectrum";
import { useCallback, useRef } from "react";
import { mergeProps, useFocusRing, useTab, useTabList } from "react-aria";
import { useTabListState } from "react-stately";
import { styles } from "./styles";

const Tab = ({ item, state, onClick }) => {
  let ref = useRef();
  let { tabProps, isSelected } = useTab(item, state, ref);

  const handleClick = useCallback(() => onClick(item["aria-label"]), [onClick, item]);

  return (
    <div {...tabProps} ref={ref} onClick={handleClick}>
      <View
        UNSAFE_style={styles.tab}
        backgroundColor={isSelected && "blue-500"}
        padding="size-115"
        borderRadius="medium"
        colorVersion="6"
      >
        <Flex direction="row" alignItems="center" gap="size-100">
          {item.rendered}
        </Flex>
      </View>
    </div>
  );
};

export const MenuTabs = ({ onClick, ...restProps }) => {
  let ref = useRef();

  let state = useTabListState(restProps);
  let { tabListProps } = useTabList(restProps, state, ref);

  let { focusProps } = useFocusRing({
    within: true,
  });

  return (
    <div {...mergeProps(tabListProps, focusProps)} ref={ref}>
      <Flex direction="column" width="auto" gap="size-100" marginY="size-200">
        {[...state.collection].map((item) => (
          <Tab key={item.key} item={item} state={state} onClick={onClick} />
        ))}
      </Flex>
    </div>
  );
};
