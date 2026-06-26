import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { SxProps } from '@mui/material'
import RubLogo from './RubLogo'

type NavItem = { label: string; path: string }

export default function RubAppBar({ navItems, sx }: { navItems: NavItem[]; sx?: SxProps }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open)

  return (
    <>
      <AppBar position="static" sx={sx}>
        <Toolbar>
          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
              <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)} aria-label="open navigation">
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                <RubLogo sx={{ height: '4rem' }} link />
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
              <RubLogo sx={{ height: '6rem' }} link />
              <Box>
                {navItems.map((item) => (
                  <Button key={item.path} color="inherit" component={RouterLink} to={item.path}>
                    {item.label}
                  </Button>
                ))}
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 240 }} role="presentation">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
            <IconButton onClick={toggleDrawer(false)} aria-label="close navigation" size="small">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">Menu</Typography>
          </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton component={RouterLink} to={item.path} onClick={toggleDrawer(false)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
