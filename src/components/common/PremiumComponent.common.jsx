import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DiamondIcon from "@mui/icons-material/Diamond";

function PremiumComponent() {
  return (
    <Paper className="p-2 py-5 flex justify-center">
      <Stack gap={4}>
        <Typography
          variant={"h6"}
          component="p"
          fontWeight={"bold"}
          marginBottom={2}
        >
          Premium
        </Typography>
        <Stack spacing={1}>
          <Typography variant="p">
            For enterprises & complex applications (Large business sites, custom
            web apps, complex platforms.)
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
            Best for large projects with more pages and advanced features
          </Typography>
        </Stack>
        <Stack direction={"column"}>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Everything in Standard Package +
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Advanced Hosting & Deployment (Cloud VPS, Nginx, Load Balancing)
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Backend: Multi-role access, payment integration
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Database: Replication + backups
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            DevOps: Zero-downtime deployment, load balancing.
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            SEO Optimization (On-page SEO + schema markup)
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Priority Support
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Unlimited Revision
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Up to 15 Pages
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="p" component={"p"}>
            <Typography fontWeight={"bold"}>Estimated Delivery: </Typography>4 -
            8 weeks
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default PremiumComponent;
