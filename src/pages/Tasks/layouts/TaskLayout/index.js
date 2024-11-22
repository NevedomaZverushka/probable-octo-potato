import { Divider, Flex, StatusLight, View } from "@adobe/react-spectrum";
import { cx } from "@emotion/css";
import { Heading } from "../../../../library/Atoms/Heading";
import { Status } from "../../../../library/Atoms/Status";
import { SecondaryText, Text } from "../../../../library/Atoms/Text";
import { styles } from "./styles";

export const TaskLayout = ({
  titleSection,
  idSection,
  descriptionSection,
  dueAtSection,
  seeMoreBtnSection,
  type,
  preview,
  completed,
}) => {
  return (
    <View
      UNSAFE_className={cx(!completed && styles.layout, preview && styles.preview)}
      backgroundColor="gray-100"
      borderColor="gray-400"
      borderWidth="thin"
      borderRadius="medium"
      paddingX="size-300"
      paddingY="size-200"
      colorVersion="6"
      maxWidth={preview ? "size-6000" : "100%"}
    >
      <Flex direction="row" justifyContent="space-between" alignItems="end">
        <Flex direction="row" justifyContent="start" gap="size-300" alignItems="center">
          <Status type={type} />

          <Flex direction="column">
            <Heading marginTop="size-0" marginBottom="size-75" level={3}>
              {titleSection}
            </Heading>

            <SecondaryText>Task #{idSection}</SecondaryText>
          </Flex>
        </Flex>

        <SecondaryText>Due at: {dueAtSection}</SecondaryText>
      </Flex>

      <Divider marginY="size-200" size="S" />

      <Text className={styles.description}>{descriptionSection}</Text>

      <Flex direction="row" justifyContent="space-between" alignItems="center" marginTop="size-300">
        {seeMoreBtnSection}

        {completed && <StatusLight variant="positive">Ready</StatusLight>}
      </Flex>
    </View>
  );
};
