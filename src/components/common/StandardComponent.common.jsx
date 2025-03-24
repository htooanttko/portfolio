import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DiamondIcon from "@mui/icons-material/Diamond";

function StandardComponent() {
  return (
    <Paper
      sx={{ border: 2, borderColor: "secondary.main" }}
      className="p-2 py-8 flex justify-center relative"
    >
      <Typography
        color="text"
        component="span"
        position={"absolute"}
        // fontWeight={'bold'}
        bgcolor={"secondary.main"}
        borderColor={"secondary.main"}
        // paddingY={0.3}
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
        <Stack spacing={1}>
          <Typography variant="p">
            For businesses & startups needing a full-featured website
            (e-commerce (small-medium).)
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
        <Stack direction={"column"}>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Everything in Basic Package +
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Custom UI/UX Design (Figma - Tailored to your brand)
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Frontend: Enhanced NextJs or React UI with animations.
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Backend: Advanced API structure (JWT/auth, caching).
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            DevOps: CI/CD (GitHub Actions), automated testing.
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            SEO Optimization (On-page + XML sitemap)
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Performance & Security Enhancements (SSL, Caching, Firewalls)
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />3 Free Revision
          </Typography>
          <Typography variant="p" fontSize={"15px"}>
            <CheckIcon color="success" sx={{ marginRight: 1 }} />
            Up to 7 Pages
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="p" component={"p"}>
            <Typography fontWeight={"bold"}>Estimated Delivery: </Typography>2 -
            4 weeks
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default StandardComponent;
