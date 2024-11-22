import { Flex, View } from "@adobe/react-spectrum";
import { useRef } from "react";
import { useButton } from "react-aria";
import { styles } from "./styles";

const noop = () => {};

export const IconButton = ({ children, onClick, ...props }) => {
  let ref = useRef();
  let { buttonProps } = useButton({ onPress: onClick || noop, children, ...props }, ref);

  return (
    <div {...buttonProps} ref={ref}>
      <View
        UNSAFE_className={styles.button}
        backgroundColor="blue-200"
        borderColor="gray-500"
        borderWidth="thin"
        padding="size-75"
        borderRadius="medium"
        colorVersion="6"
        width="size-500"
        height="size-500"
      >
        <Flex direction="row" alignItems="center" justifyContent="center">
          {children}
        </Flex>
      </View>
    </div>
  );
};
