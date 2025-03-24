import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DiamondIcon from "@mui/icons-material/Diamond";

function BasicPlanComponent() {
  return (
    <Paper className="p-2 py-5 flex justify-center ">
      <Stack gap={4}>
        <Typography
          variant={"h6"}
          component="p"
          fontWeight={"bold"}
          marginBottom={2}
        >
          Basic
        </Typography>
        <Stack spacing={1}>
          <Typography variant="p">
            For small projects and personal websites (landing pages, portfolios,
            small business sites).
          </Typography>
          <Typography
            variant="small"
            component={"small"}
            color="secondary.main"
          >
            <DiamondIcon
              color="primary"
              sx={{ marginRight: 1, fontSize: "20px" }}
            />
            Essential features with a simple design
          </Typography>
        </Stack>
        <Stack direction={"column"}>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Basic UI/UX Design (Figma - Predefined template customization)
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Basic Frontend: Next.js or React
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Basic Backend: Express.js or PHP Laravel
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Database: MySQL or MongoDB (basic setup).
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Basic Hosting & Deployment (Shared hosting)
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            SEO Optimization (Basic on-page SEO, metadata)
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />1 Free Revision
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Up to 3 Pages
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="p" component={"p"}>
            <Typography fontWeight={"bold"}>Estimated Delivery: </Typography>1 -
            2 weeks
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default BasicPlanComponent;
