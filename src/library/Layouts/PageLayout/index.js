import { Flex, View } from "@adobe/react-spectrum";
import { Outlet } from "react-router-dom";
import { NavigationTabs } from "../../Navigation/NavigationTabs";

export const PageLayout = ({ children }) => {
  return (
    <Flex direction={{ L: "row", S: "column" }} height="100vh">
      <View
        backgroundColor="gray-100"
        width={{ L: "size-800", S: "100vw" }}
        height={{ L: "auto", S: "size-600" }}
        borderColor="gray-400"
        borderEndWidth="thin"
        colorVersion="6"
      />

      <View
        backgroundColor="gray-100"
        width="size-3600"
        padding="size-200"
        borderColor="gray-400"
        borderEndWidth="thin"
      >
        <NavigationTabs />
      </View>

      <View backgroundColor="gray-75" width="100%">
        <Outlet />
      </View>
    </Flex>
  );
};
