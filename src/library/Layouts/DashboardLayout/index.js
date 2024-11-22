import { Flex, View } from "@adobe/react-spectrum";
import { Heading, SubHeading } from "../../Atoms/Heading";
import { styles } from "./styles";

export const DashboardLayout = ({ headerSection, todoSection, completedSection }) => {
  return (
    <Flex direction="column" height="100%">
      <Heading marginTop="size-300" marginBottom="size-500">
        {headerSection}
      </Heading>

      <Flex UNSAFE_className={styles.dashboard} direction="row" width="100%" height="100%">
        <View
          UNSAFE_className={styles.column}
          marginEnd="size-500"
          borderColor="gray-400"
          borderRadius="medium"
          borderWidth="thin"
          padding="size-200"
          height="auto"
          maxWidth="50%"
          width="50%"
          minWidth="size-5000"
        >
          <Flex direction="column">
            <SubHeading>To-do tasks</SubHeading>

            {todoSection}
          </Flex>
        </View>

        <View
          UNSAFE_className={styles.column}
          marginEnd="size-500"
          borderColor="gray-400"
          borderRadius="medium"
          borderWidth="thin"
          padding="size-200"
          height="auto"
          width="50%"
          minWidth="size-5000"
        >
          <Flex direction="column" height="100%">
            <SubHeading>Completed tasks</SubHeading>

            {completedSection}
          </Flex>
        </View>
      </Flex>
    </Flex>
  );
};
