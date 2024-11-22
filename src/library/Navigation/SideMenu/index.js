import { Flex } from "@adobe/react-spectrum";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";
import User from "@spectrum-icons/workflow/User";
import { DEFAULT_THEME } from "../../../constants";
import { useTheme } from "../../../hooks/useTheme";
import { IconButton } from "../../Atoms/Button/IconButton";

export const SideMenu = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <Flex direction="column" alignItems="center" justifyContent="space-between" height="100%">
      <IconButton>
        <User size="M" color="gray-75" />
      </IconButton>

      <IconButton onClick={toggleTheme}>
        {theme === DEFAULT_THEME ? <Light size="M" color="gray-75" /> : <Moon size="M" color="gray-75" />}
      </IconButton>
    </Flex>
  );
};
