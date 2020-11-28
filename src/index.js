import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducer from "./redux/reducers/allReducer";
import { Provider } from "react-redux";
import { ThemeProvider, unstable_createMuiStrictModeTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

export const theme = unstable_createMuiStrictModeTheme({
  palette: {
    type: "dark",
    primary: {
      main: orange[500],
      dark: orange[700],
    
    },
    secondary: {
      main: orange[900],
      dark: orange[1000],
    
    }
  },
});

const store = createStore(allReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
