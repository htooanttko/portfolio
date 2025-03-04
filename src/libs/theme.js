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
    // typography: {
    //     fontFamily: ["Jost"],
    // },
    // MuiListButton: {
    //     fontFamily: ["Jost"],
    // },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    // fontFamily: ["Jost"],
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
