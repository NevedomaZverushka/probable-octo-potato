import { defaultTheme, Provider } from "@adobe/react-spectrum";
import "./App.css";
import { DEFAULT_THEME } from "./constants";
import { PageLayout } from "./library/Layouts/PageLayout";

function App() {
  return (
    <Provider theme={defaultTheme} colorScheme={DEFAULT_THEME}>
      <PageLayout />
    </Provider>
  );
}

export default App;
