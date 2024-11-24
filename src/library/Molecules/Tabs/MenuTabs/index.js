import { Flex, View } from "@adobe/react-spectrum";
import { useCallback, useRef } from "react";
import { mergeProps, useButton, useFocusRing, useTab, useTabList } from "react-aria";
import { useTabListState } from "react-stately";
import { Heading } from "../../../Atoms/Heading";
import { styles } from "./styles";

const Tab = ({ item, state, onClick }) => {
  let ref = useRef();

  let { tabProps, isSelected } = useTab({ ...item }, state, ref);

  const handleClick = useCallback(() => {
    onClick(item.key);
  }, [onClick, item]);

  let buttonRef = useRef();
  let { buttonProps } = useButton({ onPress: handleClick }, buttonRef);

  let { focusProps } = useFocusRing({ within: true });

  return (
    <div {...tabProps} ref={ref}>
      <div {...mergeProps(buttonProps, focusProps)} ref={buttonRef}>
        <View
          UNSAFE_className={styles.tab}
          backgroundColor={isSelected && "blue-200"}
          padding="size-115"
          borderRadius="medium"
          colorVersion="6"
        >
          <Heading level={3} margin="size-0">
            <Flex direction="row" alignItems="center" gap="size-200">
              {item.rendered}
            </Flex>
          </Heading>
        </View>
      </div>
    </div>
  );
};

export const MenuTabs = ({ onClick, ...restProps }) => {
  let ref = useRef();

  let state = useTabListState(restProps);
  let { tabListProps } = useTabList(restProps, state, ref);

  let { focusProps } = useFocusRing({ within: true });

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
