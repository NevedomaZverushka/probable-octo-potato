import { Flex, View } from "@adobe/react-spectrum";
import { NavigationTabs } from "../../Navigation/NavigationTabs";

export const PageLayout = () => {
  return (
    <Flex direction={{ L: "row", S: "column" }} height="100vh">
      <View
        backgroundColor="gray-300"
        width={{ L: "size-800", S: "100vw" }}
        height={{ L: "auto", S: "size-600" }}
        borderColor="gray-400"
        borderEndWidth="thin"
      />

      <View
        backgroundColor="gray-200"
        width="size-3600"
        padding="size-200"
        borderColor="gray-400"
        borderEndWidth="thin"
      >
        <NavigationTabs />
      </View>

      <View backgroundColor="gray-0" width="auto" />
    </Flex>
  );
};
