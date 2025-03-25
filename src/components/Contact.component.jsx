import React, { useState } from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icons from "./common/Icons.common";
import { contacts } from "../utils/contactlist";
import toast from "react-hot-toast";

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText("kohtooantt@gmail.com");
    toast.success("Copied");
  };

  return (
    <Box>
      <Stack padding={{ md: 10, xs: 5 }}>
        <Stack
          ref={ref}
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          direction={"row"}
          alignItems={"center"}
        >
          <Typography flex={1} fontWeight={"bold"} color={"text"} variant="h6">
            Contact
          </Typography>
          <Typography
            flex={{ md: 3, xs: 2 }}
            borderTop={3}
            color="text"
          ></Typography>
        </Stack>
        <Typography
          ref={ref}
          component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          marginTop={{ md: 5, xs: 4 }}
          paddingX={{ md: 10, xs: 1 }}
        >
          <Card
            sx={{
              bgcolor: "primary.main",
            }}
          >
            <CardContent>
              <Stack textAlign={"center"}>
                <Stack
                  fontWeight={"bold"}
                  className="cursor-pointer"
                  onClick={handleCopy}
                  direction={"row"}
                  justifyContent={"center"}
                  gap={2}
                >
                  <Stack width={"4vh"}>
                    <Icons url={"email.png"} type="contact" />
                  </Stack>
                  <Typography
                    fontWeight={"bold"}
                    color="text"
                    sx={{ textDecoration: "underline" }}
                  >
                    kohtooantt@gmail.com
                  </Typography>
                </Stack>
              </Stack>
              <Stack paddingTop={2}>
                <Stack
                  direction={"row"}
                  gap={2}
                  width={{ sm: "37vh", xs: "30vh" }}
                  alignSelf={"center"}
                  justifyContent={"center"}
                >
                  {contacts
                    .filter((list) => list.name !== "github")
                    .map((list, index) => (
                      <Stack
                        key={index}
                        bgcolor={"secondary.main"}
                        padding={{ sm: 1, xs: 0.5 }}
                        borderRadius={1}
                        onClick={() => window.open(list.link, "_blank")}
                      >
                        <Icons url={list.url} type="contact" />
                      </Stack>
                    ))}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Typography>
      </Stack>
    </Box>
  );
}

export default Contact;
