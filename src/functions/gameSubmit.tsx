import React from 'react';

// gameSubmit has been put into a separate file for easier testing
// in normal operation POSTs to Cloudflare API to send email
// used in Gm.tsx to handle form submission
// async function because of fetch() call to Cloudflare API

type TestOptions = 'email' | 'console' | 'email test' | 'mailto';


/* Email example: use on bash command line
      curl "https://api.cloudflare.com/client/v4/accounts/b9f8511346108b063322a1f274efb702/email/sending/send" \
      --header "Authorization: Bearer cfat_NKyP31pJJRFKhJCoUbNylP6ZQocTL4Xk6YfcALuM39cb2842" \
      --header "Content-Type: application/json" \
      --data '{
      "to": "johnlobster@comcast.net",
      "from": "noreply@rubiconsac.com",
      "subject": "Welcome to Rubicon",
      "html": "<h1>Welcome!</h1><p>Thanks for signing up.</p>",
      "text": "Test email"
      }'

curl -X GET "https://api.cloudflare.com/client/v4/accounts/b9f8511346108b063322a1f274efb702/tokens/verify" \
-H "Authorization: Bearer cfat_NKyP31pJJRFKhJCoUbNylP6ZQocTL4Xk6YfcALuM39cb2842"
*/


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
  if (testOptions === 'console') {
    console.log("Form data")
    console.log(elements);
    console.log(createDS());

  } else if (testOptions === 'mailto') {
    console.log(createDS());
  

  } else if (testOptions === 'email test') {
    // build body of POST request
    let postBody:string = "";
    postBody = postBody + '--header "Content - Type: application / json"'
    postBody = postBody + "-- data'{ "
    postBody = postBody + '"to": "johnlobster@comcast.net",'
    postBody = postBody + '"from": "noreply@rubiconsac.com",'
    postBody = postBody + '"subject": "Welcome to our service!"'
    postBody = postBody + '"text": "Test message from Rubicon submit via Cloudflare"'
    postBody = postBody + "}'"
    
    console.log("Email test")
    console.log(postBody)
    // Example of a POST request to Cloudflare API to send an email
    // --header "Content-Type: application/json"
    // --data '{
    //"to": "recipient@example.com",
    // "from": "welcome@yourdomain.com",
    // "subject": "Welcome to our service!",
    // "html": "<h1>Welcome!</h1><p>Thanks for signing up.</p>",
    // "text": "Welcome! Thanks for signing up."
    // }'
    try {
    
      const response = await fetch('https://api.cloudflare.com/client/v4/accounts/b9f8511346108b063322a1f274efb702/email/sending/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Replace with a real Cloudflare API token or use a server-side proxy.
          Authorization: 'Bearer cfat_NKyP31pJJRFKhJCoUbNylP6ZQocTL4Xk6YfcALuM39cb2842',
        },
        body: JSON.stringify(postBody),
      });

      const data = await response.json();
      console.log('Cloudflare response:', data);
    } catch (error) {
      console.error('Cloudflare POST error:', error);
    }
  }
}

export default gameSubmit;