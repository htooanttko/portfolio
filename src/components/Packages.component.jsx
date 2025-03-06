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
                <Grid
                    ref={ref}
                    component={motion.div}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                    container
                    spacing={5}
                    marginTop={3}
                    paddingX={10}
                >
                    <Grid item xs={12} md={4} alignContent={'end'}>
                        <Paper className="p-4 mx-5 text-center flex items-center justify-center relative h-[80vh]">
                            <Typography
                                color='text'
                                component="span"
                                position={'absolute'}
                                fontWeight={'bold'}
                                bgcolor={'secondary.main'}
                                paddingX={5}
                                paddingY={1}
                                border={1}
                                borderRadius={1}
                                sx={{
                                    top: "-15px",
                                    // left: "20px",
                                }}
                            >
                                Basic Plan
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} alignContent={'end'}>
                        <Paper className="p-4 mx-5 text-center flex items-center justify-center relative h-[85vh]">
                            <Typography
                                color='text'
                                // variant='h6'
                                component="span"
                                position={'absolute'}
                                fontWeight={'bold'}
                                bgcolor={'secondary.main'}
                                paddingX={5}
                                paddingY={1}
                                border={1}
                                borderRadius={1}
                                sx={{
                                    top: "-15px",
                                    // left: "20px",
                                }}
                            >
                                Standard
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} alignContent={'end'}>
                        <Paper className="p-4 mx-5 text-center flex items-center justify-center relative h-[80vh]">
                            <Typography
                                color='text'
                                // variant='h6'
                                component="span"
                                position={'absolute'}
                                fontWeight={'bold'}
                                bgcolor={'secondary.main'}
                                paddingX={5}
                                paddingY={1}
                                border={1}
                                borderRadius={1}
                                sx={{
                                    top: "-15px",
                                    // left: "20px",
                                }}
                            >
                                Premium
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    )
}

export default Packages
