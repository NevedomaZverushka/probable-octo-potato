import { styles } from "./styles";

export const RowLayout = ({ elementRef, style, children, ...props }) => {
  return (
    <div {...props} ref={elementRef} style={{ ...style, ...styles.row }}>
      {children}
    </div>
  );
};
