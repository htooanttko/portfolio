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
                    I'm a proficient backend developer with over 1.5 years of experience. Skilled in PHP, Laravel, Node.js, and React.js, I specialize in building responsive web applications and efficient backend systems. I am a fast learner, quick to adapt, and continually expanding my knowledge in cloud computing and DevOps. My expertise spans backend and frontend technologies, database management, DevOps practices, and UI/UX design. I offer services in full-stack development, server management, cloud computing, CI/CD automation, and SEO optimization to help businesses build and scale their digital presence.
                </Typography>
            </Stack>
        </Box>
    );
}

export default About
