import { Flex, View } from "@adobe/react-spectrum";
import { Heading, SubHeading } from "../../Atoms/Heading";
import { styles } from "./styles";

export const DashboardLayout = ({ headerSection, todoSection, completedSection }) => {
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
        UNSAFE_className={styles.dashboard}
        direction="row"
        width="100%"
        height="100%"
        gap={{ L: "size-500", base: "size-300" }}
      >
        <View />

        <View
          UNSAFE_className={styles.column}
          height="auto"
          maxWidth="50%"
          width="50%"
          marginBottom={{ L: "size-500", base: "size-300" }}
          padding="size-200"
          minWidth="size-5000"
          borderColor="gray-400"
          borderRadius="medium"
          borderWidth="thin"
        >
          <Flex direction="column">
            <SubHeading>To-do tasks</SubHeading>

            {todoSection}
          </Flex>
        </View>

        <View
          UNSAFE_className={styles.column}
          height="auto"
          maxWidth="50%"
          width="50%"
          marginBottom={{ L: "size-500", base: "size-300" }}
          padding="size-200"
          minWidth="size-5000"
          borderColor="gray-400"
          borderRadius="medium"
          borderWidth="thin"
        >
          <Flex direction="column" height="100%">
            <SubHeading>Completed tasks</SubHeading>

            {completedSection}
          </Flex>
        </View>

        <View />
      </Flex>
    </Flex>
  );
};
