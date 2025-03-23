import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { navItems } from "../utils/navItems";

function Footer({ handleScroll, refs }) {
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
    <Stack
      component="footer"
      textAlign={"center"}
      alignItems={"center"}
      bgcolor={"primary.main"}
      paddingTop={{ md: 2, xs: 1 }}
      paddingBottom={{ md: 1, xs: 0 }}
    >
      <Typography
        variant="p"
        color="text"
        fontWeight={"bold"}
        fontSize={"small"}
      >
        &copy; 2025 Htoo Antt Ko. Built with ❤️ using React.
      </Typography>
      <Box>
        {navItems.map((item) => (
          <Button key={item} onClick={() => handleScroll(sectionRefs[item])}>
            <Typography
              color="text"
              fontSize={"small"}
              fontWeight={"bold"}
              className="capitalize"
              sx={{ textDecoration: "underline" }}
            >
              {item}
            </Typography>
          </Button>
        ))}
      </Box>
    </Stack>
  );
}

export default Footer;
