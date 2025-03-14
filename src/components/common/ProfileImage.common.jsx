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
        component="img"
        src="/portfolio/imgs/hello/cloud.png"
        alt="icon3"
        width={40}
        height={40}
        position="absolute"
        top={80}
        left={60}
        zIndex={5}
        sx={{ opacity: 0.7 }}
      />
      <Box
        component="img"
        src="/portfolio/imgs/hello/code.png"
        alt="icon1"
        width={40}
        height={40}
        position="absolute"
        top={200}
        left={100}
        zIndex={5}
        sx={{ transform: "rotate(-15deg)", opacity: 0.8 }}
      />
      <Box
        component="img"
        src="/portfolio/imgs/hello/continuous.png"
        alt="icon3"
        width={40}
        height={40}
        position="absolute"
        bottom={100}
        left={30}
        zIndex={5}
        sx={{ transform: "rotate(-20deg)" }}
      />
      <Box
        component="img"
        src="/portfolio/imgs/hello/github.png"
        alt="icon3"
        width={40}
        height={40}
        position="absolute"
        top={150}
        right={80}
        zIndex={5}
        sx={{ transform: "rotate(20deg)", opacity: 0.7 }}
      />
      <Box
        component="img"
        src="/portfolio/imgs/hello/devops.png"
        alt="icon2"
        width={50}
        height={50}
        position="absolute"
        bottom={150}
        right={30}
        zIndex={5}
        sx={{ transform: "rotate(10deg)", opacity: 0.7 }}
      />

      <Box
        width={{ md: 500, xs: 300 }}
        height={{ md: 420, xs: 220 }}
        borderRadius={3}
        position={"absolute"}
        border="5px solid white"
        boxShadow="0 0 0 10px white"
        bgcolor={"secondary.main"}
      />
      <Box
        component="img"
        src="/portfolio/imgs/hello/me.png"
        alt="profile"
        width={"100%"}
        height={"100%"}
        position="relative"
        zIndex={10}
      />
    </Box>
  );
}

export default ProfileImage;
