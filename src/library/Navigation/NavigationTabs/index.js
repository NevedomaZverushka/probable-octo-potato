import Question from "@spectrum-icons/workflow/JourneyReports";
import TaskList from "@spectrum-icons/workflow/ViewWeek";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "react-stately";
import { MenuTabs } from "../../Molecules/Tabs/MenuTabs/index";
import { styles } from "./styles";

export const NavigationTabs = () => {
  const navigate = useNavigate();

  const onChangePage = useCallback((page) => navigate(`/${page}`), []);

  return (
    <>
      <span style={styles.menuLabel}>Browse</span>

      <MenuTabs onClick={onChangePage}>
        <Item
          title={
            <>
              <TaskList size="S" />
              <>Tasks</>
            </>
          }
          aria-label="tasks"
        />
        <Item
          title={
            <>
              <Question size="S" />
              <>Questionnaires</>
            </>
          }
          aria-label="questionnaires"
        />
      </MenuTabs>
    </>
  );
};
