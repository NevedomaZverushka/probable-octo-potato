import { Flex, View } from "@adobe/react-spectrum";
import { cx } from "@emotion/css";
import { useRef } from "react";
import { useButton } from "react-aria";
import { Heading } from "../../Heading";
import { styles } from "./styles";

const noop = () => {};

export const SecondaryButton = ({ children, startIcon, endIcon, onClick, disabled, ...props }) => {
  let ref = useRef();
  let { buttonProps } = useButton({ onPress: onClick || noop, children, isDisabled: disabled, ...props }, ref);

  return (
    <div {...buttonProps} ref={ref}>
      <View
        UNSAFE_className={styles.button}
        borderColor={disabled ? "gray-300" : "gray-500"}
        borderWidth="thin"
        paddingX="size-200"
        paddingY="size-75"
        borderRadius="medium"
        colorVersion="6"
      >
        <Flex direction="row" gap="size-100" justifyContent="center" alignItems="center">
          {startIcon}

          <Heading
            UNSAFE_className={cx(disabled && styles.disabledText)}
            level={3}
            marginTop="size-0"
            marginBottom="size-40"
          >
            {children}
          </Heading>

          {endIcon}
        </Flex>
      </View>
    </div>
  );
};
