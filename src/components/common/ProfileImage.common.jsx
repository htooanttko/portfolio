import { Box } from '@mui/material'
import React from 'react'

function ProfileImage() {
    return (
        <Box
            width={500}
            height={500}
            position={'relative'}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                width={500}
                height={420}
                borderRadius={3}
                position={'absolute'}
                border="5px solid white"
                boxShadow="0 0 0 10px white"
                bgcolor={'secondary.main'}
            ></Box>
            <img className='w-full h-full relative z-10' src="/imgs/me.png" alt="profile" />
        </Box>
    )
}

export default ProfileImage
