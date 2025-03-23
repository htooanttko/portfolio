import React from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../utils/skillslist";
import Icons from "./common/Icons.common";

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <Box>
      <Stack padding={{ md: 10, xs: 0 }} paddingY={{ xs: 5 }}>
        <Stack
          ref={ref}
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          direction={"row"}
          alignItems={"center"}
          paddingX={{ xs: 5 }}
        >
          <Typography flex={3} borderTop={3} color="text"></Typography>
          <Typography
            flex={1}
            fontWeight={"bold"}
            textAlign={"end"}
            color={"text"}
            variant="h6"
          >
            Skills
          </Typography>
        </Stack>
        <Stack
          ref={ref}
          direction={"row"}
          gap={3}
          flexWrap={"wrap"}
          justifyContent={"center"}
          component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          marginTop={{ md: 8, xs: 5 }}
          paddingX={{ xs: 1 }}
        >
          {skills.map((list, index) => (
            <Paper
              key={index}
              sx={{
                bgcolor: "primary.main",
                width: { sm: "15vh", xs: "10vh" },
              }}
              className="p-1 text-center flex items-center justify-center aspect-square"
            >
              <Stack direction={"column"} alignItems={"center"}>
                <Typography padding={1}>
                  <Icons url={list.url} type="skills" />
                </Typography>
                <Typography
                  color="text"
                  variant="p"
                  fontSize={{ sm: "small", xs: "8px" }}
                  fontWeight={"bold"}
                >
                  {list.name}
                </Typography>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Skills;
