import React from 'react'
import { Paper, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function PremiumComponent() {
    return (
        <Paper className="p-2 py-5 flex justify-center">
            {/* <Typography
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
            </Typography> */}
            <Typography>
                <Typography
                    variant={'h6'}
                    component="p"
                    fontWeight={'bold'}
                    marginBottom={3}
                >
                    Premium
                </Typography>
                <p>Large businesses or serious projects.</p>
                <br />
                <p>Services:</p>
                <ul>
                    <li><CheckIcon color='success' />Everything in Standard</li>
                    <li><CheckIcon color='success' />Load Balancing & Scalability</li>
                    <li><CheckIcon color='success' />Microservices Architecture Setup</li>
                    <li><CheckIcon color='success' />Kubernetes (Future Addition)</li>
                    <li><CheckIcon color='success' />High Availability & Auto Scaling</li>
                    <li><CheckIcon color='success' />Security & Performance Tuning</li>
                    <li><CheckIcon color='success' />24/7 Monitoring & Support</li>
                    <li><CheckIcon color='success' />Premium UI/UX design with Figma (unlimited revisions).</li>
                </ul>
                <br />
                <ul>
                    <li><CloseIcon color='error' />Custom enterprise solutions outside the package.</li>
                </ul>
            </Typography >
        </Paper>
    )
}

export default PremiumComponent
