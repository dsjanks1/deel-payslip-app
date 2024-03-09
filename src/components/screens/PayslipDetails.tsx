import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockPayslips } from '../../data/MockPayslips';
import { Typography, Button, Paper, Box, IconButton, Skeleton } from '@mui/material';
import { Payslip } from '../../models/Payslip';
import {
  paperStyles,
  titleStyles,
  subtitleStyles,
  buttonStyles,
  detailsBox,
  backBox
  
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
    // Timeout to simulate skeleton loader awaiting for API request
    const timer = setTimeout(() => {
      const foundPayslip = mockPayslips.find((p) => p.id === id);
      setPayslip(foundPayslip || null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
        <Paper sx={paperStyles}>
        <Skeleton variant="rectangular" width="100%" height={118} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" width="100%" height={56} />
      </Paper>
    )
  }

  if (!payslip) {
    return <Typography variant="body1">Payslip not found.</Typography>;
  }

  const handleDownload = () => {
    console.log('Downloading...', payslip.file);
    if (payslip && payslip.file) {
        const url = payslip.file; // URL to the payslip file
        const fileName = `Payslip-${payslip.id}.pdf`; 
        downloadPayslip(url, fileName);
      }
  };

  return (
    <>
    <Box sx={{display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'}}>
      <Box sx={backBox}>
        <IconButton size="large" color="secondary"onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
      </Box>

      <Box sx={{...detailsBox }}> 
        <Paper elevation={3} sx={paperStyles}>
          <Typography variant="h4" sx={titleStyles}>Payslip Details</Typography>
          <Typography variant="h6" sx={subtitleStyles}>{`ID: ${payslip?.id}`}</Typography>
          <Typography sx={subtitleStyles}>{`Period: ${payslip?.fromDate} to ${payslip?.toDate}`}</Typography>
          <Button color="secondary" variant="contained" onClick={handleDownload} sx={{ ...buttonStyles, 
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }}}>Download Payslip</Button>
        </Paper>
      </Box>
    </Box>
    </>
  );
};

export default PayslipDetails;
