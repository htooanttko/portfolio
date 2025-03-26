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
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckIcon color="success" />
          </ListItemIcon>
          <ListItemText
            sx={{ color: "text.main" }}
            primary="Best value for money (more pages, better features)"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon color="success" />
          </ListItemIcon>
          <ListItemText
            sx={{ color: "text.main" }}
            primary="CI/CD included (faster updates, fewer errors)"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon color="success" />
          </ListItemIcon>
          <ListItemText
            sx={{ color: "text.main" }}
            primary="Faster delivery than Premium but more scalable than Basic"
          />
        </ListItem>
      </List>
    </Stack>
  );
}

export default WhyRecommend;
