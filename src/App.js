import { defaultTheme, Provider } from "@adobe/react-spectrum";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DEFAULT_THEME } from "./constants";
import { PageLayout } from "./library/Layouts/PageLayout";

function App() {
  return (
    <Provider theme={defaultTheme} colorScheme={DEFAULT_THEME}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/tasks" element={<div>hello</div>} />
          <Route path="/questionnaires" element={<div>hello questionnaires</div>} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
