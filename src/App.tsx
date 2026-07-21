import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Billet from './pages/Billet'
import Forage from './pages/Forage'
import Events from './pages/Events'
import Gm from './pages/Gm'
import Contact from './pages/Contact'
import Sale from './pages/Sale'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import RubAppBar from './components/RubAppBar'


const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'Billet', path: '/billet' },
  { label: 'Forage', path: '/forage' },
  { label: 'GM', path: '/gm' },
  { label: 'About', path: '/about'},
  { label: 'Contact', path: '/contact'},
  { label: 'Sale', path: '/sale' },
]

function App() {
  return (
    <div>
    <Container   maxWidth="lg" >
      <RubAppBar navItems={navItems} />
      <Box component="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/billet" element={<Billet />} />
          <Route path="/forage" element={<Forage />} />
          <Route path="/gm" element={<Gm />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Container>
    <Footer />
    </div>

  )
}

export default App
