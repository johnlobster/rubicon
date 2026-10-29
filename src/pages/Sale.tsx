import Typography from '@mui/material/Typography'
import RubContainer from '../components/RubContainer'
import Box from '@mui/material/Box'
import glogo from '../assets/images/gklogo.avif'


function Sale() {
  const img = <Box component="img" src={glogo} alt="Game Kastle logo" sx={{ height: 56, display: 'block' }} />

  return (
    <RubContainer>
      <Typography variant="h1" align="left" sx={{ mt: 3, mb: 3 }}>
        Flea market
      </Typography>
      <Typography align="left">
        Flea market will be Saturday and Sunday from 4pm to 6pm. 5 tables will be available unless we have space for more. 
        The tables are $10 each, for GMs and weekend pass purchasers. Tables are 6' by 30"
      </Typography>

      <Typography align='left' sx={{ mt: 3, mb: 3 }}>
          Contact the store to pay for your table

        </Typography>
        <Typography align='left'>
        <Box component="a"
          href="https://gamekastle.com/pages/sacramento-ca" target="_blank"
          rel="noopener noreferrer"
          sx={{ display: 'inline-flex' }}>
          {img}
        </Box>
      </Typography>
    </RubContainer>
  )
}

export default Sale
