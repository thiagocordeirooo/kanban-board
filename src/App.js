import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import MainRoutes from "./MainRoutes";
import theme from "./theme";

function App() {
  window["theme"] = theme;

  return (
    <ThemeProvider theme={theme}>
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
