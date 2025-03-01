import React from 'react'
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <Box
            ref={ref}
            height={"100vh"}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1 }}
            sx={{
                bgcolor: "secondary.main",
                p: 4,
                mt: 5,
                color: "white",
                textAlign: "center",
                borderRadius: 2,
            }}
        >
            This MUI Box fades in on scroll
        </Box>
    );
}

export default Skills
