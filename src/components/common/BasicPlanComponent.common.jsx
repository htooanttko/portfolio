import { Paper, Typography } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function BasicPlanComponent() {
    return (
        <Paper className="p-2 py-5 flex justify-center ">
            <Typography>
                <Typography
                    variant={'h6'}
                    component="p"
                    fontWeight={'bold'}
                    marginBottom={3}

                >
                    Basic Plan
                </Typography>
                <p>Small businesses, individuals, or startups needing basic setup.</p>
                <br />
                <p>Services:</p>
                <ul>
                    <li><CheckIcon color='success' />Basic Frontend</li>
                    <li><CheckIcon color='success' />Basic Backend (Node.js/Express or PHP/Laravel)</li>
                    <li><CheckIcon color='success' />Hosting setup (Deploy on DigitalOcean, Vercel, or shared hosting)</li>
                    <li><CheckIcon color='success' />Basic CI/CD (Automated deployment setup)</li>
                    <li><CheckIcon color='success' />Linux server setup (Basic Nginx configuration)</li>
                    <li><CheckIcon color='success' />Basic UI/UX design using Figma</li>
                </ul>
                <br />
                <ul>
                    <li><CloseIcon color='error' />Kubernetes</li>
                    <li><CloseIcon color='error' />Advanced DevOps</li>
                    <li><CloseIcon color='error' />In-depth cloud setup</li>
                    <li><CloseIcon color='error' />Security hardening</li>
                </ul>
            </Typography >
        </Paper >
    )
}

export default BasicPlanComponent
