import { SxProps, Theme } from '@mui/material/styles';

export const loadingContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#007aff'

};

export const paperStyles: SxProps<Theme> = {
  padding: '20px',
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  backgroundColor: '#007aff'

};

export const titleStyles: SxProps<Theme> = {
  mb: '10px',
  color: '#fff'
};

export const subtitleStyles: SxProps<Theme> = {
  marginBottom: '20px',
  color: '#fff'
};

export const buttonStyles: SxProps<Theme> = {
  mt: 2,
};
export const detailsBox:SxProps<Theme> = {
    backgroundColor: '#B1D8FC',
    mt: 10,
  };
export const backBox: SxProps<Theme> = { 
    position: 'fixed',
    top: 20,
    left: 0,
    zIndex: 1100,
    m: 1,
};


