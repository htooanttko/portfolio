import { Paper, Typography } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function StandardComponent() {
    return (
        <Paper sx={{ border: 2, borderColor: "primary.main" }} className="p-2 py-8 flex justify-center relative">
            <Typography
                color='text'
                component="span"
                position={'absolute'}
                // fontWeight={'bold'}
                bgcolor={'primary.main'}
                borderColor={'primary.main'}
                // paddingY={0.3}
                textAlign={'center'}
                width={'100%'}
                top={0}
            >
                Recommended
            </Typography>
            <Typography>
                <Typography
                    variant={'h6'}
                    component="p"
                    fontWeight={'bold'}
                    marginBottom={3}
                >
                    Standard
                </Typography>
                <p>Growing businesses that need scalability.</p>
                <br />
                <p>Services:</p>
                <ul>
                    <li><CheckIcon color='success' />Full Stack Development (React, Node.js/Express, Laravel)</li>
                    <li><CheckIcon color='success' />Database Setup (MySQL/MongoDB, backups)</li>
                    <li><CheckIcon color='success' />Advanced DevOps (Docker, CI/CD pipelines)</li>
                    <li><CheckIcon color='success' />Cloud Deployment (DigitalOcean, AWS setup)</li>
                    <li><CheckIcon color='success' />Nginx & Server Optimization</li>
                    <li><CheckIcon color='success' />Security Setup (SSL, firewall, basic hardening)</li>
                    <li><CheckIcon color='success' />Custom UI/UX design with Figma (multiple revisions)</li>
                </ul>
                <br />
                <ul>
                    <li><CloseIcon color='error' />Kubernetes</li>
                    <li><CloseIcon color='error' />Advanced cloud networking</li>
                </ul>
            </Typography >
        </Paper>
    )
}

export default StandardComponent
