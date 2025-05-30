import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { navItems } from "../../utils/navItems";
import Icons from "./Icons.common";

function DrawerComponent({
  window,
  mobileOpen,
  handleDrawerToggle,
  handleScroll,
  refs,
}) {
  const drawerWidth = 240;
  const container =
    window !== undefined ? () => window().document.body : undefined;
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

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      <Box
        onClick={handleDrawerToggle}
        sx={{ textAlign: "center" }}
        className="h-full"
        bgcolor={"primary.main"}
        color={"text.main"}
      >
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: "text.main",
          }}
        >
          <Stack width={"20vh"}>
            <Icons url={"logo.png"} type="" />
          </Stack>
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => handleScroll(sectionRefs[item])}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default DrawerComponent;
