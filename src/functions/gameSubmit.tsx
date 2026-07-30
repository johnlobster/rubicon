import React from 'react';
import emailjs from '@emailjs/browser';

// gameSubmit has been put into a separate file for easier testing
// in normal operation POSTs to Cloudflare API to send email
// used in Gm.tsx to handle form submission
// async function because of fetch() call to Cloudflare API

type TestOptions = 'email' | 'console' | 'email test' ;

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

async function gameSubmit(event: React.SubmitEvent, testOptions: TestOptions = 'console') {
  event.preventDefault();

  const form = event.currentTarget as HTMLFormElement;
  const formData = new FormData(form);
  

  // Extract input, textarea, and select elements and their values into an array
  const elements = Array.from(
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select')
  ).map((el) => {
    const nameKey = el.name;
    // Prefer FormData values if a name is present (handles multi-select / repeated names)
    let value: string | string[] ;
    if (nameKey) {
      const all = formData.getAll(nameKey).map((v) => String(v));
      if (all.length === 0) {
        value = String((el as HTMLInputElement).value ?? '');
      } else if (all.length === 1) {
        value = all[0];
      } else {
        value = all;
      }
    } else {
      value = String((el as HTMLInputElement).value ?? '');
    }

    return {
      name: nameKey || null,
      id: el.id || null,
      tag: el.tagName.toLowerCase(),
      type: (el as HTMLInputElement).type || null,
      value,
    };
  });

  function getFormValue (field:string) {
    let r = "";
    elements.forEach((element) => {
      if (element.name === field) {
        if (element.value.length !== 0) {
          r = Array.isArray(element.value) ? element.value.join(', ') : element.value
        }
      }
    })
    return r;
  }

  // turns the elements array into a data structure for pasting into eventdata.tsx
  function createDS () {
    let resultString = "{\n  id: 100,\n"; // id is a large value to be filled in when pasting
    elements.forEach((element) => {
      if (element.name) { // filter out nulls that were badly formed (or could fix the code that creates it ...)
        if (element.name === "startTime" || element.name === "duration" || element.name === "tables") {
          // process as a number
          if (element.value.length === 0) {
            resultString += `  ${element.name}: 0,\n`
          } else {
            resultString += `  ${element.name}: ${Array.isArray(element.value) ? element.value.join(', ') : element.value},\n`;
          }
        } else if (element.name === "day" || element.name === "gameType") { 
          // enumerated type
          resultString += `  ${element.name}: '${Array.isArray(element.value) ? element.value.join('').toLowerCase() : element.value.toLowerCase()}',\n`
        } else {
          // process as a string
          if ( element.value.length === 0) {
            resultString += `  ${element.name}: "",\n`
          } else {
            resultString += `  ${element.name}: "${Array.isArray(element.value) ? element.value.join(', ') : element.value}",\n`;
          }
        }

      }
    });
    resultString += "\n},"
    return resultString;

  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // send messages according to test mode
  let message = createDS()

  if (testOptions === 'console') {
    console.log("Form data")
    console.log(elements);
    console.log(createDS());

  } else if (testOptions === 'email test') {
    console.log("Email test")
    
    message = `${getFormValue("gm")} kindly submitted a game called ${getFormValue("gameTitle")} \n\n ${message}`
    const templateParams = {
      email: 'johnlobsterg@gmail.com',
      messageBody: message
    };
    
    emailjs.send('service_22vky32', 'template_edlkd2m', templateParams).then(
      (response) => {
        console.log('Email SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('Email FAILED...', error);
      },
    );
    
  } else {
    // Send email by default : one email to Rubicon team, confirmation to submitter
    console.log("Form submission, send out emails")

    message = `${getFormValue("gm")} kindly submitted a game called ${getFormValue("gameTitle")} \n\n ${message}`
    const templateParams = {
      email: 'rubiconwargamesac@gmail.com',
      messageBody: message
    };
    emailjs.send('service_22vky32', 'template_edlkd2m', templateParams).then(
      (response) => {
        console.log('Email to Rubicon team SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('Email to Rubicon team FAILED...', error);
      },
    );
    // send a confirmation to submitter (gmEmail) if the email is valid
    if (getFormValue("gmEmail").length !== 0) {
      
      if (getFormValue("gm").length !== 0) {
        // valid name of gm
        message = `Thank you ${getFormValue("gm")} for submitting the event ${getFormValue("gameTitle")}\nMike will get back to you shortly\n\n${createDS()}`

      } else {
        message = `${message}`
      }

      const templateParams2 = {
        email: 'rubiconwargamesac@gmail.com',
        messageBody: message
      };
      emailjs.send('service_22vky32', 'template_edlkd2m', templateParams2).then(
        (response) => {
          console.log('Email to submitter SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('Email to submitter FAILED...', error);
        },
      );
    } else {
      console.log("Email sending from form submission, no gmEmail given")
    }
  }
}

export default gameSubmit;