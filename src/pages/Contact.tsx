import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import RubContainer from '../components/RubContainer'

function Contact() {
  return (
    <RubContainer>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        Have questions about RubiCon? Reach out to us using the details below.
      </Typography>
      <Box component="address" sx={{ fontStyle: 'normal', mt: 2 }}>
        <Typography variant="subtitle1">Event Team</Typography>
        <Typography>Game Kastle Sacramento</Typography>
        <Typography>Email: <a href="mailto:contact@rubicon.example">contact@rubicon.example</a></Typography>
        <Typography>Phone: (555) 123-4567</Typography>
      </Box>
    </RubContainer>
  )
}

export default Contact
