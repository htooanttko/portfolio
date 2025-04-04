import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3D352A",
    },
    secondary: {
      main: "#BB9E7C",
    },
    text: {
      main: "#FFFFFF",
    },
  },
  typography: {
    // fontFamily: ["EmblemaOne"],
  },
  MuiListButton: {
    // fontFamily: ["EmblemaOne"],
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          //   fontFamily: ["EmblemaOne"],
          textTransform: "none",
          fontWeight: "500",
        },
        containedSuccess: {
          color: "white",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          fontSize: 8,
        },
      },
    },
  },
});
