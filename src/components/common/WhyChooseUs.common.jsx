import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function WhyChooseUs() {
  return (
    <Stack>
      <Typography>
        <Typography
          variant={"h6"}
          component="p"
          color={"text"}
          fontWeight={"bold"}
          marginBottom={3}
        >
          Why Choose Us?
        </Typography>
      </Typography>
      <Stack direction={"column"}>
        <Typography variant="p" color="text">
          <CheckIcon color="success" sx={{ marginRight: 1 }} />
          Expert in Full Stack development and, Cloud, including DevOps
        </Typography>
        <Typography variant="p" color="text">
          <CheckIcon color="success" sx={{ marginRight: 1 }} />
          Scalable, Secure, and SEO-Optimized Websites
        </Typography>
        <Typography variant="p" color="text">
          <CheckIcon color="success" sx={{ marginRight: 1 }} />
          Flexible Packages Based on Your Business Needs
        </Typography>
      </Stack>
    </Stack>
  );
}

export default WhyChooseUs;
