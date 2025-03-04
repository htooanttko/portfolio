import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { navItems } from '../utils/navItems'

function Footer() {
    return (
        <Stack component='footer' textAlign={'center'} alignItems={'center'} bgcolor={'secondary.main'} paddingTop={3} paddingBottom={2}>
            <Typography variant='p' color='text' fontWeight={'bold'} fontSize={"small"}>&copy; 2025 Htoo Antt Ko. Built with ❤️ using React.</Typography>
            <Box>
                {navItems.map((item) => (
                    <Button key={item}>
                        <Typography color='text' fontSize={"small"} fontWeight={'bold'} className='capitalize'>
                            {item}
                        </Typography>
                    </Button>
                ))}
            </Box>
        </Stack>
    )
}

export default Footer
