import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import rsvpSubmit from '../functions/rsvp.tsx'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions  from '@mui/material/DialogActions'

import { useState, useRef } from 'react';

type RSVPDialogProps = {
  setOpenFunction: (open: boolean) => void;
};

// Dialog component for RSVP on Home page. Note that this is enabled by a button, but has it's own open/closed state.
// could improve this by passing the state change functions into the RSVPDialog component
function RSVPDialog(props: RSVPDialogProps) {
  const [open, setOpen] = useState(true)

  const hideDialog = () => {
    setOpen(false)
  }

  const formRef = useRef<HTMLFormElement | null>(null);

  const clearForm = () => {
    formRef.current?.reset();
  };
  return (
    <>
      {open && (
        <Dialog open={open}>
          <DialogTitle>
            RSVP for Rubicon
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" gutterBottom align="left">
              Sign up for Rubicon - your name and any comment you might want to make. We do not publish names or comments
            </Typography>
            <Box
              component="form"
              ref={formRef}
              noValidate
              autoComplete="off"
              onKeyDown={(event) => {
                const target = event.target as HTMLElement | null;
                const tagName = target?.tagName;

                if (event.key === 'Enter' && (tagName === 'INPUT' || tagName === 'SELECT')) {
                  event.preventDefault();
                }
              }}
              onSubmit={async (e) => {
                await rsvpSubmit(e);

              }}
            >
              <TextField
                name="name" label="Name" variant="outlined"
                required
                fullWidth
                sx={{ mt: 3, mb: 3 }}
              />
              <TextField
                name="comment" label="Comment (Optional)" variant="outlined"
                fullWidth
                multiline
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button color='primary' variant="contained" >
              RSVP
            </Button>
            <Button color='primary' variant='outlined' onClick={clearForm}>
              Reset form
            </Button>
            <Button color='primary' onClick={ () => {
              hideDialog()
              props.setOpenFunction(false)
            }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  )
}

export default RSVPDialog;