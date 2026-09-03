import RubContainer from '../components/RubContainer'
import Typography from '@mui/material/Typography'
import RubButton from '../components/RubCopyButton'

function Forage() {
  return (
    <RubContainer>
      <Typography align='left' variant="h1" gutterBottom>
        Forage (Food and drink)
      </Typography>

      <Typography align='left' component="p" sx={{ mb: 2 }}>
        <RubButton>Click on the copy button</RubButton> to copy the address to your clipboard. Paste it into your GPS or mapping app for directions.
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
        10 minutes away on Madison Ave. Try the Chinese food menu. You get two meals worth of food for a reasonable price
      </Typography>
      <RubButton  >
        4321 Madison Ave suite A, Sacramento, CA 95842
      </RubButton>
      <Typography align='left' variant="h5" sx={{ mb: 2 }}>
        M and M Shopping center
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        Strip Mall 5 minutes away. Has lots of different food places (and another gaming store ..). Lumberjack's, Mexican, Noodle House (has been recommended), Thai. 
        There is also a rentable Kitchen, food will vary.
      </Typography>
      <RubButton  >
        5800 Madison Ave, Sacramento, CA 95841
      </RubButton>

      <Typography align='left' variant="h5" sx={{ mb: 2 }}>
        Dos Coyotes Border Cafe
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        FreshMex local chain. John's favorite place. 10 minutes away. There are other food options in this area, including Habit Burger.
      </Typography>
      <RubButton  >
      5450 Sunrise Blvd Ste F, Citrus Heights, CA 95610
      </RubButton>

      <Typography align='left' variant="h4" sx={{ mb: 2 }}>
        Fast food
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        There are fast food places nearby including a Popeye's Chicken, El Pollo Loco, Weinerschneitzel and In and Out Burger. 
        A search will be your friend. 
      </Typography>
      <Typography align='left' variant="h5" sx={{ mb: 2 }}>
        You can get food delivered
      </Typography>
    </RubContainer>
  )
}

export default Forage
