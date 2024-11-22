import { defaultTheme, Provider } from "@adobe/react-spectrum";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DEFAULT_THEME } from "./constants";
import { StoreProvider } from "./contexts/Store/StoreContext";
import { SiteLayout } from "./library/Layouts/SiteLayout";
import { Tasks } from "./pages/Tasks/Tasks";

function App() {
  return (
    <Provider theme={defaultTheme} colorScheme={DEFAULT_THEME}>
      <StoreProvider>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/questionnaires" element={<div>hello questionnaires</div>} />
          </Route>
        </Routes>
      </StoreProvider>
    </Provider>
  );
}

export default App;
