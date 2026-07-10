import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import { logo, caesar } from '../assets/images'

export default function Footer() {
  return (
    <Container
      sx={{
        backgroundColor: 'primary.main',
        mt: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'center',
      }}
    >
      <Box sx={{ mb: 2, display: 'inline-flex', gap: 2, alignItems: 'center' }}>
        <Box component={RouterLink} to="/" >
          <Box component="img" src={logo} alt="RubiCon logo" sx={{ height: '3rem' }} />
          <Typography variant="body2" sx={{ color: 'white'}} >
            © {new Date().getFullYear()} Rubicon. All rights reserved.
          </Typography>
        </Box>
        <Box component="img" src={caesar} alt="Caesar" sx={{ height: '5rem', mt: 1 }} />
      </Box>
      
    </Container>
  )
}
