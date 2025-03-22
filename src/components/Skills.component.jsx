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
        <Grid
          ref={ref}
          component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          container
          spacing={5}
          marginTop={{ md: 3, xs: 1 }}
        >
          {skills.map((list, index) => (
            <Grid
              key={index}
              item
              xs={6}
              md={1.5}
              className="flex justify-center"
            >
              <Paper
                sx={{
                  bgcolor: "primary.main",
                }}
                className="p-1 w-[20vh] text-center flex items-center justify-center aspect-square"
              >
                <Stack direction={"column"} alignItems={"center"}>
                  <Typography padding={3}>
                    <Icons url={list.url} type="skills" />
                  </Typography>
                  <Typography
                    color="text"
                    variant="p"
                    fontSize={"small"}
                    fontWeight={"bold"}
                  >
                    {list.name}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}

export default Skills;
