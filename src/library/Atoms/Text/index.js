import { View } from "@adobe/react-spectrum";
import { styles } from "./styles";

export const Text = ({ className, children }) => {
  return <View UNSAFE_className={className}>{children}</View>;
};

export const SecondaryText = ({ children }) => {
  return <div className={styles.secondaryText}>{children}</div>;
};
