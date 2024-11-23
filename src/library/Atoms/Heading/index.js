import { Heading as SpectrumHeading } from "@adobe/react-spectrum";
import { cx } from "@emotion/css";
import { styles } from "./styles";

export const Heading = ({ UNSAFE_className, children, level, ...props }) => {
  return (
    <SpectrumHeading UNSAFE_className={cx(UNSAFE_className, styles.heading)} level={level ?? 2} {...props}>
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
