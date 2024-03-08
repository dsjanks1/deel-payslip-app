import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockPayslips } from '../../data/MockPayslips';
import { Typography, Button, Paper, CircularProgress, Box } from '@mui/material';
import { Payslip } from '../../models/Payslip';
import {
  loadingContainerStyles,
  paperStyles,
  titleStyles,
  subtitleStyles,
  buttonStyles,
} from '../../styles/PayslipDetails';

const PayslipDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [payslip, setPayslip] = useState<Payslip | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundPayslip = mockPayslips.find((p) => p.id === id);
      setPayslip(foundPayslip || null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <Box sx={loadingContainerStyles}><CircularProgress /></Box>;
  }

  if (!payslip) {
    return <Typography variant="body1">Payslip not found.</Typography>;
  }

  const handleDownload = () => {
    console.log('Downloading...', payslip.file);
    //TODO: download logic
  };

  return (
    <Paper sx={paperStyles}>
      <Typography variant="h4" sx={titleStyles}>Payslip Details</Typography>
      <Typography variant="h6" sx={subtitleStyles}>{`ID: ${payslip.id}`}</Typography>
      <Typography sx={subtitleStyles}>{`Period: ${payslip.fromDate} to ${payslip.toDate}`}</Typography>
      <Button variant="contained" onClick={handleDownload} sx={buttonStyles}>Download Payslip</Button>
    </Paper>
  );
};

export default PayslipDetails;
