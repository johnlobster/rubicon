export type EventItem = {
  day: 'saturday' | 'sunday'
  title: string
  startTime: string
  duration: number
  tables: number
  players: string
  type: 'board' | 'miniatures'
  description: string
}

const eventData = [
  {
    day: "Saturday",
    events: [
      {title: "Saturday special",
        startTime: "0900",
        duration: 2,
        tables: 2,
        players: 4,
        type: "board",
        description: "Description for Game 1"
      },
      {
        title: "AnotherSaturday special",
        startTime: "0900",
        duration: 2,
        tables: 2,
        players: 4,
        type: "miniatures",
        description: "Description for Game 1"
      }
    ]
  },
  {
    day: "Sunday",
    events: [
      {
        title: "Game 1",
        startTime: "0900",
        duration: 2,
        tables: 2,
        players: 4,
        type: "miniatures",
        description: "Description for Game 1"
    },
      {
        title: "Game 2",
        startTime: "0900",
        duration: 2,
        tables: 2,
        players: 4,
        type: "miniatures",
        description: "Description for Game 1"
      },
  ]
  }
];
    

export default eventData;