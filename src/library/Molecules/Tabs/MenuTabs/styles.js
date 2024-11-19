export const styles = {
  tab: (isSelected) => ({
    fontWeight: 600,
    fontSize: "14px",
    backgroundColor: isSelected && "var(--spectrum-global-color-gray-300)",
    padding: "var(--spectrum-global-dimension-size-115)",
    borderRadius: "var(--spectrum-alias-border-radius-medium)",
    gap: "var(--spectrum-global-dimension-size-100)",
    cursor: "pointer",
  }),
};
