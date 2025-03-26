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

function StandardComponent({ handleScroll, refs: { contactRef } }) {
  const handleViewContact = () => {
    handleScroll(contactRef);
  };

  return (
    <Paper
      sx={{ border: 2, borderColor: "secondary.main" }}
      className="p-2 py-8 flex justify-center relative"
    >
      <Typography
        color="text"
        component="span"
        position={"absolute"}
        bgcolor={"secondary.main"}
        borderColor={"secondary.main"}
        textAlign={"center"}
        width={"100%"}
        top={0}
      >
        Recommended
      </Typography>
      <Stack gap={4}>
        <Typography
          variant={"h6"}
          component="p"
          fontWeight={"bold"}
          marginBottom={2}
        >
          Standard
        </Typography>
        <Stack spacing={2}>
          <Typography variant="p">
            For businesses & startups needing a full-featured website
            (E-commerce Websites (small-medium).)
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
            More pages, better performance, and tailored design
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
            <ListItemText primary="Everything in Basic Package plus:" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Custom UI/UX Design (Figma - Tailored to your brand)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Frontend: Enhanced NextJs or React UI with animations" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Backend: Advanced API structure (JWT/auth, caching)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="DevOps: CI/CD (GitHub Actions), automated testing" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="SEO Optimization (On-page + XML sitemap)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Performance & Security Enhancements (SSL, Caching, Firewalls)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="10 Free Revision" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Up to 10 Pages" />
          </ListItem>
        </List>

        <Stack paddingX={3} spacing={2}>
          <Typography fontWeight={"bold"}>Estimated Delivery: </Typography>
          <Typography>2 - 4 weeks</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default StandardComponent;
