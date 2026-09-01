import RubContainer from '../components/RubContainer'
import Typography from '@mui/material/Typography'
import RubButton from '../components/RubCopyButton'

function Forage() {
  return (
    <RubContainer>
      <Typography align='left' variant="h1" gutterBottom>
        Forage (food and drink)
      </Typography>

      <Typography align='left' variant="h4" sx={{ mb: 2 }}>
        Coffee
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        There is a Starbucks across the street, and a Dutch Bros within 5 minutes on Auburn Blvd
      </Typography>

      <Typography align='left' variant="h4" sx={{ mb: 2 }}>
        Restaurants
      </Typography>
      <Typography align='left' variant="h5" sx={{ mb: 2 }}>
        Silver Garden & Mongolian BBQ  
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        10 minutes away on Madison Ave. Try the Chinese food menu. You get two meals worth of food for a reasonable price.
        4321 Madison Ave suite A, Sacramento, CA 95842
      </Typography>
      <RubButton sx={{ mb: 2 }} >
        4321 Madison Ave suite A, Sacramento, CA 95842
      </RubButton>
      <Typography align='left' variant="h4" sx={{ mb: 2 }}>
        Fast food
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        There are fast food places nearby including a Popeye's Chicken, El Pollo Loco, and Weinerschneitzel.You can get food delivered. A search will be your friend
      </Typography>
    </RubContainer>
  )
}

export default Forage
