import { Heading as SpectrumHeading } from "@adobe/react-spectrum";
import { styles } from "./styles";

export const Heading = ({ children }) => {
  return (
    <SpectrumHeading UNSAFE_className={styles.heading} marginTop="size-300" marginBottom="size-500" level={2}>
      {children}
    </SpectrumHeading>
  );
};

export const SubHeading = ({ children }) => {
  return (
    <SpectrumHeading UNSAFE_className={styles.subheading} marginTop="size-130" level={5}>
      {children}
    </SpectrumHeading>
  );
};
