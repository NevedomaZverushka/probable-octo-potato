import Question from "@spectrum-icons/workflow/JourneyReports";
import TaskList from "@spectrum-icons/workflow/ViewWeek";
import { size } from "lodash";
import React, { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Item } from "react-stately";
import { SubHeading } from "../../Atoms/Heading";
import { MenuTabs } from "../../Molecules/Tabs/MenuTabs/index";

export const NavigationTabs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentTab = useMemo(() => pathname.substring(1, size(pathname)), [pathname]);

  const onChangePage = useCallback((page) => navigate(`/${page}`), [navigate]);

  return (
    <>
      <SubHeading>Browse</SubHeading>

      <MenuTabs selectedKey={currentTab} onClick={onChangePage}>
        <Item
          key="tasks"
          title={
            <>
              <TaskList size="S" />
              <>Tasks</>
            </>
          }
          aria-label="tasks"
        />
        <Item
          key="questionnaires"
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
