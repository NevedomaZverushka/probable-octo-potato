import { View } from "@adobe/react-spectrum";
import { useEffect, useRef, useState } from "react";
import { OverlayContainer, useDialog, useOverlay } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { styles } from "./styles";

export const Drawer = ({ triggerButtonSection, children }) => {
  const ref = useRef();
  const overlayRef = useRef();

  const { isOpen, close: onClose, open: onOpen } = useOverlayTriggerState({});

  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      isDismissable: true,
    },
    ref
  );

  const { dialogProps } = useDialog({}, ref);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);

      setTimeout(() => setOverlayVisible(true), 10);
      setTimeout(() => setIsAnimating(true), 300);
    } else {
      setIsAnimating(false);
      setOverlayVisible(false);

      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isOpen]);

  return (
    <>
      {triggerButtonSection(onOpen)}

      <div ref={overlayRef} />

      {shouldRender && (
        <OverlayContainer portalContainer={overlayRef.current}>
          <View
            UNSAFE_className={styles.overlay(overlayVisible)}
            position="fixed"
            width="100vw"
            height="100vh"
            top="size-600"
            left={0}
            right={0}
            bottom={0}
            zIndex={1000}
            onClick={onClose}
          />

          <View
            UNSAFE_className={styles.drawer(isAnimating)}
            position="fixed"
            width="size-3000"
            top="size-600"
            left={0}
            bottom={0}
            backgroundColor="gray-100"
            padding="size-300"
            zIndex={1001}
            colorVersion="6"
          >
            <div {...overlayProps} {...dialogProps} ref={ref}>
              {children}
            </div>
          </View>
        </OverlayContainer>
      )}
    </>
  );
};
