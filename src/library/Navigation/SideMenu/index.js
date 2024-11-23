import { Flex } from "@adobe/react-spectrum";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";
import Menu from "@spectrum-icons/workflow/ShowMenu";
import User from "@spectrum-icons/workflow/User";
import { DEFAULT_THEME } from "../../../constants";
import { useDeviceType } from "../../../hooks/useDeviceType";
import { useTheme } from "../../../hooks/useTheme";
import { IconButton } from "../../Atoms/Button/IconButton";
import { Drawer } from "../../Molecules/Drawer";
import { NavigationTabs } from "../NavigationTabs";

export const SideMenu = () => {
  const [theme, toggleTheme] = useTheme();
  const { isDesktop } = useDeviceType();

  return (
    <Flex
      direction={{ L: "column", base: "row" }}
      alignItems="center"
      justifyContent="space-between"
      height="100%"
      width="100%"
      gap="size-100"
    >
      {!isDesktop && (
        <Drawer
          triggerButtonSection={(open) => (
            <IconButton onClick={open}>
              <Menu size="M" color="gray-75" />
            </IconButton>
          )}
        >
          <NavigationTabs />
        </Drawer>
      )}

      <Flex
        direction={{ L: "column", base: "row-reverse" }}
        alignItems="center"
        justifyContent={{ L: "space-between", base: "start" }}
        height="100%"
        width="100%"
        gap="size-100"
      >
        <IconButton>
          <User size="M" color="gray-75" />
        </IconButton>

        <IconButton onClick={toggleTheme}>
          {theme === DEFAULT_THEME ? <Light size="M" color="gray-75" /> : <Moon size="M" color="gray-75" />}
        </IconButton>
      </Flex>
    </Flex>
  );
};
