// Functions to use with Schedule viewer
// import React from 'react'
// import eventData from '../assets/data/eventdata.tsx'

export type boxData = {
  title: string,
  len: number,
}
//function parseEvents(events: typeof eventData): boxData[]  {
//  return [ { title: 'Test', len: 3 } ]
//}
export function EventBox( length: number, cardColorIndex: number ) {
  return (
    <div>\
      Testing card length {length} color {cardColorIndex}
    </div>
  )
}

