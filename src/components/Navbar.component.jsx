import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DrawerComponent from "./common/DrawerComponent.common";
import { navItems } from "../utils/navItems";
import Icons from "./common/Icons.common";
import { Stack } from "@mui/material";

function Navbar({ handleScroll, refs, window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {
    helloRef,
    aboutRef,
    skillsRef,
    servicesRef,
    packagesRef,
    contactRef,
  } = refs;

  const sectionRefs = {
    Hello: helloRef,
    About: aboutRef,
    Skills: skillsRef,
    Services: servicesRef,
    "Packages & Pricing": packagesRef,
    Contact: contactRef,
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        color="none"
        position="absolute"
        sx={{ boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon sx={{ color: "text.main" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            color="text"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            <Stack width={"10vh"}>
              <Icons url={"logo.png"} type="" invert="invert(1)" />
            </Stack>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ marginX: 2 }}
                onClick={() => handleScroll(sectionRefs[item])}
              >
                <Typography
                  fontWeight={"bold"}
                  color="text"
                  className="capitalize"
                >
                  {item}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <DrawerComponent
        window={window}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        handleScroll={handleScroll}
        refs={refs}
      />
    </Box>
  );
}

export default Navbar;
