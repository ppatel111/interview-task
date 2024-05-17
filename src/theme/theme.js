import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "DM Sans, sans-serif",
          color: "#282828",
        },
      },
    },
  },
});
