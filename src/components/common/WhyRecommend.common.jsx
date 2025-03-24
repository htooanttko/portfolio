import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function WhyRecommend() {
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
          Why Recommend Standard?
        </Typography>
      </Typography>
      <Stack direction={"column"}>
        <Typography variant="p" color="text">
          <CheckIcon color="success" sx={{ marginRight: 1 }} />
          Best value for money (more pages, better features).
        </Typography>
        <Typography variant="p" color="text">
          <CheckIcon color="success" sx={{ marginRight: 1 }} />
          CI/CD included (faster updates, fewer errors).
        </Typography>
        <Typography variant="p" color="text">
          <CheckIcon color="success" sx={{ marginRight: 1 }} />
          Faster delivery than Premium but more scalable than Basic.
        </Typography>
      </Stack>
    </Stack>
  );
}

export default WhyRecommend;
