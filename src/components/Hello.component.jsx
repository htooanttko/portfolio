import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProfileImage from "./common/ProfileImage.common";
import Icons from "./common/Icons.common";
import { contacts } from "../utils/contactlist";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";

function Hello({ handleScroll, refs: { packagesRef, contactRef } }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/imgs/hello/cv_form.pdf";
    link.download = "htoo_antt_ko(cv).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPackages = () => {
    handleScroll(packagesRef);
  };

  const handleViewContact = () => {
    handleScroll(contactRef);
  };

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
            direction={{ xs: "column", sm: "row" }}
            justifyContent={"space-between"}
            gap={2}
          >
            <Stack>
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<DownloadIcon />}
                onClick={handleDownloadCV}
                // endIcon={<ArrowForwardIcon />}
                // onClick={handleViewPackages}
                // onClick={handleViewContact}
              >
                Download CV
                {/* View Packages */}
                {/* Contact Me */}
              </Button>
            </Stack>
            <Stack
              direction={"row"}
              gap={2}
              width={{ sm: "50vh", xs: "40vh" }}
              alignSelf={"center"}
            >
              {contacts.map((list, index) => (
                <Stack
                  key={index}
                  bgcolor={"primary.main"}
                  padding={{ sm: 1, xs: 0.5 }}
                  borderRadius={1}
                  onClick={() => window.open(list.link, "_blank")}
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
