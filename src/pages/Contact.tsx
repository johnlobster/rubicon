import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import RubContainer from '../components/RubContainer'

function Contact() {
  return (
    <RubContainer>
      <Typography variant="h4" component="h1" gutterBottom align='left'>
        Contact
      </Typography>
      <Typography component="p" sx={{ mb: 2 }} align='left'>
        Have questions about RubiCon? Use email or contact Game Kastle
      </Typography>
      <Box component="address" sx={{ fontStyle: 'normal', mt: 2 }} >
        <Typography>Game Kastle Sacramento Phone: (916) 891 5233</Typography>
        <Typography>Organizer Email: <a href="mailto:RubiconWargameSac@gmail.com">RubiconWargameSac@gmail.com</a></Typography>
        <Typography></Typography>
      </Box>
    </RubContainer>
  )
}

export default Contact
