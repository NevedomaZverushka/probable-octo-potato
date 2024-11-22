import { Flex, Heading, View } from "@adobe/react-spectrum";
import ChevronRight from "@spectrum-icons/workflow/ChevronRight";
import { useRef } from "react";
import { useButton } from "react-aria";
import { styles } from "./styles";

export const PrimaryButton = ({ children, ...props }) => {
  let ref = useRef();
  let { buttonProps } = useButton({ children, ...props }, ref);

  return (
    <div {...buttonProps} ref={ref}>
      <View backgroundColor="blue-100" paddingX="size-200" paddingY="size-75" borderRadius="large" colorVersion="6">
        <Flex direction="row" gap="size-100" alignItems="center">
          <Heading UNSAFE_className={styles.text} level={3} marginTop="size-0" marginBottom="size-75">
            {children}
          </Heading>

          <ChevronRight size="S" />
        </Flex>
      </View>
    </div>
  );
};
