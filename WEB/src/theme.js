import { createTheme } from "@material-ui/core/styles";

import { blue } from "@material-ui/core/colors";

const theme = createTheme({
  main: {
    backgroundColor: "#FFF",
    color: blue[700],
  },
  secondary: {
    backgroundColor: blue[500],
  },
  typography: {
    fontFamily: [
      "BlinkMacSystemFont",

      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default theme;
