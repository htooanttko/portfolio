import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <Box bgcolor='secondary.main' >
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
                    <Typography flex={1} fontWeight={'bold'} color={'text'} variant='h6'>About</Typography>
                    <Typography flex={3} borderTop={3} color='text'></Typography>
                </Stack>
                <Typography
                    ref={ref}
                    component={motion.div}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                    color='text' marginTop={5}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla neque quidem. Debitis animi iure mollitia vero, ea atque deleniti soluta iste necessitatibus quas provident neque adipisci blanditiis nobis aut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, hic? Natus totam at et voluptates. Consequatur fugit sed commodi minus fugiat, beatae, eaque voluptatum facere molestiae aspernatur, laborum quisquam nemo.
                </Typography>
            </Stack>
        </Box>
    );
}

export default About
