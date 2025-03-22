import React, { useState } from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icons from "./common/Icons.common";
import { contacts } from "../utils/contactlist";

function Contact() {
  const [copied, setCopied] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText("kohtooantt@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
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
          <Typography flex={3} borderTop={3} color="text"></Typography>
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
                  {copied && (
                    <Typography
                      variant="span"
                      fontSize={"small"}
                      bgcolor={"grey"}
                      color="text"
                      paddingX={1}
                      borderRadius={2}
                      className="absolute opacity-60 top-0 z-50"
                    >
                      Copied!
                    </Typography>
                  )}
                  <Stack width={"4vh"}>
                    <Icons url={"email.png"} type="contact" />
                  </Stack>
                  <Typography fontWeight={"bold"} color="text">
                    kohtooantt@gmail.com
                  </Typography>
                </Stack>
              </Stack>
              <Stack paddingTop={3}>
                <Stack
                  direction={"row"}
                  gap={2}
                  width={"60vh"}
                  alignSelf={"center"}
                  justifyContent={"center"}
                >
                  {contacts.map((list, index) => (
                    <Stack
                      key={index}
                      bgcolor={"secondary.main"}
                      padding={1}
                      borderRadius={1}
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
