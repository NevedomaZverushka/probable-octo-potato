import { Flex, View } from "@adobe/react-spectrum";
import { cx } from "@emotion/css";
import ChevronLeft from "@spectrum-icons/workflow/ChevronLeft";
import ChevronRight from "@spectrum-icons/workflow/ChevronRight";
import { useDeviceType } from "../../../hooks/useDeviceType";
import { useOpenClose } from "../../../hooks/useOpenClose";
import { SecondaryButton } from "../../Atoms/Button/SecondaryButton";
import { Heading, SubHeading } from "../../Atoms/Heading";
import { styles } from "./styles";

export const DashboardLayout = ({ headerSection, todoSection, completedSection }) => {
  const { isMobile } = useDeviceType();

  const [shouldShowCompleted, showCompleted, showTodo] = useOpenClose(false);

  return (
    <Flex direction="column" height="100%">
      <Heading
        marginTop={{ L: "size-300", base: "size-0" }}
        marginBottom={{ L: "size-500", base: "size-300" }}
        marginX={{ L: "size-500", base: "size-300" }}
      >
        {headerSection}
      </Heading>

      <Flex
        UNSAFE_className={styles.dashboard(isMobile)}
        direction="row"
        width="100%"
        height="100%"
        gap={{ L: "size-500", base: "size-300" }}
      >
        <View />

        {!!((!shouldShowCompleted && isMobile) || !isMobile) && (
          <View
            UNSAFE_className={styles.column}
            height="auto"
            maxWidth={{ L: "50%", M: "50%" }}
            width={{ L: "50%", M: "50%" }}
            minWidth={{ L: "size-5000", M: "size-5000", S: "size-3400", XS: "size-3400", base: "size-3400" }}
            flex={{ S: "1" }}
            marginBottom={{ L: "size-500", base: "size-300" }}
            padding="size-200"
            borderColor="gray-400"
            borderRadius="medium"
            borderWidth="thin"
            {...(isMobile ? { flex: 1 } : {})}
          >
            <Flex direction="column">
              <SubHeading>To-do tasks</SubHeading>

              {todoSection}
            </Flex>
          </View>
        )}

        {!!((shouldShowCompleted && isMobile) || !isMobile) && (
          <View
            UNSAFE_className={styles.column}
            height="auto"
            maxWidth={{ L: "50%", M: "50%" }}
            width={{ L: "50%", M: "50%" }}
            minWidth={{ L: "size-5000", M: "size-5000", S: "size-3400", XS: "size-3400", base: "size-3400" }}
            marginBottom={{ L: "size-500", base: "size-300" }}
            padding="size-200"
            borderColor="gray-400"
            borderRadius="medium"
            borderWidth="thin"
            {...(isMobile ? { flex: 1 } : {})}
          >
            <Flex direction="column" height="100%">
              <SubHeading>Completed tasks</SubHeading>

              {completedSection}
            </Flex>
          </View>
        )}

        <View />
      </Flex>

      {isMobile && (
        <Flex direction="row" justifyContent="space-between" marginBottom="size-300" marginX="size-300">
          <SecondaryButton
            onClick={showTodo}
            startIcon={<ChevronLeft UNSAFE_className={cx(!shouldShowCompleted && styles.opacity)} size="S" />}
            disabled={!shouldShowCompleted}
          >
            To-Do
          </SecondaryButton>

          <SecondaryButton
            onClick={showCompleted}
            endIcon={<ChevronRight UNSAFE_className={cx(shouldShowCompleted && styles.opacity)} size="S" />}
            disabled={shouldShowCompleted}
          >
            Finished
          </SecondaryButton>
        </Flex>
      )}
    </Flex>
  );
};
