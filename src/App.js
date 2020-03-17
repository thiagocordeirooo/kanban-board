import { ThemeProvider } from "@material-ui/styles";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "store";
import Snackbar from "_common/components/Snackbar";
import { iniApi } from "_common/services/Api";
import MainRoutes from "./MainRoutes";
import theme from "./theme";

function App() {
  useEffect(() => {
    window["theme"] = theme;

    iniApi();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainRoutes />

        <Snackbar />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
