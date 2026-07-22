import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import RubContainer from '../components/RubContainer'
import glogo from '../assets/images/gklogo.avif'

function Home() {
  const img = <Box component="img" src={glogo} alt="Game Kastle logo" sx={{ height: 56, display: 'block' }} />
  return (
    <>
      <RubContainer>
        <Typography variant="h1" align='left' sx={{ mt: 3, mb: 3 }}>Welcome to Rubicon</Typography>
        <Typography variant="h3" align='left'>What</Typography>
        <Typography align='left'>
          Rubicon is a popup wargame convention focused on miniature games and historical boardgames
        </Typography>

        <Typography variant="h3" align='left' sx={{ mt: '0.5rem' }}>When</Typography>
          <Typography align='left'>
            November 6th-7th 2026. Saturday 10am-9pm. Sunday 10am-6pm. 
          </Typography>
        <Typography variant="h3" align='left' sx={{ mt: '0.5rem' }}>Where</Typography>
          <Typography align='left'>
            <Box component="a" 
            href="https://gamekastle.com/pages/sacramento-ca" target="_blank" 
            rel="noopener noreferrer" 
            sx={{ display: 'inline-flex' }}>
              {img}
            </Box>
          </Typography>
          <Typography align='left'>
            Game Kastle 
            5522 Garfield Ave
            Sacramento, CA 95841
          
          </Typography>

        <Typography variant="h3" align='left' sx={{ mt: '0.5rem'}}>
          Games
        </Typography>
        <Typography align='left'>
          See <a href="/events">Events</a> page. 
          For miniature wargames, there is a focus on multiplayer participation games. For historical boardgames, from 2-8 players.
          If you would like to run a game, please go to the <a href="/gm">GM</a> page to find details and how to submit your game.
        </Typography>

        <Typography variant="h3" align='left' sx={{ mt: '0.5rem' }}>Cost</Typography>
        <Typography align='left'>
          $20 for the weekend, $15 for Saturday, $10 for Sunday. Contact Game Kastle for more information. Limited amount of free tickets for Game Masters.
        </Typography>

        <Typography variant="h3" align='left' sx={{ mt: '0.5rem' }}>Flea market</Typography>
        <Typography align='left'>
          See <a href="/sale">Sale</a> page. Will be on the Sunday. Tables are $10 and available for GMs and weekend pass purchasers 
        </Typography>

      <section id="spacer"></section>
      </RubContainer>
    </>
  )
}

export default Home
