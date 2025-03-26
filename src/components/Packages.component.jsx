import React from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BasicPlanComponent from "./common/BasicPlanComponent.common";
import StandardComponent from "./common/StandardComponent.common";
import PremiumComponent from "./common/PremiumComponent.common";
import AdditionalServices from "./common/AdditionalServices.common";
import WhyChooseUs from "./common/WhyChooseUs.common";
import WhyRecommend from "./common/WhyRecommend.common";

function Packages({ handleScroll, refs }) {
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
        <Stack
          ref={ref}
          component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={5} marginTop={{ md: 3, xs: 1 }}>
            <Grid
              item
              xs={12}
              md={4}
              alignContent={"start"}
              marginTop={{ md: 3, xs: 0 }}
            >
              <BasicPlanComponent handleScroll={handleScroll} refs={refs} />
            </Grid>
            <Grid item xs={12} md={4} alignContent={"start"}>
              <StandardComponent handleScroll={handleScroll} refs={refs} />
            </Grid>
            <Grid item xs={12} md={4} alignContent={"start"} marginTop={3}>
              <PremiumComponent handleScroll={handleScroll} refs={refs} />
            </Grid>
          </Grid>
          <Stack
            direction={{ md: "row", xs: "column" }}
            marginTop={{ md: 10, xs: 8 }}
          >
            <Stack flex={1}>
              <AdditionalServices />
            </Stack>
            <Stack flex={1} marginTop={{ md: 0, xs: 8 }}>
              <WhyRecommend />
            </Stack>
          </Stack>
          <Stack flex={1} marginTop={{ md: 10, xs: 8 }}>
            <WhyChooseUs />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Packages;
