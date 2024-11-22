import { defaultTheme, Provider } from "@adobe/react-spectrum";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { StoreProvider } from "./contexts/Store/StoreContext";
import { useTheme } from "./hooks/useTheme";
import { SiteLayout } from "./library/Layouts/SiteLayout";
import { NavigationTabs } from "./library/Navigation/NavigationTabs";
import { SideMenu } from "./library/Navigation/SideMenu";
import { Tasks } from "./pages/Tasks/Tasks";
import "./utils/globalStyles";

function App() {
  const [theme] = useTheme();

  return (
    <Provider theme={defaultTheme} colorScheme={theme}>
      <StoreProvider>
        <Routes>
          <Route
            path="/"
            element={<SiteLayout sideMenuSection={<SideMenu />} navigationSection={<NavigationTabs />} />}
          >
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/questionnaires" element={<div>hello questionnaires</div>} />
          </Route>
        </Routes>
      </StoreProvider>
    </Provider>
  );
}

export default App;
