import { Flex, View } from "@adobe/react-spectrum";
import { useRef } from "react";
import { useButton } from "react-aria";
import { Heading } from "../../Heading";
import { styles } from "./styles";

const noop = () => {};

export const SecondaryButton = ({ children, icon, onClick, ...props }) => {
  let ref = useRef();
  let { buttonProps } = useButton({ onPress: onClick || noop, children, ...props }, ref);

  return (
    <div {...buttonProps} ref={ref}>
      <View
        UNSAFE_className={styles.button}
        borderColor="gray-500"
        borderWidth="thin"
        paddingX="size-200"
        paddingY="size-75"
        borderRadius="medium"
        colorVersion="6"
      >
        <Flex direction="row" gap="size-100" alignItems="center">
          <Heading level={3} marginTop="size-0" marginBottom="size-75">
            {children}
          </Heading>

          {icon}
        </Flex>
      </View>
    </div>
  );
};
