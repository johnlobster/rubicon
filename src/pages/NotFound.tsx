import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Link as RouterLink } from 'react-router-dom'
import RubContainer from '../components/RubContainer'
import { dog as dogImage } from '../assets/images'

function NotFound() {
  return (
    <RubContainer>
      <Typography variant="h3" component="h1" gutterBottom>
        404 — Page Not Found
      </Typography>
      <Box
        component="img"
        src={dogImage}
        alt="Dog looking for the missing page"
        sx={{ width: '100%', maxWidth: 400, borderRadius: 2, mx: 'auto', mb: 4 ,height: '80%'}}
      />
      <Typography component="p" sx={{ mb: 4 }}>
        Hey soldier, looks like you got a little lost on this here web site. Maybe check your compass next time ?
      </Typography>
      <Button variant="contained" component={RouterLink} to="/">
        Back to Base (Home Page) 
      </Button>
    </RubContainer>
  )
}

export default NotFound
