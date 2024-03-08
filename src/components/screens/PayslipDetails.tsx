import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockPayslips } from '../../data/MockPayslips';
import { Typography, Button, Paper, CircularProgress, Box, IconButton } from '@mui/material';
import { Payslip } from '../../models/Payslip';
import {
  loadingContainerStyles,
  paperStyles,
  titleStyles,
  subtitleStyles,
  buttonStyles,
  detailsBox,
} from '../../styles/PayslipDetails';
import downloadPayslip from '../../utils/DownloadPayslip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PayslipDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [payslip, setPayslip] = useState<Payslip | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to PayslipList
  };
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
    if (payslip && payslip.file) {
        const url = payslip.file; // URL to the payslip file
        const fileName = `Payslip-${payslip.id}.pdf`; // Example filename
        downloadPayslip(url, fileName);
      }
  };

  return (
    <>
      <Box sx={detailsBox}>
        <IconButton onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box sx={{ marginTop: 8 }}> {/* Adjust marginTop accordingly */}
        <Paper sx={paperStyles}>
          <Typography variant="h4" sx={titleStyles}>Payslip Details</Typography>
          <Typography variant="h6" sx={subtitleStyles}>{`ID: ${payslip?.id}`}</Typography>
          <Typography sx={subtitleStyles}>{`Period: ${payslip?.fromDate} to ${payslip?.toDate}`}</Typography>
          <Button variant="contained" onClick={handleDownload} sx={buttonStyles}>Download Payslip</Button>
        </Paper>
      </Box>
    </>
  );
};

export default PayslipDetails;
