import { View } from "@adobe/react-spectrum";
import { Text } from "../Text";
import { styles } from "./styles";

export const Chip = ({ children }) => {
  return (
    <View
      UNSAFE_className={styles.chip}
      backgroundColor="celery-100"
      borderColor="gray-600"
      borderWidth="thin"
      paddingX="size-160"
      borderRadius="medium"
      colorVersion="6"
    >
      <Text>{children}</Text>
    </View>
  );
};
