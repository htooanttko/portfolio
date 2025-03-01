import { Stack, Typography } from '@mui/material'
import React from 'react'

function Hello() {
    return (
        <Stack height={"100vh"} flex={1} justifyContent={'center'} alignContent={'center'} className='bg-primary text-secondary'>
            <Stack flex={1} direction={'row'} justifyContent={'space-evenly'} alignContent={'center'} >
                <Typography alignContent={'center'} >
                    <Typography fontWeight={'bold'} className='uppercase'>
                        Hello, I am a
                    </Typography>
                    <Typography variant="h3" fontWeight={'bold'} paddingY={2} className='capitalize'>
                        full stack web developer.
                    </Typography>
                    <Typography>Hi, I am Htoo Antt Ko, a passionated Full Stack Developer based in Myanmar. <br /> Welcome to portfolio world.</Typography>
                </Typography>
                <Typography alignContent={'center'} >
                    hi
                    \</Typography>
            </Stack>
        </Stack >
    )
}

export default Hello
