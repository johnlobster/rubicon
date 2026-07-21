export type EventItem = {
  id: number
  day: 'saturday' | 'sunday'
  type: 'board' | 'miniatures'
  title: string
  genre: string
  startTime: number
  duration: number
  tables: number
  players: string
  gm: string
  description: string
  rules: string
}

const eventData:EventItem[] = [
  {
    id: 0,
    day: "sunday",
    title: "Spanish Ulcer",
    genre: "Napoleonic 15mm",
    startTime: 1000,
    duration: 5,
    tables: 4,
    players: "6-8",
    gm: "John Webster",
    type: "miniatures",
    description: "The French lost a major battle and are retreating. The rear guard is tasked with holding back the Allies (British and Spanish). There will be about 1000 miniatures on the table",
    rules:  "Valour and Fortitude, available for free from Perry Miniatures website. Fast play - expect Battalions to die quickly"
  },
  
  {
    id: 1,
    day: "saturday",
    title: "Crusader clash",
    genre: "Medieval 28mm",
    startTime: 1100,
    duration: 4,
    tables: 2,
    gm: "John Webster",
    players: "4-6",
    type: "miniatures",
    description: "Two forces meet in the desert, both sides are desperate and have brought everything they can find, which means swords, magic, beasts and flying carpets. Did I mention the camels ?",
    rules: "Dragon Rampant by Osprey modified for multiplayer."
  },
  
];
    

export default eventData;