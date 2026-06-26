import RubContainer from '../components/RubContainer'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import caesar from '../assets/images/caesar.jpeg'
import Grid from '@mui/material/Grid'

function About() {
  return (
    <RubContainer>
      <Typography variant="h1" gutterBottom align='left'>
        About
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <Box
            component="img"
            src={caesar}
            sx={{ width: 'auto', height: 'auto', maxHeight: 300, borderRadius: 2 }}
            alt="Caesar crossing the Rubicon"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 7, lg: 8 }}>
          <Typography align='left' component="p" sx={{ mb: '0.5rem' }}>
            Rubicon is being held when Vetcon would normally be held.
            The Vetcon hotel is being refurbished, so Vetcon is not being held in 2026, but will be back next year
          </Typography>
          <Typography align='left' component="p" sx={{ mb: '0.5rem' }}>
            More about Vetcon can be found at 
            <Box component="a" href="https://veteran-convention.blogspot.com/" 
            target="_blank" rel="noopener noreferrer"
              sx={{ ml: '0.5rem' }}>Vetcon link</Box>
          </Typography>
          <Typography align='left' component="p" sx={{ mb: '0.5rem' }}>
            Julius Caesar crossed the Rubicon river in January 49 BC at the head of the 13th Legion, declaring "Alea iacta est". Or more appropriately for us "The die is cast". Caesar was not allowed to command an army within Italy proper, and by crossing the river with his forces was defying law and risking death. The crossing precipitated a civil war, which eventually led to Caesar becoming dictator for life.
            <Box component="a"
              href="https://en.wikipedia.org/wiki/Crossing_the_Rubicon" target="_blank"
              rel="noopener noreferrer"
              sx={{ ml: '0.5rem',display: 'inline-flex' }}>
              (Link to Wikipedia article)
            </Box>
          </Typography>
            
            
            <Typography align='left' component="p" sx={{ mb: '0.5rem', mt: '1rem' }}>
              The organizers of Rubicon are not so ambitious, although have often found Caesar to be good role model.
            </Typography>
            <Typography align='left' component="p" sx={{ mb: '0.5rem' }}>
              We want everyone to have a good time with our friends and fellow gamers
            </Typography>
        </Grid>
      </Grid>
      <Typography variant="h2" gutterBottom align='left' sx={{ mt: '1rem' }}>
        Organizers
      </Typography>
      <Typography variant="h3" gutterBottom align='left' sx={{ mt: '0.5rem' }}>Mike O'Brien </Typography>
      <Typography  align='left'>
        Cat herder extraordinaire
      </Typography>
      <Typography variant="h3" gutterBottom align='left' sx={{ mt: '0.5rem' }}>John Webster</Typography>
      <Typography align='left'>
        Web monkey in Chief
      </Typography>


    </RubContainer>
  )
}

export default About
