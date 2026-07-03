import React from 'react'
import { useMemo, useState } from 'react'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import RubContainer from '../components/RubContainer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import eventData from '../assets/data/eventdata.tsx'

// function to format time from 24 hour expressed as number to string
function formatTime(time: number): string  {
  if (time < 1200 ) {
  return (time/100).toString() + ' am'
  } else {
    return ((time-1200)/100).toString() + ' pm'
  }
}

// need a specific card component so that can have local state for accordion
function EventCard( {event}: {event: typeof eventData[0]} ) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ boxShadow: 6, mb: 1 }}>
      <CardContent sx={{ pb: 0 }}>
        <Typography variant="h5" align='left'>
          {event.title}
        </Typography>
        <Typography variant="body2" align='left'>
          Genre: {event.genre} ({event.type})
        </Typography>
        <Typography variant="body2" align='left'>
          Starts: {event.day.charAt(0).toUpperCase() + event.day.slice(1)} at {formatTime(event.startTime)} for {event.duration} hours
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleExpandClick} sx={{ pb: 0, pt: 0 }}>
          <Typography variant="h6" align='left'>
            More information
          </Typography>
          <ExpandMoreIcon
            aria-expanded={expanded}
            aria-label="show more"
          />

        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" align='left' sx={{ mb: 1 }}>
            {event.description}
          </Typography>
          <Typography variant="body2" align='left' sx={{ mb: 1 }}>
            Rules: {event.rules}
          </Typography>
          <Typography variant="body2" align='left'>
            {event.players} players, {event.tables} tables
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

// exported component for this page
function Events() {
  const [selectedDay, setSelectedDay] = useState<'weekend' | 'saturday' | 'sunday'>('weekend')
  const [selectedType, setSelectedType] = useState<'all' | 'board' | 'miniatures'>('all')

  const filteredEvents = useMemo(() => {
    const filtered = eventData
      .filter((item) => selectedDay === 'weekend' ? true : item.day.toLowerCase() === selectedDay)
      .filter((item) => selectedType === 'all' ? true : item.type === selectedType)

    const grouped = ['saturday', 'sunday']
      .map((day) => ({ day, events: filtered.filter((item) => item.day.toLowerCase() === day) }))
      .filter((group) => group.events.length > 0)
    return grouped
  }, [selectedDay, selectedType])

  

  return (
    <RubContainer>
      <Typography variant="h1" gutterBottom align="left">
        Events
      </Typography>

      <Typography  align="left"sx={{ mb: 2 }}>
        Use the following buttons to select events by day and category
      </Typography>

      <Box sx={{ display: 'flex', mb:1.5, gap:0.6, maxWidth: '600px'}}>
        {['weekend', 'saturday', 'sunday'].map((value) => {
          const label = value === 'weekend' ? 'Weekend' : value[0].toUpperCase() + value.slice(1)
          const isSelected = selectedDay === value
          return (
            <Button
              key={value}
              variant={isSelected ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setSelectedDay(value as 'weekend' | 'saturday' | 'sunday')}
            >
              {label}
            </Button>
          )
        })}
      </Box>

      <Box sx={{ display: 'flex', mb: 1.5, gap: 0.6, maxWidth: '600px' }}>
        {[
          { key: 'all', label: 'All games' },
          { key: 'board', label: 'Board games' },
          { key: 'miniatures', label: 'Miniatures' },
        ].map((opt) => {
          const isSelected = selectedType === (opt.key as 'all' | 'board' | 'miniatures')
          return (
            <Button
              key={opt.key}
              variant={isSelected ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setSelectedType(opt.key as 'all' | 'board' | 'miniatures')}
            >
              {opt.label}
            </Button>
          )
        })}
      </Box>
      <List>
        {filteredEvents.map((ev) => (
          <div key={ev.day}>
            
            <Typography variant="h5" align='left'>
              {ev.day.charAt(0).toUpperCase() + ev.day.slice(1)}
            </Typography>
            {ev.events.sort((a, b) => a.startTime - b.startTime).map((item) => (
              <>
                <EventCard event={item} />
                
              </>
            ))}
          </div>
        ))}
      </List>
    </RubContainer>
  )
}

export default Events
