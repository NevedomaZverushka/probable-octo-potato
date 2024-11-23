import { Flex, View } from "@adobe/react-spectrum";
import { Outlet } from "react-router-dom";
import { useDeviceType } from "../../../hooks/useDeviceType";

export const SiteLayout = ({ sideMenuSection, navigationSection }) => {
  const { isDesktop } = useDeviceType();

  return (
    <Flex direction={{ L: "row", base: "column" }} height="100vh">
      <View
        height={{ L: "auto", base: "size-600" }}
        width={{ L: "size-900", base: "auto" }}
        paddingY={{ L: "size-300", base: "size-0" }}
        paddingX={{ L: "size-0", base: "size-100" }}
        backgroundColor="blue-300"
        borderColor="gray-400"
        borderEndWidth="thin"
        colorVersion="6"
      >
        {sideMenuSection}
      </View>

      <View
        width="size-3400"
        padding="size-200"
        backgroundColor="gray-100"
        borderColor="gray-400"
        borderEndWidth="thin"
        isHidden={!isDesktop}
        colorVersion="6"
      >
        {navigationSection}
      </View>

      <View
        flex="1"
        paddingTop={{ L: "size-500", base: "size-300" }}
        backgroundColor="gray-75"
        overflow="hidden"
        colorVersion="6"
      >
        <Outlet />
      </View>
    </Flex>
  );
};
