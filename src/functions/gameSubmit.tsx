import React from 'react';

type GameSubmitValues = Record<string, string>;

// function used in Gm page to submit the form data, either for testing or to create email using Cloudflare API.
async function gameSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const values = Array.from(form.querySelectorAll('input, textarea, select'))
    .filter((element) => element.type !== 'submit' && element.type !== 'button')
    .reduce<GameSubmitValues>((result, element) => {
      const key = element.name || element.id || 'unknown';
      return {
        ...result,
        [key]: element.value,
      };
    }, {});

  console.log('Form inputs:', values);

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
      body: JSON.stringify(values),
    });

    const data = await response.json();
    console.log('Cloudflare response:', data);
  } catch (error) {
    console.error('Cloudflare POST error:', error);
  }
}

export default gameSubmit;