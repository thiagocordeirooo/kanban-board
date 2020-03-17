import { ThemeProvider } from "@material-ui/styles";
import React, { useEffect } from "react";
import { iniApi } from "_common/services/Api";
import MainRoutes from "./MainRoutes";
import theme from "./theme";

function App() {
  useEffect(() => {
    window["theme"] = theme;

    iniApi();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
