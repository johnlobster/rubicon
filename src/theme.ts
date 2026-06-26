import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B5320', // Military Green
    },
    background: {
      default: '#b2c547', // Military Green, lightened
      paper: '#ede6ce',
    },
    
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Default font sizes for headings h1:6rem, h2:3.75rem, h3:3rem, h4:2.125rem, h5:1.5rem, h6:1.25rem
    h1: {
      fontFamily: "'Australian Flying Corps Stencil', 'Roboto', serif",
      fontSize: '3rem'
    },
    h2: {
      fontFamily: "'Australian Flying Corps Stencil', 'Roboto', serif",
      fontSize: '1.85rem'
    },
    h3: {
      fontFamily: "'Australian Flying Corps Stencil', 'Roboto', serif",
      fontSize: '1.5rem'
    },
  },
})

export default theme
