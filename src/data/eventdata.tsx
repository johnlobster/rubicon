export type EventItem = {
  id: string
  title: string
  date: string
  location: string
  description?: string
  price?: string
}

const events: EventItem[] = [
  {
    id: 'e1',
    title: 'Historical Miniatures Tournament',
    date: '2026-11-06',
    location: 'Game Kastle Sacramento',
    description: 'A multi-round historical miniatures tournament.',
    price: '$25 for the weekend',
  },
  {
    id: 'e2',
    title: 'Open Skirmish Night',
    date: '2026-11-07',
    location: 'Game Kastle Sacramento',
    description: 'Casual games and demo tables.',
    price: '$15 per day',
  },
  {
    id: 'e3',
    title: 'Painting Workshop',
    date: '2026-11-06',
    location: 'Workshop Room A',
    description: 'Bring your miniatures and learn advanced techniques.',
    price: 'Free (registration required)',
  },
]

export default events
