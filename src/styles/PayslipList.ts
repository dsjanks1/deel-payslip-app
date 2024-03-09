import { SxProps, Theme } from '@mui/material/styles';


export const boxContainer:SxProps<Theme> = {
    backgroundColor: '#B1D8FC',
    paddingLeft: '25px',
    paddingRight: '25px',
    marginTop: '25px',
    [`@media (max-width: 600px)`]: {
      marginTop: '65px'
    }

  };
export const listContainerStyles:SxProps<Theme> = {
    padding: '20px',
  };
  
  export const paperStyles:SxProps<Theme> = {
    padding: '20px',
    textAlign: 'center',
    marginBottom: '20px',
    borderRadius: '16px',
    backgroundColor: '#007aff'

  };
  
  export const titleStyles:SxProps<Theme> = {
    marginBottom: '10px',
    color: '#fff'

  };
  export const titleHeader: SxProps<Theme> = {
    margin: "-5px",
    fontFamily: "'__BagossCondensedFont_6a34bf', '__BagossCondensedFont_Fallback_6a34bf', Arial, Helvetica, sans-serif",
    fontWeight: 500,
    fontSize: "72px",
    lineHeight: "105%",
    letterSpacing: "-0.78px",
    fontFeatureSettings: "'ss02' on",
    textAlign: "center",
    color: "#1B1B1B",
    fontStyle: "normal",
    textDecoration: "none",
    textWrap: "balance",
    background: `
      linear-gradient(to bottom right, transparent 50%, #FFFBF4 50%), 
      linear-gradient(#FFFBF4, #FFFBF4), 
      linear-gradient(to top left, transparent 50%, #FFFBF4 50%)
    `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center, center, right",
    backgroundSize: "16px 64px, calc(100% - 32px) 64px, 16px 64px",
    ml: '40px',
    mr: '40px'
  };
  
  export const buttonStyles:SxProps<Theme> = {
    marginTop: '10px',
  };
  
  export const loadingContainerStyles:SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };
