import React from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BasicPlanComponent from "./common/BasicPlanComponent.common";
import StandardComponent from "./common/StandardComponent.common";
import PremiumComponent from "./common/PremiumComponent.common";

function Packages() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <Box bgcolor="primary.main">
      <Stack bgcolor={"primary.main"} padding={{ md: 10, xs: 5 }}>
        <Stack
          ref={ref}
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          direction={"row"}
          alignItems={"center"}
        >
          <Typography
            flex={{ md: 3, xs: 2 }}
            borderTop={3}
            color="text"
          ></Typography>
          <Typography
            flex={1}
            fontWeight={"bold"}
            textAlign={"end"}
            color={"text"}
            variant="h6"
          >
            Packages
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
          // paddingX={{ md: 10, xs: 5 }}
        >
          <Grid
            item
            xs={12}
            md={4}
            alignContent={"start"}
            marginTop={{ md: 3, xs: 0 }}
          >
            <BasicPlanComponent />
          </Grid>
          <Grid item xs={12} md={4} alignContent={"start"}>
            <StandardComponent />
          </Grid>
          <Grid item xs={12} md={4} alignContent={"start"} marginTop={3}>
            <PremiumComponent />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Packages;
