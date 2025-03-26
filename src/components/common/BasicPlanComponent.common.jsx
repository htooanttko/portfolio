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
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DiamondIcon from "@mui/icons-material/Diamond";

function BasicPlanComponent({ handleScroll, refs: { contactRef } }) {
  const handleViewContact = () => {
    handleScroll(contactRef);
  };

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
        <Stack spacing={2}>
          <Typography variant="p">
            For small projects and personal websites (Landing Pages, Personal
            Websites, Small Business Websites).
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

        <Button variant="outlined" color="primary" onClick={handleViewContact}>
          Contact for Pricing
        </Button>

        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Basic UI/UX Design (Figma - Predefined template customization)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Basic Frontend: Next.js or React" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Basic Backend: Express.js or PHP Laravel" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Database: MySQL or MongoDB (basic setup)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Basic Hosting & Deployment (Shared hosting)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="SEO Optimization (Basic on-page SEO, metadata)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="5 Free Revision" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Up to 5 Pages" />
          </ListItem>
        </List>

        <Stack paddingX={3} spacing={2}>
          <Typography fontWeight={"bold"}>Estimated Delivery: </Typography>
          <Typography>1 - 3 weeks</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default BasicPlanComponent;
