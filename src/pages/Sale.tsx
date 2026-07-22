import Typography from '@mui/material/Typography'
import RubContainer from '../components/RubContainer'

function Sale() {
  return (
    <RubContainer>
      <Typography variant="h1" align="left" sx={{ mt: 3, mb: 3 }}>
        Flea market
      </Typography>
      <Typography align="left">
        Flea market will be on the Sunday (times to be finialized). Tables are $10 each, for GMs and weekend pass purchasers
      </Typography>
    </RubContainer>
  )
}

export default Sale
