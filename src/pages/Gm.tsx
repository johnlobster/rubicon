import gameSubmit from '../functions/gameSubmit';
import RubContainer from '../components/RubContainer'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

//
// copied from Google Material UI docs for box shadow
// 0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)!important
const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      boxShadow: '0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)',
      borderColor: 'primary.main',
    },
  },
};


// copied from Google Material UI docs for box shadow
// 0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)!important

// function testHandleSubmit(React.SubmitForm) {
//   event.preventDefault();

//   const form = event.currentTarget;
//   const values = Array.from(form.querySelectorAll('input, textarea, select'))
//     .filter((element) => element.type !== 'submit' && element.type !== 'button')
//     .reduce((result, element) => {
//       const key = element.name || element.id || 'unknown';
//       return {
//         ...result,
//         [key]: element.value,
//       };
//     }, {});

//   console.log('Form inputs:', values);
// }

function Gm() {
  return (
    <RubContainer>
      <Typography variant="h1" gutterBottom align="left">
        Game Master
      </Typography>
      
      <Typography variant="h3" gutterBottom align="left">
        How to submit a game
      </Typography>
      
      <Typography variant="h5" align="left">Miniatures</Typography>

      <Typography align="left">
        All tables are 6'x60". All game submissions need to be based on how many of those you need.
      </Typography>
      <Typography align="left">
        All games should be:
      
      <ul>
        <li> Multiplayer unless they fit on a 2'x2' space</li>
        <li> Fit on a 6'x60" table with a minimum of 4 players. 
          Larger table sizes need to accommodate more players. 
          For example, a 12'x 60" table should be able to accommodate 8 players.
        </li>
        <li>Games should be 4 hours, excluding setup and takedown, but can go longer based on a review of the submission</li>
        <li>Any period of game is acceptable including Historical, Fantasy, Science Fiction, and post-Apocalyptic. Examples include; De Bellis Antiquitatis, Pillage, SAGA, Rank and File, Fistful of Lead, Sharp Practice, Bolt Action, and Gaslands, but virtually any game is acceptable.</li>
      </ul>

      </Typography>

      <Typography align="left">
        If your game doesn't fit the exact criteria, send us an email to <a href="mailto:RubiconWargameSac@gmail.com">RubiconWargameSac@gmail.com</a>
      </Typography>

      <Typography variant="h5" align="left">Historical Boardgames</Typography>
      
      <Typography align="left">Game tables are either 6'x30" or 6'x60"</Typography>
      
      <Typography align="left">
      Games should be historical only. Examples include; Here I Stand, Combat Commander, Crisis 1914, Versailles, Down in Flames.
      There is no maximum number of hours a game can run, but the overall minimum for a GM pass is 4 hours of games. Multiple day games are allowed.
      </Typography>
      <Typography align="left">
      If your game doesn't fit the exact criteria, send us an email to <a href="mailto:RubiconWargameSac@gmail.com">RubiconWargameSac@gmail.com</a>
      </Typography>

      <Typography align="left" component="p" sx={{ mb: '1rem' }}>
        Game Master resources and information.
      </Typography>
      <Typography variant="h3" gutterBottom align="left">
        Game submission form
      </Typography>
      <Typography align="left" component="p" sx={{ mb: '1rem' }}>
        This form isn't yet live, but it will be used to submit games for the event.  
      </Typography>

      <Paper sx={{ boxShadow: 6, mt: 2 }}>
        <Box 
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={e => gameSubmit(e, 'console')}
        >
        <Grid container spacing={2} sx={{ p: 2, justifyContent: 'flex-start' }}>
          <Grid size={{ xs: 12, sm: 6, lg:4}} >
            <TextField
              id="gm" label="GM name (Required)" variant="outlined"
              sx={textFieldSx}
              required
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} >
            <TextField id="gmEmail" label="GM email" variant="outlined" sx={textFieldSx} fullWidth
            />
            </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} >
            <TextField id="gmPhone" label="GM phone contact" variant="outlined" sx={textFieldSx} fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ p: 2, justifyContent: 'flex-start' }}>
          <Grid size={{ xs: 12, sm: 3}} >
            <TextField
              id="day" label="Day (Required)" variant="outlined" sx={textFieldSx} fullWidth
              required
              select
              defaultValue="Saturday"
            >
              {['Saturday', 'Sunday'].map((option) => (
                <MenuItem key={option} value={option.toLowerCase()}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, sm: 3}} >
            <TextField
              id="startTime" label="Start Time" variant="outlined" sx={textFieldSx} fullWidth
            />
            </Grid>
          <Grid size={{ xs: 12, sm: 3}} >
            <TextField
              id="duration" label="Duration hours (Required)" variant="outlined" sx={textFieldSx} fullWidth
              required
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 3}} >
            <TextField
              id="tables" label="Number of Tables (Required)" variant="outlined" sx={textFieldSx} fullWidth
              required
            />
          </Grid>
        </Grid>
        
        <Grid container spacing={2} sx={{ p: 2, justifyContent: 'flex-start' }}>
          <Grid size={{ xs: 12, sm: 4, lg: 4 }} sx={{ justifyContent: 'right' }}>
            <TextField
              id="genre" label="Genre/Scale" variant="outlined" sx={textFieldSx} fullWidth 
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, lg: 4 }} >
            <TextField
              id="players" label="Number of Players (Required)" variant="outlined" sx={textFieldSx} fullWidth
              required
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, lg: 4 }} >
            <TextField
              id="type" label="Type  (required)" variant="outlined" sx={textFieldSx}
              required
              select
              fullWidth
            >
              {['Board', 'Miniatures'].map((option) => (
                <MenuItem key={option} value={option.toLowerCase()}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Box sx={{ p: 2, textAlign: 'left' }}>
        <TextField
          id="title" label="Game Title (Required)" variant="outlined"
          sx={textFieldSx}
          required
          fullWidth
        />
        </Box>
        <Box sx={{ p: 2, textAlign: 'left' }}>
        <TextField
          id="description" label="Description (Required)" variant="outlined"
          sx={textFieldSx}
          required
          fullWidth
          multiline
        />
        </Box>
        <Box sx={{ p: 2, textAlign: 'left' }}>
        <TextField
          id="rules" label="Rules" variant="outlined"
          sx={textFieldSx}
          fullWidth
          multiline
        />
        </Box>
        <Button 
          type="submit"
          variant="contained" 
          color="primary" 
          sx={{ m: 2 }} 
        >
          Submit
        </Button>
        </Box>
      </Paper>
    </RubContainer>
  )
}

export default Gm
