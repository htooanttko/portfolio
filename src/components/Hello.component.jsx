import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProfileImage from "./common/ProfileImage.common";
import Icons from "./common/Icons.common";
import { contacts } from "../utils/contactlist";

function Hello() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <Box flex={1} justifyContent={"center"} alignContent={"center"}>
      <Stack
        height={{ md: "100vh", xs: "130vh" }}
        flex={1}
        direction={{ md: "row", xs: "column" }}
        alignContent={"center"}
      >
        <Typography
          ref={ref}
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          flex={{ md: 1, xs: 2 }}
          paddingX={5}
          paddingLeft={{ md: 10 }}
          alignContent={"center"}
        >
          <Typography
            color="text"
            fontWeight={"bold"}
            variant="h6"
            className="uppercase"
          >
            Hello, I am a
          </Typography>
          <Typography
            color="text"
            variant="h3"
            fontWeight={"bold"}
            paddingY={1}
            className="capitalize"
          >
            full stack{" "}
            <Typography variant="span" color="secondary">
              web developer.
            </Typography>
          </Typography>
          <Typography color="text">
            Hi, I am Htoo Antt Ko, a passionated Full Stack Developer based in
            Myanmar. <br /> Welcome to portfolio world.
          </Typography>
          <Stack
            paddingTop={5}
            direction={{ xs: "column", md: "row" }}
            // direction={"row"}
            justifyContent={"space-between"}
            gap={2}
          >
            <Stack>
              <Button variant="outlined" color="secondary">
                Download CV
              </Button>
            </Stack>
            <Stack
              direction={"row"}
              gap={2}
              width={"60vh"}
              alignSelf={"center"}
            >
              {contacts.map((list, index) => (
                <Stack
                  key={index}
                  bgcolor={"primary.main"}
                  padding={1}
                  borderRadius={1}
                >
                  <Icons url={list.url} type="contact" />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Typography>
        <Typography
          ref={ref}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          flex={1}
          justifyItems={"center"}
          alignContent={"end"}
        >
          <ProfileImage />
        </Typography>
      </Stack>
    </Box>
  );
}

export default Hello;
