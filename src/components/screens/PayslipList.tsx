import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Paper, Typography, Button, Box, Skeleton } from '@mui/material';
import { mockPayslips } from '../../data/MockPayslips';
import { boxContainer, listContainerStyles, paperStyles, titleStyles, buttonStyles, titleHeader } from '../../styles/PayslipList';
import { Payslip } from '../../models/Payslip';

const PayslipList = () => {
    const [payslips, setPayslips] = useState<Payslip[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Timeout to simulate skeleton loader awaiting for API request
        setLoading(true);
        setTimeout(() => {
          setPayslips(mockPayslips);
          setLoading(false);
        }, 1000);
      }, []);
    
      if (loading) {
        return (
            <Box sx={boxContainer}>
            <Typography variant="h6" sx={titleHeader}>Your Payslips</Typography>
            <Grid container spacing={2} sx={listContainerStyles}>
              {[...Array(6)].map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper elevation={3} sx={{ ...paperStyles, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Skeleton variant="text" sx={{ ...titleStyles }} />
                    <Skeleton variant="text" />
                    <Skeleton variant="rectangular" height={36} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      }
    
      return (
        <Box sx={boxContainer}>
             <Typography variant="h4" sx={titleHeader}>Your Payslips</Typography>
        <Grid container spacing={2} sx={listContainerStyles}>
          {payslips.map((payslip) => (
            <Grid item xs={12} sm={6} md={4} key={payslip.id}>
              <Paper elevation={3} sx={{ ...paperStyles }}>
                <Typography variant="h6" sx={{ ...titleStyles }}>Payslip Period</Typography>
                <Typography sx={{ ...titleStyles }}>{`${payslip.fromDate} to ${payslip.toDate}`}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  component={RouterLink}
                  to={`/payslip/${payslip.id}`}
                  sx={{ ...buttonStyles, 
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }}}
                >
                  View Details
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
        </Box>
      );
    };
    
    export default PayslipList;