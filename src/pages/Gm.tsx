import RubContainer from '../components/RubContainer'
import Typography from '@mui/material/Typography'

function Gm() {
  return (
    <RubContainer>
      <Typography variant="h1" gutterBottom align="left">
        Game Master
      </Typography>
      <Typography variant="h3" gutterBottom align="left">
        How to submit a game
      </Typography>
      <Typography align="left" component="p" sx={{ mb: '1rem' }}>
        Game Master resources and information.
      </Typography>
    </RubContainer>
  )
}

export default Gm
