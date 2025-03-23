import { Box, Stack } from "@mui/material";
import React from "react";

function Icons({ url, type, invert = "" }) {
  return (
    <Box sx={{ height: "100%", width: "100%", filter: invert ? invert : "" }}>
      <img src={`/portfolio/imgs/${type}/${url}`} alt={url} />
    </Box>
  );
}

export default Icons;
