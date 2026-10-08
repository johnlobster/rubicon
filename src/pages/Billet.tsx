import RubContainer from '../components/RubContainer'
import Typography from '@mui/material/Typography'
import RubButton from '../components/RubCopyButton'

function Billet() {
  return (
    <RubContainer>
      <Typography variant="h1" align='left' gutterBottom>
        Billet (Accomodation)
      </Typography>
      
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        Based on the collective knowledge of locals, we would advise avoiding any of the various hotels or motels along Auburn Blvd or Madison Avenue. For a couple of more minutes travel, heading east towards Roseville gets you safer and cleaner options within a 20 minute drive. 
      </Typography>


      <Typography align='left' component="p" sx={{ mb: 2 }}>
        <RubButton>Click on the copy button</RubButton> to copy the address to your clipboard. Paste it into your GPS or mapping app for directions.
      </Typography>

      <Typography align='left' variant="h5" sx={{ mb: 2 }}>
        Best Western Plus Orchid Suites
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        $174 with taxes + fees for November 7
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>My friend just stayed here and said it was decent.</Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        Free parking, just off the Douglas exit on North Sunrise, free breakfast although there's a 24 hour IHOP within walking distance.
      </Typography>
      <RubButton>
        130 N Sunrise Ave, Roseville, CA, 95661
      </RubButton>
      
      
      <Typography align='left' variant="h5" sx={{ mb: 2 }}>
        Holiday Inn Express & Suites
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        $185 with taxes + fees for November 7
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>4.5 stars on Google</Typography>

      <RubButton  >
        1398 E. Roseville Pky, Roseville, CA, 95661
      </RubButton>

      <Typography align='left' variant="h5" sx={{ mb: 2 }}>
        Hilton Garden Inn Roseville
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>
        $141 with taxes + fees for November 7
      </Typography>
      <Typography align='left' component="p" sx={{ mb: 2 }}>3 star hotel, 4 stars on Google </Typography>
      <RubButton>
        1951 Taylor Rd, Roseville, CA, 95661
      </RubButton>
    </RubContainer>
  )
}

export default Billet
