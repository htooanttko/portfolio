import { Box } from "@mui/material";
import React from "react";

function ProfileImage() {
  return (
    <Box
      width={{ md: 500, xs: 300 }}
      height={{ md: 500, xs: 300 }}
      position={"relative"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width={{ md: 420, xs: 300 }}
        height={{ md: 420, xs: 220 }}
        borderRadius={2}
        position={"absolute"}
        // border="5px solid white"
        // boxShadow="0 0 0 10px white"
        bgcolor={"rgba(187,158,124,0.5)"}
      />
      <Box
        component="img"
        src="/imgs/hello/me.png"
        alt="profile"
        width={"100%"}
        height={"100%"}
        position="relative"
        zIndex={10}
        sx={{
          filter: "brightness(95%)",
        }}
      />
    </Box>
  );
}

export default ProfileImage;
