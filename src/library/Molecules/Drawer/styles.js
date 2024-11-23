import { css } from "@emotion/css";

export const styles = {
  overlay: (isVisible) => css`
    background-color: rgba(0, 0, 0, 0.4);
    opacity: ${isVisible ? "1" : "0"};
    transition: opacity 0.3s ease;
  `,
  drawer: (isAnimating) => css`
    transform: ${isAnimating ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease;
  `,
};
