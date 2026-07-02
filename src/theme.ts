import { createTheme } from '@mui/material/styles'

// Typography constants
export const ratio = 4 / 3;
export const rhythm = 1.43; // golden ratio as used in Bootstrap

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

    // breakpoints

    // sm: 600
    // md: 960
    // lg: 1280
    // xl: 1920

    // in the fontSize settings, mobile is first (smaller) 
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Default font sizes for headings h1:6rem, h2:3.75rem, h3:3rem, h4:2.125rem, h5:1.5rem, h6:1.25rem
    
    h1: {
      fontFamily: "'Australian Flying Corps Stencil', 'Roboto', serif",
      fontSize: `${3}rem`, 
      lineHeight: `${ 3 * rhythm}rem`,
      '@media screen and (min-width:600px)': {
        fontSize: `${4}rem`,
        lineHeight: `${4 * rhythm}rem`,
      },
      color: '#4B5320', // Military Green
        
    },
    h2: {
          fontFamily: "'Australian Flying Corps Stencil', 'Roboto', serif",
          fontSize: `${2.5}rem`,
          lineHeight: `${2.5 * rhythm}rem`,
          '@media screen and (min-width:600px)': {
            fontSize: `${3 * rhythm}rem`,
            lineHeight: `${3 * rhythm}rem`,
          },
        
        color: '#4B5320', // Military Green  
        },
    
    h3: {
      fontFamily: "'Australian Flying Corps Stencil', 'Roboto', serif",
      fontSize: `${2}rem`,
      lineHeight: `${(2 * rhythm)}rem`,
      '@media screen and (min-width:600px)': {
        fontSize: `${(3)}rem`,
        lineHeight: `${(3 * rhythm)}rem`,
        
      },
    },
    h4: {
      fontFamily: "'Australian Flying Corps Stencil', 'Roboto', serif",
      fontSize: `${1.7}rem`,
      lineHeight: `${(1.7 * rhythm)}rem`,
      '@media screen and (min-width:600px)': {
        fontSize: `${(2)}rem`,
        lineHeight: `${(2 * rhythm)}rem`,

      },
    },
    h5: {
      fontWeight: 'bold',
      fontSize: `${1.25}rem`,
      lineHeight: `${(1.25 * rhythm)}rem`,
      '@media screen and (min-width:600px)': {
        fontSize: `${(1.75)}rem`,
        lineHeight: `${(1.75 * rhythm)}rem`,

      },
    },
    h6: {
      fontWeight: 'bold',
      fontSize: `${1}rem`,
      lineHeight: `${(1 * rhythm)}rem`,
      '@media screen and (min-width:600px)': {
        fontSize: `${(1.3)}rem`,
        lineHeight: `${(1.3 * rhythm)}rem`,

      },
    },
    

  },
})

export default theme
