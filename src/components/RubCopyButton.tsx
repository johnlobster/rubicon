import type { ReactNode } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import type { SxProps, Theme } from '@mui/material/styles'

interface RubContainerProps {
  children: ReactNode
  sx?: SxProps<Theme>
}

/* Allows user to copy text to copyboard.  */

export default function RubButton({ children, sx }: RubContainerProps) {
  return (
    <div>
      <Box sx={{ display: 'flex', mb: 1.5, gap: 0.6, maxWidth: '600px' }}>
        <span>
          {children}
        </span>
        <Button
          color="primary"
          variant = 'contained'
          sx={{
            boxShadow: (theme) => theme.shadows[8],
            mt: 0,
            mb: 0,
            p: 0.5,
            ...sx,
          }}
        >
          COPY
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