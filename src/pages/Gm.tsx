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
