import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProfileImage from './common/ProfileImage.common';

function Hello() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <Box flex={1} justifyContent={'center'} alignContent={'center'} bgcolor={'primary.main'}>
            <Stack height={'100vh'} flex={1} direction={'row'} justifyContent={'space-evenly'} alignContent={'center'} >
                <Typography
                    ref={ref}
                    component={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                    alignContent={'center'}
                >
                    <Typography color='text' fontWeight={'bold'} variant='h6' className='uppercase'>
                        Hello, I am a
                    </Typography>
                    <Typography color='text' variant="h3" fontWeight={'bold'} paddingY={1} className='capitalize'>
                        full stack <Typography variant='span' color='secondary'>web developer.</Typography>
                    </Typography>
                    <Typography color='text'>Hi, I am Htoo Antt Ko, a passionated Full Stack Developer based in Myanmar. <br /> Welcome to portfolio world.</Typography>
                </Typography>
                <Typography
                    ref={ref}
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1.2 }}
                    alignContent={'end'}
                >
                    <ProfileImage />
                </Typography>
            </Stack>
        </Box>
    )
}

export default Hello
