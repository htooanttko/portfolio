import React from 'react'
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Packages() {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    return (
        <Box bgcolor='secondary.main'>
            <Stack
                bgcolor={'secondary.main'}
                padding={10}
            >
                <Stack
                    ref={ref}
                    component={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                    direction={'row'} alignItems={'center'}>
                    <Typography flex={3} borderTop={3} color='text'></Typography>
                    <Typography flex={1} fontWeight={'bold'} textAlign={'end'} color={'text'} variant='h6'>Packages</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Packages
