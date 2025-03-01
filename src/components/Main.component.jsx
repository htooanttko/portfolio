import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar.component'
import Hello from './Hello.component'
import Skills from './Skills.component'
import Footer from './Footer.component'

function Main() {
    return (
        <Box className='bg-primary'>
            <Navbar />
            <Hello />
            <Skills />
            <Footer />
        </Box>
    )
}

export default Main
