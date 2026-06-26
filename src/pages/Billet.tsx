import RubContainer from '../components/RubContainer'
import Typography from '@mui/material/Typography'

function Billet() {
  return (
    <RubContainer>
      <Typography variant="h1"  gutterBottom>
        Billet
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        Our scouts are active searching for discounted places to stay in the area
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        Return to this page for more information
      </Typography>
      
    </RubContainer>
  )
}

export default Billet
