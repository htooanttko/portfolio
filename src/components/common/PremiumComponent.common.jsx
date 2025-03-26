import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DiamondIcon from "@mui/icons-material/Diamond";

function PremiumComponent({ handleScroll, refs: { contactRef } }) {
  const handleViewContact = () => {
    handleScroll(contactRef);
  };

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
        <Stack spacing={2}>
          <Typography variant="p">
            For enterprises & complex applications (Large business sites, Custom
            Web Applications, basic SaaS.)
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

        <Button variant="outlined" color="primary" onClick={handleViewContact}>
          Contact for Pricing
        </Button>

        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Everything in Standard Package plus:" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Advanced Hosting & Deployment (Cloud VPS, Nginx, Load Balancing)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Backend: Multi-role access, payment integration" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Database: Replication + backups" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="DevOps: Zero-downtime deployment, load balancings" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="SEO Optimization (On-page SEO + schema markup)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Priority Support" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Unlimited Revision (within 1 year)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Up to 20 Pages" />
          </ListItem>
        </List>

        <Stack paddingX={3} spacing={2}>
          <Typography fontWeight={"bold"}>Estimated Delivery: </Typography>
          <Typography>4 - 8 weeks</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default PremiumComponent;
