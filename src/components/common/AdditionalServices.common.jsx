import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function AdditionalServices() {
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
          Additional Services
        </Typography>
      </Typography>
      <Stack direction={"column"}>
        <Typography variant="p" color="text">
          <CheckIcon color="success" sx={{ marginRight: 1 }} />
          More than 15 pages - Custom Pricing
        </Typography>
        <Typography variant="p" color="text">
          <CheckIcon color="success" sx={{ marginRight: 1 }} />
          Ongoing Maintenance & Support
        </Typography>
        <Typography variant="p" color="text">
          <CheckIcon color="success" sx={{ marginRight: 1 }} />
          Hosting & Domain Purchase Assistance
        </Typography>
        <Typography variant="p" color="text">
          <CheckIcon color="success" sx={{ marginRight: 1 }} />
          Extra Features (Chat, E-commerce, CRM, etc.)
        </Typography>
      </Stack>
    </Stack>
  );
}

export default AdditionalServices;
