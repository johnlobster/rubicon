import type { ReactNode } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import type { SxProps, Theme } from '@mui/material/styles'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface RubContainerProps {
  children: ReactNode
  sx?: SxProps<Theme>
}

/* Allows user to copy text to copyboard.  */

export default function RubButton({ children, sx }: RubContainerProps) {
  return (
    <div>
      <Box sx={{ display: 'flex', mb: 1.5, gap: 0.6, maxWidth: '600px' }}>
        <span style={{ paddingTop: '0.5rem' }}>
          {children}
        </span>
        <Button
          color="primary"
          variant = 'contained'
          sx={{
            boxShadow: (theme) => theme.shadows[8],
            mt: 0,
            mb: 0,
            
            ...sx,
          }}
        >
          <ContentCopyIcon style={{ paddingRight: '0.5rem' }} />  COPY
        </Button> 
      </Box>
    </div>
  )
}

/*
<RubButton sx={{ mb: 2 }} >
  130 N Sunrise Ave, Roseville, CA, 95661
</RubButton>
*/