import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
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

      <List>
        <ListItem>
          <ListItemIcon>
            <CheckBoxIcon color="text" />
          </ListItemIcon>
          <ListItemText
            sx={{ color: "text.main" }}
            primary="Expert in Full-Stack Development, Cloud Solutions, and DevOps"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckBoxIcon color="text" />
          </ListItemIcon>
          <ListItemText
            sx={{ color: "text.main" }}
            primary="Scalable, Secure, and SEO-Optimized Websites"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckBoxIcon color="text" />
          </ListItemIcon>
          <ListItemText
            sx={{ color: "text.main" }}
            primary="Flexible Packages Based on Your Business Needs"
          />
        </ListItem>
      </List>
    </Stack>
  );
}

export default WhyChooseUs;
