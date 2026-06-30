import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import RubContainer from '../components/RubContainer'
import glogo from '../assets/images/gklogo.avif'

function Home() {
  const img = <Box component="img" src={glogo} alt="Game Kastle logo" sx={{ height: 56, display: 'block' }} />
  return (
    <>
      <RubContainer>
        <Typography variant="h1" align='left' sx={{ mt: 3, mb: 3 }}>Welcome to RubiCon</Typography>
        <Typography variant="h3" align='left'>What</Typography>
        <Typography align='left'>
          Rubicon is a one off conference that replaces VetCon. VetCon (in Auburn, CA) is not being held this year as the host hotel is being refurbished
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
          See <a href="/events">Events</a> page: Miniature wargaming, board wargames. 
          Note that we are not expecting to run tournaments, due to space limitations. Most games are multi player.
          If you would like to run a game, please go to the <a href="/gm">GM</a> page to find details and how to submit your game.
        </Typography>
        <Typography variant="h3" align='left' sx={{ mt: '0.5rem' }}>Cost</Typography>
        <Typography align='left'>
          $25 for the weekend, $15 for Saturday, $10 for Sunday. Contact Game Kastle for more information. Limited amount of free tickets for Game Masters.
        </Typography>
      <section id="spacer"></section>
      </RubContainer>
    </>
  )
}

export default Home
