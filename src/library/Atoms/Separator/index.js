import { View } from "@adobe/react-spectrum";
import { useSeparator } from "react-aria";
import { styles } from "./styles";

export const Separator = (props) => {
  let { separatorProps } = useSeparator(props);

  return (
    <View marginY="size-200">
      <div {...separatorProps} className={styles.separator} />
    </View>
  );
};
