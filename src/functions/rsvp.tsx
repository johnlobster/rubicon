// function to submit an rsvp for the event
// sends an email to organizers using emailjs service
// organizer adds manually to signup.tsx file - avoids use of a server

// rsvp submit pops up a dialog to enter name and an optional comment, then sends the email to organizers

import React from 'react';

import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: 'pHc98eKSD-85Bw4Lc',
  // Do not allow headless browsers
  blockHeadless: true,

  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per second
    throttle: 1000,
  },
});

// const emailjsEmail = 'rubiconwargamesac@gmail.com'
const emailjsEmail = 'johnlobster@comcast.net'

let emailjsMessage = "RSVP returned"

async function rsvpSubmit(event: React.SubmitEvent) {

  event.preventDefault();

  console.log ("rsvpSubmit called")

  emailjsMessage += "\n\nTest message"
  emailjs.send(
    'service_22vky32', 
    'template_edlkd2m', 
    {
      email: emailjsEmail,
      messageBody: emailjsMessage
    }
  ).then(
    (response) => {
      console.log('Email to submitter SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('Email to submitter FAILED...', error);
    },
  );
  return "Hello"
}

export default rsvpSubmit;