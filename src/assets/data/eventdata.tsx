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
  {
    id: 3,
    day: "saturday",
    title: "Into the Heart of Darkness",
    genre: "Colonial Africa 25mm",
    startTime: 1100,
    duration: 4,
    tables: 1,
    gm: "Charles Gomez",
    gmEmail: "cgomez344@yahoo.com",
    gmPhone: "",
    players: "2-6",
    gameType: "miniatures",
    description: "For months, the remote mission station at St. Michael's Crossing stood as a lonely outpost of faith and civilization on the edge of the unexplored interior.  Its founder Father Mathias was known to distant villages treating the sick, mediating tribal disputes and spreading the Gospel.  Three weeks ago, the mission fell silent.  The colonial Governor has ordered three expeditionary forces to go into the interior and find Father Mathias and return him safely.",
    rules: "The Men Who Would Be Kings (some house rules)"
  },
  {
    id: 4,
    gm: "Aaron Martin",
    gmEmail: "aaronmnewark@yahoo.com",
    gmPhone: "510 396 3022",
    day: 'sunday',
    startTime: 1600,
    duration: 3,
    tables: 2,
    genre: "WW1. Grand Strategic",
    players: "4",
    gameType: 'board',
    title: "Versailles 1919",
    description: "Diplomatic. Winners dividing up the world after failing in Crisis 1914",
    rules: "Negotiating. Bidding. Avoiding unrest",

  },
  {
    id: 5,
    gm: "Aaron Martin",
    gmEmail: "aaronmnewark@yahoo.com",
    gmPhone: "510 396 3022",
    day: 'saturday',
    startTime: 1700,
    duration: 3,
    tables: 1,
    genre: "card driven, grand strategic",
    players: "5",
    gameType: 'board',
    title: "Crisis 1914",
    description: "Diplomatic brinksmanship. France, Britain , Russia, Austria Hungary and Germany trying to avoid World War 1",
    rules: "card driven. Press your luck.",

  },
  {
    id: 6,
    gm: "Roger Mark",
    gmEmail: "crunchgrunt@gmail.com",
    gmPhone: "9168994417",
    day: 'sunday',
    startTime: 1300,
    duration: 4,
    tables: 2,
    genre: "ACW/10mm",
    players: "4 to 5",
    gameType: 'miniatures',
    title: "The Devil's to pay! Gettysburg the first day.",
    description: `First Day at Gettysburg.\n
On the morning of July 1, 1863, Confederate troops from Archer’s brigade(under Heth) advanced from Cashtown toward Gettysburg seeking supplies, led by artillery because Stuart’s cavalry was absent.\n
Expecting only militia that would flee, they instead met Buford’s Union cavalry on Herr’s Ridge.\n
A sharp fight developed as Archer’s and Davis’s brigades pushed against the dismounted troopers, who held using rapid carbine fire.Around 9: 30 a.m., Union I Corps commander Reynolds arrived, asked Buford what was wrong, and received the reply: \“The Devil’s to pay!\”\n
This unexpected clash marked the opening of the three- day Battle of Gettysburg; the first day’s decisions and fighting shaped the entire battle.
`,

    rules: "Slightly modified, (for miniatures instead of chits) Black Swan board game rules.",

},
  {
    id: 7,
    gm: "Kellen Dyer",
    gmEmail: "kdyer.artist@gmail.com",
    gmPhone: "530-409-1990",
    day: 'saturday',
    startTime: 1000,
    duration: 10,
    tables: 1,
    genre: "Survival/Horror/Campaign/25mm-100mm",
    players: "2-3",
    gameType: 'miniatures',
    title: "Kingdom Death: Monster",
    description: `Berserk meets Monster Hunter.\n
Four Survivors struggle to fight against massive grotesque monsters harvesting their resources for settlement survival.\n
Join us in trying to build a thriving settlement against monsters that lurk in the dark. Harvest their resources to craft weapons and armor. Dice rolling contributes to extreme highs and lows while progressing a unique story. Rounds last about 1.5-2 hrs, players are free to come and go as they please. If a player is waiting I suggest swapping out at end of round or if your survivor dies. All are welcome to play I will keep this game PG and not openly display any of the games suggestive content, parents be advised or research before play. Please be respectful of your fellow players and the GM's components/painted miniatures.`,
    rules: `"People of the Lantern" Campaign with Core 1.6 Rules, Expansions, and some fan content mixed in. `,
  },
];
    

export default eventData;