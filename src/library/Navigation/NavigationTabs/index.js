import Question from "@spectrum-icons/workflow/JourneyReports";
import TaskList from "@spectrum-icons/workflow/ViewWeek";
import React from "react";
import { Item } from "react-stately";
import { MenuTabs } from "../../Molecules/Tabs/MenuTabs/index";
import { styles } from "./styles";

export const NavigationTabs = () => {
  return (
    <>
      <span style={styles.menuLabel}>Browse</span>

      <MenuTabs>
        <Item
          title={
            <>
              <TaskList size="S" />
              <>Tasks</>
            </>
          }
        />
        <Item
          title={
            <>
              <Question size="S" />
              <>Questionnaire</>
            </>
          }
        ></Item>
      </MenuTabs>
    </>
  );
};
