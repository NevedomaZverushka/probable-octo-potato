import { Divider, Flex, View } from "@adobe/react-spectrum";
import { useDeviceType } from "../../../../hooks/useDeviceType";
import { Heading } from "../../../../library/Atoms/Heading";
import { TaskType } from "../../../../library/Atoms/TaskType";
import { SecondaryText } from "../../../../library/Atoms/Text";
import { styles } from "./styles";

export const QuestionnaireLayout = ({ titleSection, idSection, seeMoreBtnSection, statusSection, completed }) => {
  const { isMobile } = useDeviceType();

  if (isMobile) {
    return (
      <View
        backgroundColor="gray-100"
        borderColor="gray-400"
        borderWidth="thin"
        borderRadius="medium"
        paddingX="size-300"
        paddingY="size-200"
        colorVersion="6"
      >
        <Flex direction="column" justifyContent="center" gap="size-100" alignItems="center">
          <TaskType />

          <Heading UNSAFE_className={styles.overflow} marginTop="size-0" marginBottom="size-75" level={3}>
            {titleSection}
          </Heading>
        </Flex>

        <Flex direction="column" gap="size-75" marginTop="size-75">
          <SecondaryText>Questionnaire #{idSection}</SecondaryText>

          {statusSection}
        </Flex>

        <View marginTop="size-100">{seeMoreBtnSection}</View>
      </View>
    );
  }
  return (
    <View
      backgroundColor="gray-100"
      borderColor="gray-400"
      borderWidth="thin"
      borderRadius="medium"
      paddingX="size-300"
      paddingY="size-200"
      colorVersion="6"
    >
      <Flex direction="row" justifyContent="start" gap="size-300" alignItems="center">
        <TaskType />

        <Flex direction="column">
          <Heading marginTop="size-0" marginBottom="size-75" level={3}>
            {titleSection}
          </Heading>

          <SecondaryText>Questionnaire #{idSection}</SecondaryText>
        </Flex>
      </Flex>

      <Divider marginY="size-200" size="S" />

      <Flex direction="row" justifyContent="space-between" alignItems="center" marginTop="size-300">
        {seeMoreBtnSection}

        {statusSection}
      </Flex>
    </View>
  );
};
