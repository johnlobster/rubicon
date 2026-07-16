import React from 'react';

// gameSubmit has been put into a separate file for easier testing
// in normal operation POSTs to Cloudflare API to send email
// used in Gm.tsx to handle form submission
// async function because of fetch() call to Cloudflare API

type TestOptions = 'email' | 'console';

async function gameSubmit(event: React.SubmitEvent, testOptions: TestOptions = 'console') {
  event.preventDefault();

  const form = event.currentTarget as HTMLFormElement;
  const formData = new FormData(form);

  // Extract input, textarea, and select elements and their values into an array
  const elements = Array.from(
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select')
  ).map((el) => {
    const nameKey = el.name || el.id || '';
    // Prefer FormData values if a name is present (handles multi-select / repeated names)
    let value: string | string[] = '';
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

  if (testOptions === 'console') {
    console.log('Form elements array:', elements);
  } else {
    // build body of POST request
    let postBody:string = "";
    postBody = postBody + '--header "Content - Type: application / json"'
    postBody = postBody + "-- data'{ "
    postBody = postBody + '"to": "johnlobster@comcast.net",'
    postBody = postBody + '"from": "rubiconsubmit",'
    postBody = postBody + '"text": "Test message from Rubicon submit via Cloudflare"'
    postBody = postBody + "}'"
    
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
      const response = await fetch('https://api.cloudflare.com/client/v4/accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Replace with a real Cloudflare API token or use a server-side proxy.
          Authorization: 'Bearer YOUR_CLOUDFLARE_API_TOKEN',
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