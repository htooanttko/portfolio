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
          Add-ons & Extra Charges
        </Typography>
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            <CheckIcon color="success" />
          </ListItemIcon>
          <ListItemText sx={{ color: "text.main" }} primary="Addtional Pages" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon color="success" />
          </ListItemIcon>
          <ListItemText
            sx={{ color: "text.main" }}
            primary="Ongoing Maintenance & Support"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon color="success" />
          </ListItemIcon>
          <ListItemText
            sx={{ color: "text.main" }}
            primary="Hosting & Domain Purchase Assistance , SSL Certificate Setup & Renewal"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon color="success" />
          </ListItemIcon>
          <ListItemText
            sx={{ color: "text.main" }}
            primary="Extra Features (Chat, E-commerce, CRM, etc.)"
          />
        </ListItem>
      </List>
    </Stack>
  );
}

export default AdditionalServices;
