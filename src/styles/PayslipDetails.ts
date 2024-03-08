import { SxProps, Theme } from '@mui/material/styles';

export const loadingContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

export const paperStyles: SxProps<Theme> = {
  padding: '20px',
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const titleStyles: SxProps<Theme> = {
  marginBottom: '10px',
};

export const subtitleStyles: SxProps<Theme> = {
  marginBottom: '20px',
};

export const buttonStyles: SxProps<Theme> = {
  mt: 2, // margin top with the spacing value of 2
};
