import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Paper, Typography, Button, CircularProgress, Box } from '@mui/material';
import { mockPayslips } from '../../data/MockPayslips';
import { listContainerStyles, paperStyles, titleStyles, buttonStyles, loadingContainerStyles } from '../../styles/PayslipList';
import { Payslip } from '../../models/Payslip';

const PayslipList = () => {
    const [payslips, setPayslips] = useState<Payslip[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setPayslips(mockPayslips);
          setLoading(false);
        }, 1000);
      }, []);
    
      if (loading) {
        return (
          <Box sx={loadingContainerStyles}>
            <CircularProgress />
          </Box>
        );
      }
    
      return (
        <Grid container spacing={2} sx={listContainerStyles}>
          {payslips.map((payslip) => (
            <Grid item xs={12} sm={6} md={4} key={payslip.id}>
              <Paper elevation={3} sx={{ ...paperStyles }}>
                <Typography variant="h6" sx={{ ...titleStyles }}>Payslip Period</Typography>
                <Typography>{`${payslip.fromDate} to ${payslip.toDate}`}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to={`/payslip/${payslip.id}`}
                  sx={{ ...buttonStyles }}
                >
                  View Details
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      );
    };
    
    export default PayslipList;