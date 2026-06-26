import RubContainer from '../components/RubContainer'
import Typography from '@mui/material/Typography'

function Forage() {
  return (
    <RubContainer>
      <Typography variant="h1" gutterBottom>
        Forage
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        Our scouts are active searching for good places to eat in the area. The usual Fast Food suspects can be found by a web search
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        Return to this page for more information
      </Typography>
    </RubContainer>
  )
}

export default Forage
