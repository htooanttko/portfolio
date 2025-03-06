import React from 'react'
import { Box, Card, CardContent, IconButton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { services } from '../utils/serviceslist';

function Services() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <Box bgcolor='primary.main'>
            <Stack
                bgcolor={'primary.main'}
                padding={10}
            >
                <Stack
                    ref={ref}
                    component={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                    direction={'row'} alignItems={'center'}>
                    <Typography flex={1} fontWeight={'bold'} color={'text'} variant='h6'>Services</Typography>
                    <Typography flex={3} borderTop={3} color='text'></Typography>
                </Stack>
                <Stack
                    ref={ref}
                    component={motion.div}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                    marginTop={8}
                >
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        loop
                        // speed={1000}
                        // autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={false}
                        pagination={{ clickable: true, el: "#custom-pagination" }}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="w-full"
                    >
                        {services.map((list, index) => (
                            <SwiperSlide key={index}>
                                <Card className="p-4">
                                    <CardContent className="flex flex-col items-center">
                                        <Typography color='primary' variant="h6">Slide {list.title}</Typography>
                                        <Typography color='primary' variant="body2">This is slide {list.description} content.</Typography>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div id="custom-pagination" className="flex justify-center mt-10" ></div>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Services
