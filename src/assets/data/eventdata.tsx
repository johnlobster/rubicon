export type EventItem = {
  id: number   // may not be required. Use in code to identify the event item
  day: 'saturday' | 'sunday'
  gameType: 'miniatures' | 'board'  
  title: string
  genre: string
  startTime: number
  duration: number
  tables: number
  players: string
  gm: string
  gmEmail: string
  gmPhone: string
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
    tables: 2,
    players: "6-8",
    gm: "John Webster",
    gmEmail: "johnlobster@comcast.net",
    gmPhone: "9167928734",
    gameType: "miniatures",
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
    tables: 1,
    gm: "John Webster",
    gmEmail: "johnlobster@comcast.net",
    gmPhone: "9167928734",
    players: "4-6",
    gameType: "miniatures",
    description: "Two forces meet in the desert, both sides are desperate and have brought everything they can find, which means swords, magic, beasts and flying carpets. Did I mention the camels ?",
    rules: "Dragon Rampant by Osprey modified for multiplayer."
  },
  {
    id: 2,
    day: "sunday",
    title: "Legend of Robin Hood",
    genre: "Medieval 15mm",
    startTime: 1400,
    duration: 4,
    tables: 1,
    gm: "Greg Marker",
    gmEmail: "silverscribe@surewest.net",
    gmPhone:"9162014580",
    players: "4-6",
    gameType: "miniatures",
    description: `Unhappy Bishops, Harassed Tax Collectors, and Irritated Shire-reeves\n
  The evil forces of greed will be seeking to protect what isn't theirs while the forces of good will be trying to relieve them of their burdened consciences.  Oh, wait, they may not have any!  No matter, it is but an excuse for the slings and arrows of outrageous fun.\n
  Players will run a few well known characters from either side of the Robin Hood mythos along with a few additional figures to boost numbers. A minimum of three groups of four figures for each player. Most of the primary characters come from the Robin Hood range from Splintered Light Miniatures as do most of the other figures. Will it be Sherwood Forest or, perhaps, the more sinister Sliverwood Forest?\n
  `,
    rules: "Fistful of Lead Bigger Battles with minor modifications"
  },
  
];
    

export default eventData;