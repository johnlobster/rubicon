import { useMemo, useState } from 'react'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import events from '../assets/data/eventdata.tsx'
import RubContainer from '../components/RubContainer'

function Events() {
  const [selectedDay, setSelectedDay] = useState<'weekend' | 'saturday' | 'sunday'>('weekend')
  const [selectedType, setSelectedType] = useState<'all' | 'board' | 'miniatures'>('all')

  const filteredEvents = useMemo(() => {
    // filter by day
    const byDay = selectedDay === 'weekend' ? events : events.filter((ev) => ev.day.toLowerCase() === selectedDay)

    // filter each day's events by type
    const byType = byDay
      .map((ev) => ({ ...ev, events: ev.events.filter((item) => selectedType === 'all' ? true : item.type === selectedType) }))
      .filter((ev) => ev.events.length > 0)

    return byType
  }, [selectedDay, selectedType])

  return (
    <RubContainer>
      <Typography variant="h1" gutterBottom align="left">
        Events
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
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

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
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
            <Typography variant="h5" sx={{ mt: 2, mb: 1 }} align='left'>
              {ev.day}
            </Typography>
            {ev.events.map((item) => (
              <ListItem key={item.title} alignItems="flex-start">
                <ListItemText
                  primary={item.title}
                  secondary={`${item.startTime} • ${item.duration} hours • ${item.description}`}
                />
              </ListItem>
            ))}
          </div>
        ))}
      </List>
    </RubContainer>
  )
}

export default Events
