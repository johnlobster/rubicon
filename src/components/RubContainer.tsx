import type { ReactNode } from 'react'
import Container from '@mui/material/Container'
import type { SxProps, Theme } from '@mui/material/styles'

interface RubContainerProps {
  children: ReactNode
  sx?: SxProps<Theme>
}

export default function RubContainer({ children, sx }: RubContainerProps) {
  return (
    <Container
      sx={{
        backgroundColor: 'background.paper',
        boxShadow: (theme) => theme.shadows[8],
        mt: 4,
        p: 2,
        ...sx,
      }}
    >
      {children}
    </Container>
  )
}
