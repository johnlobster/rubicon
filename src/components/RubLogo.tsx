import Box from '@mui/material/Box'
import { Link as RouterLink } from 'react-router-dom'
import { logo } from '../assets/images'
import type { SxProps } from '@mui/material'
import type { Theme } from '@mui/material/styles'

type RubLogoProps = {
  sx?: SxProps<Theme>
  link?: boolean
  to?: string
  alt?: string
}

export default function RubLogo({ sx, link = false, to = '/', alt = 'RubiCon logo' }: RubLogoProps) {
  const img = <Box component="img" src={logo} alt={alt} sx={{ height: 56, display: 'block', ...((sx as any) || {}) }} />

  if (link) {
    return (
      <Box component={RouterLink} to={to} sx={{ display: 'inline-flex' }}>
        {img}
      </Box>
    )
  }

  return img
}
