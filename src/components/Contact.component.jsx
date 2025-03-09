import React, { useState } from 'react'
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
    const [copied, setCopied] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
    });


    const handleCopy = () => {
        navigator.clipboard.writeText('kohtooantt@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };


    return (
        <Box bgcolor='primary.main' >
            <Stack
                bgcolor={'primary.main'}
                padding={{ md: 10, xs: 5 }}
            >
                <Stack
                    ref={ref}
                    component={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                    direction={'row'} alignItems={'center'}>
                    <Typography flex={1} fontWeight={'bold'} color={'text'} variant='h6'>Contact</Typography>
                    <Typography flex={3} borderTop={3} color='text'></Typography>
                </Stack>
                <Typography
                    ref={ref}
                    component={motion.div}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                    color='text'
                    marginTop={{ md: 5, xs: 4 }}
                    paddingX={{ md: 10, xs: 1 }}
                >
                    <Card>
                        <CardContent>
                            <Stack textAlign={'center'}>
                                {copied && (
                                    <Typography
                                        variant="span"
                                        fontSize={'small'}
                                        bgcolor={'grey'}
                                        color='primary'
                                        paddingX={1}
                                        borderRadius={2}
                                        className="absolute opacity-60 bottom-0"
                                    >
                                        Copied!
                                    </Typography>
                                )}
                                <Typography
                                    color='primary'
                                    variant="body1"
                                    fontWeight={'bold'}
                                    className="cursor-pointer"
                                    onClick={handleCopy}
                                    alignContent={'center'}
                                >
                                    Gmail - kohtooantt@gmail.com
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>

                </Typography>
            </Stack>
        </Box>
    )
}

export default Contact
